'use strict';


var getPost = function(generalOptions, specificOptions) {
  describe('API tests for: ' + specificOptions.name, function() {
    var allLanguagesFlag = false;
    var isApiOk = true;
    var url = generalOptions.baseUrl + specificOptions.route;



    // GET all settings
    it('Making GET request for ' + specificOptions.name + ' ,should return status code 200', function(done) {
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        if (response === undefined) {
          isApiOk = false;
          console.log(specificOptions.name + " API is not ready for tests. Pls check API.");
          done();
        }
        expect(response.statusCode).toBe(200);
        var jsonBody = JSON.parse(body);
        expect(jsonBody).not.toBeFalsy();

        if (jsonBody.availableLanguages === "en-us,es-mx,fr-ca,pt-br") {
          allLanguagesFlag = true;
        }
        done();
      });
    });




    // Making POST request to DB to delete our test data BEFORE the test
    it('Deleting test data from the DB before the tests', function(done) {
      if (!isApiOk) {
        done();
      }
      var query = "delete from settings where value='TEST'";
      var dBpostData = {
        query: query
      };
      var urlToDB = generalOptions.baseUrl + "/contentManagement/dbQuery";
      generalOptions.request.post({
        url: urlToDB,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: dBpostData
      }, function(error, response, body) {
        //console.log(JSON.stringify(body));
        done();
      });
    });


    // Making POST to add new settings
    it('Creating new settings', function(done) {
      if (!isApiOk) {
        done();
      }
      generalOptions.request.post({
        url: url,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: {
          "TEST": "TEST"
        }
      }, function(error, response, body) {
        expect(JSON.stringify(body.insertedOrUpdated[0])).toBe('"TEST"');
        done();
      });
    });


    // Making POST request to DB to delete our test data AFTER the test
    it('Deleting test data from the DB after the tests', function(done) {
      if (!isApiOk) {
        done();
      }
      var query = "delete from settings where value='TEST'";
      var dBpostData = {
        query: query
      };
      var urlToDB = generalOptions.baseUrl + "/contentManagement/dbQuery";
      generalOptions.request.post({
        url: urlToDB,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: dBpostData
      }, function(error, response, body) {
        done();
      });
    });



    // // Validation Tests - Check that POST with missing properties returns 400
    // it('Validation: POST request returns status code 400 for missing properties', function(done) {
    //   generalOptions.request.post({
    //     url: url,
    //     headers: {
    //       'content-type': 'application/json'
    //     },
    //     json: true
    //   }, function(error, response, body) {
    //     expect(response.statusCode).toBe(400);
    //     //expect(body.message).toEqual('Post invalid.'); // Text message should be updated once will be implemented by Shervin
    //     done();
    //   });
    // });


    //var post = function(postJSON) {



    // ---------------- CHANGE LANGUAGE TO FR-CA ---------
    // POST to update settings
    it('Making POST request, it should return status code 200', function(done) {
      if (!isApiOk) {
        done();
      }
      generalOptions.request.post({
        url: url,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: specificOptions.postJSON1
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        //expect(JSON.parse(body)).toBeTruthy();     //Unexpected token o in JSON at position 1  - should be fix body?
        done();
      });

    });


    // Making GET to verify changes via previous POST
    it('Making GET test for ' + specificOptions.name + ' to verify POST changes', function(done) {
      if (!isApiOk) {
        done();
      }
      setTimeout(function() {
        generalOptions.request.get({
          url: url
        }, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          expect(JSON.parse(body)).toBeTruthy();
          var bodyJS = JSON.parse(body);
          expect(bodyJS.subWooferVolume).toBe(specificOptions.postJSON1.subWooferVolume);
          expect(bodyJS.learningVideoVolume).toBe(specificOptions.postJSON1.learningVideoVolume);

          expect(bodyJS.systemDefaultLanguage).toBe(specificOptions.postJSON1.systemDefaultLanguage);
          expect(bodyJS.systemCurrentLanguage).toBe(specificOptions.postJSON1.systemCurrentLanguage);

          expect(bodyJS.hdrEnabled).toBe(specificOptions.postJSON1.hdrEnabled);
          expect(bodyJS.soundbarEnabled).toBe(specificOptions.postJSON1.soundbarEnabled);

          done();
        });
      }, 101);
    });



    // Making GET to verify language changes in CATEGORIES
    it('Making GET test for ' + specificOptions.name + 'CATEGORIES changes', function(done) {
      if (!isApiOk) {
        done();
      }
      if (!allLanguagesFlag) {
        console.log("Please check: availableLanguages from v2/settings should be = 'en-us,es-mx,fr-ca,pt-br'");
        done();
      }
      if (allLanguagesFlag) {
        var urlCateg = generalOptions.baseUrl + '/categories/';
        generalOptions.request.get({
          url: urlCateg
        }, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          var bodyJS = JSON.parse(body);
          expect(bodyJS).toBeTruthy();
          var arrCateg = bodyJS.categories;
          for (var i = 0; i < arrCateg.length; i++) {
            expect(arrCateg[i].language).toBe(specificOptions.postJSON1.systemCurrentLanguage);

          }
          done();
        });
      }
    });

    // ---------------------------------------------





    // ---------------- CHANGE LANGUAGE TO EN-US ---------
    // POST to update settings
    it('Making POST request, it should return status code 200', function(done) {
      if (!isApiOk) {
        done();
      }
      generalOptions.request.post({
        url: url,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: specificOptions.postJSON2
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        //expect(JSON.parse(body)).toBeTruthy();     //Unexpected token o in JSON at position 1  - should be fix body?
        done();
      });

    });


    // Making GET to verify changes via previous POST
    it('Making GET test for ' + specificOptions.name + ' to verify POST changes', function(done) {
      if (!isApiOk) {
        done();
      }
      setTimeout(function() {
        generalOptions.request.get({
          url: url
        }, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          expect(JSON.parse(body)).toBeTruthy();
          var bodyJS = JSON.parse(body);
          expect(bodyJS.subWooferVolume).toBe(specificOptions.postJSON2.subWooferVolume);
          expect(bodyJS.learningVideoVolume).toBe(specificOptions.postJSON2.learningVideoVolume);

          expect(bodyJS.systemDefaultLanguage).toBe(specificOptions.postJSON2.systemDefaultLanguage);
          expect(bodyJS.systemCurrentLanguage).toBe(specificOptions.postJSON2.systemCurrentLanguage);

          expect(bodyJS.hdrEnabled).toBe(specificOptions.postJSON2.hdrEnabled);
          expect(bodyJS.soundbarEnabled).toBe(specificOptions.postJSON2.soundbarEnabled);

          done();
        });
      }, 101);
    });



    // Making GET to verify language changes in CATEGORIES
    it('Making GET test for ' + specificOptions.name + 'CATEGORIES changes', function(done) {
      if (!isApiOk) {
        done();
      }
      if (!allLanguagesFlag) {
        console.log("Please check: availableLanguages from v2/settings should be = 'en-us,es-mx,fr-ca,pt-br'");
        done();
      }
      if (allLanguagesFlag) {
        var urlCateg = generalOptions.baseUrl + '/categories/';
        generalOptions.request.get({
          url: urlCateg
        }, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          var bodyJS = JSON.parse(body);
          expect(bodyJS).toBeTruthy();
          var arrCateg = bodyJS.categories;
          for (var i = 0; i < arrCateg.length; i++) {
            expect(arrCateg[i].language).toBe(specificOptions.postJSON2.systemCurrentLanguage);
          }

          done();
        });
      }
    });

    // ---------------------------------------------









    // post(specificOptions.postJSON1); // Change language to FR-CA
    // post(specificOptions.postJSON2); // Change language to EN-US


  })
};

module.exports = getPost;
