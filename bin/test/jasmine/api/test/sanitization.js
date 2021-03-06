'use strict';
var unitID;
var valueBeforeChange = 0;


var sanitization = function(generalOptions, specificOptions, parameterForTest) {
  describe('Sanitization Test: ' + specificOptions.name, function() {



    beforeAll(function() {
      this.url = generalOptions.baseUrl + specificOptions.route;

      if (specificOptions.route == '/stores/') {
        valueBeforeChange = specificOptions.postJSON1.stores[0].number;
        this.newPost = JSON.parse(JSON.stringify(specificOptions.postJSON1));
        this.newPost.stores[0].number = this.newPost.stores[0].number + parameterForTest;
      } else

      if (specificOptions.route == '/settings/') {
        this.newPost = JSON.parse(JSON.stringify(specificOptions.postJSON1));
        this.valueBeforeChange1 = this.newPost.systemDefaultLanguage;
        this.valueBeforeChange2 = this.newPost.systemCurrentLanguage;
        this.newPost.systemDefaultLanguage = parameterForTest + this.newPost.systemDefaultLanguage + parameterForTest;
        this.newPost.systemCurrentLanguage = parameterForTest + this.newPost.systemCurrentLanguage + parameterForTest;
      }
    }); //beforeAll



    //Taking unitID
    it('Taking unitID for ' + specificOptions.name, function(done) {
      var flagCurrentStore = false;
      generalOptions.request.get({
        url: this.url
      }, function(error, response, body) {
        var bodyJS = JSON.parse(body);

        //  = = = = = = = = = /stores/
        if (specificOptions.route == '/stores/') {
          var storesArray = bodyJS.stores;
          var storesArrayLength = storesArray.length;
          for (var i = 0; i < storesArrayLength; i++) {

            if (storesArray[i].isCurrent == true) {
              flagCurrentStore = true;
              unitID = storesArray[i].id;
              this.unitID = unitID;
              done();
            }
          }
          // If no current store
          if (!flagCurrentStore) {
            throw 'NO CUURENT STORE';
          }
        } else

          //  = = = = = = = = = /devices/
          if (specificOptions.route == '/devices/') {
            unitID = bodyJS.devices[0].id;
            var devicesArray = bodyJS.devices;
            var devicesArrayLength = devicesArray.length;
            for (var i = 0; i < devicesArrayLength; i++) {
              if (devicesArray[i].ip == generalOptions.ip) {
                unitID = devicesArray[i].id;
                this.unitID = unitID;
                done();
              }
            }
          } else
            //  = = = = = = = = = /content/
            if (specificOptions.route == '/content/') {
              unitID = bodyJS.content[0].id;
              this.unitID = unitID;
              done();
            } else
              // = = = = = = = = = categories/
              if (specificOptions.route == '/categories/') {
                unitID = bodyJS.categories[0].id;
                this.unitID = unitID;
                done();
              } else {
                console.log("NO sanitization TESTS for " + specificOptions.route);
                unitID = '';
                this.unitID = unitID;
                done();
              }
      });
    });



    // POST whitespace trimming (left and right)
    it('It should pass POST request with whitespace in values, status code 200, checking response message', function(done) {
      generalOptions.request.post({
        url: this.url,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: this.newPost
      }, function(error, response, body) {
        if (specificOptions.route == '/stores/') {
          //expect(body.message).toEqual('Store exists. Changing current store...');
          expect(response.statusCode).toBe(200);
          expect(body).toBeTruthy(); // something frong in that body
          done();
        }
      });

    });


  afterAll(function() {
    // Check whitespace sanitization is applied to POSTs
    it('Check trims whitespace from values for ' + specificOptions.name, function(done) {
      var newUrl = this.url + unitID;

      generalOptions.request.get({
        url: newUrl
      }, function(error, response, body) {

        var bodyJS = JSON.parse(body);

        if (specificOptions.route == '/stores/') {
          expect(bodyJS.number).toEqual(valueBeforeChange);
          done();
        } else
        if (specificOptions.route == '/settings/') {
          expect(bodyJS.systemDefaultLanguage).toEqual(this.valueBeforeChange1);
          expect(bodyJS.systemCurrentLanguage).toEqual(this.valueBeforeChange2);
          done();
        }
      });
    });
    });


  })
};

module.exports = sanitization;
