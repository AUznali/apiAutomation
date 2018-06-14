'use strict';


var getPost = function(generalOptions, specificOptions) {
  describe('API tests for: ' + specificOptions.name, function() {
    var url = generalOptions.baseUrl + specificOptions.route;


    // GET all settings
    it('Mamking GET request for ' + specificOptions.name + ' return status code 200', function(done) {
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body)).not.toBeFalsy();
        done();
      });
    });



    var post = function(postJSON) {

        // POST to update settings
        it('Making POST request, it should return status code 200', function(done) {

          generalOptions.request.post({
            url: url,
            headers: {
              'content-type': 'application/json'
            },
            json: true,
            body: postJSON
          }, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            //expect(JSON.parse(body)).toBeTruthy();     //Unexpected token o in JSON at position 1  - should be fix body?
            done();
          });

        });


        // Making GET to verify changes via previous POST
        it('Making GET test for ' + specificOptions.name + ' to verify POST changes', function(done) {
          setTimeout(function() {
          console.log("FLAG");
          generalOptions.request.get({
            url: url
          }, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            expect(JSON.parse(body)).toBeTruthy();
            var bodyJS = JSON.parse(body);
            console.log(postJSON.subWooferVolume);
            expect(bodyJS.subWooferVolume).toBe(postJSON.subWooferVolume);
            expect(bodyJS.learningVideoVolume).toBe(postJSON.learningVideoVolume);

            expect(bodyJS.systemDefaultLanguage).toBe(postJSON.systemDefaultLanguage);
            expect(bodyJS.systemCurrentLanguage).toBe(postJSON.systemCurrentLanguage);

            expect(bodyJS.hdrEnabled).toBe(postJSON.hdrEnabled);
            expect(bodyJS.soundbarEnabled).toBe(postJSON.soundbarEnabled);

            done();
          });
            }, 101);
        });



        // Making GET to verify changes for CATEGORIES
        it('Making GET test for ' + specificOptions.name + 'CATEGORIES changes', function(done) {
          var urlCateg = generalOptions.baseUrl + '/categories/';
          generalOptions.request.get({
            url: urlCateg
          }, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            expect(JSON.parse(body)).toBeTruthy();
            var bodyJS = JSON.parse(body);
            var arrCateg = bodyJS.categories;

            for (var i = 0; i < arrCateg.length; i++) {
              expect(arrCateg[i].language).toBe(postJSON.systemCurrentLanguage);
            }
            done();
          });
        });




    }



       post(specificOptions.postJSON1); // Change language to FR-CA
       //post(specificOptions.postJSON2); // Change language to EN-US





  })
};

module.exports = getPost;
