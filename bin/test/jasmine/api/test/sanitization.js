'use strict';
var unitID;
var valueBeforeChange = 0;


var sanitization = function(generalOptions, specificOptions, parameterForTest) {
  describe('New ' + specificOptions.name + ' Sanitization Test: ', function() {
    var url = generalOptions.baseUrl + specificOptions.route;



    if (specificOptions.route == '/stores/') {

      valueBeforeChange = specificOptions.postJSON.stores[0].number;
      var newPost = JSON.parse(JSON.stringify(specificOptions.postJSON));
      newPost.stores[0].number = newPost.stores[0].number + parameterForTest;
    } else

    if (specificOptions.route == '/settings/') {
      var newPost = JSON.parse(JSON.stringify(specificOptions.postJSON1));
      var valueBeforeChange1 = newPost.systemDefaultLanguage;
      var valueBeforeChange2 = newPost.systemCurrentLanguage;
      newPost.systemDefaultLanguage = parameterForTest + newPost.systemDefaultLanguage + parameterForTest;
      newPost.systemCurrentLanguage = parameterForTest + newPost.systemCurrentLanguage + parameterForTest;
    }


    // POST whitespace trimming (left and right)
    it('it should pass POST request with whitespace in values, status code 200, checking response message', function(done) {
      generalOptions.request.post({
        url: url,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: newPost
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(body).not.toBeFalsy();

        if (specificOptions.route == '/stores/') {
          expect(body.error.message).toEqual('Store already exists.');
        }
        done();
      });
    });


    //Taking unitID
    it('Taking unitID for ' + specificOptions.name, function(done) {
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        var bodyJS = JSON.parse(body);

        if (specificOptions.route == '/stores/') {
          var storesArray = bodyJS.stores;
          var storesArrayLength = storesArray.length;

          for (var i = 0; i < storesArrayLength; i++) {
            if (storesArray[i].isCurrent) {
              unitID = storesArray[i].id;
            }
          }
        } else

        if (specificOptions.route == '/devices/') {
          unitID = bodyJS.devices[0].id;
          var devicesArray = bodyJS.devices;
          var devicesArrayLength = devicesArray.length;

          for (var i = 0; i < devicesArrayLength; i++) {
            if (devicesArray[i].ip == generalOptions.ip) {
              unitID = devicesArray[i].id;
            }
          }
        } else

        if (specificOptions.route == '/content/') {
          unitID = bodyJS.content[0].id;
        } else

        if (specificOptions.route == '/categories/') {
          unitID = bodyJS.categories[0].id;
        } else {
          unitID = '';
        }
        this.unitID = unitID;
        done();
      });
    });


    // Check whitespace sanitization is applied to POSTs
    it('Check trims whitespace from values for ' + specificOptions.name, function(done) {
      url = url + unitID;
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        var bodyJS = JSON.parse(body);

        if (specificOptions.route == '/stores/') {
          expect(bodyJS.number).toEqual(valueBeforeChange);
        } else
        if (specificOptions.route == '/settings/') {
          expect(bodyJS.systemDefaultLanguage).toEqual(valueBeforeChange1);
          expect(bodyJS.systemCurrentLanguage).toEqual(valueBeforeChange2);
        }
        done();
      });
    });

  })
};

module.exports =  sanitization;
