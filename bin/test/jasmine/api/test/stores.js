'use strict';

//Changing store number to -2 or -3

var stores = function(generalOptions, specificOptions) {
  describe('API tests for: ' + specificOptions.name, function() {
    var url = generalOptions.baseUrl + specificOptions.route;
    var urlSettings = generalOptions.baseUrl + '/settings/';
    var postJSON;


    // Making GET requet to get all stores
    it('GET test for ' + specificOptions.name + ' return status code 200', function(done) {
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body)).not.toBeFalsy();
        done();
      });
    });




    // Making POST request to NOT existing store - checking response message
    it('POST request to NOT existing store returns status code 200', function(done) {
      generalOptions.request.post({
        url: url,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: specificOptions.postJsonStoreNotExist
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(body).not.toBeFalsy();
        expect(body.message).toEqual('Store does not exist on our server. NO CHANGE...'); // new for v2
        done();
      });
    });



    //Verification that store number is different that one we have in postJSON (preparing for next POST)
    it('Making GET test for ' + specificOptions.name + ' returns code 200, cheking that store number is different that one we have in next Post', function(done) {
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        //expect(JSON.parse(body)).toBeTruthy();
        //expect(JSON.parse(body)).not.toBeFalsy();
        var bodyJS = JSON.parse(body);
        var bodyArray = bodyJS.stores;
        var bodyArrayLength = bodyArray.length;
        var foundStores = 0;

        for (var i = 0; i < bodyArrayLength; i++) {
          if (bodyArray[i].isCurrent) {
            if (bodyArray[i].number !== specificOptions.postJSON1.stores[0].number) {
              postJSON = specificOptions.postJSON1;
            } else {
              postJSON = specificOptions.postJSON2;
            }
          }
        };
        done();
      });
    });




    // Making POST request to existing store to update store number
    it('POST request to existing store returns status code 200', function(done) {
      generalOptions.request.post({
        url: url,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: postJSON
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(body).not.toBeFalsy();
        expect(body.message).toEqual('Store exists. Changing current store...'); // for v2 - body.message,  for v1: body.error.message
        done();
      });
    });





    // Making GET request to verify, that store number was changed.
    it('Making GET test for ' + specificOptions.name + ' returns code 200, store in /stores/ number should be updated via previous POST request', function(done) {
      setTimeout(function() {
        generalOptions.request.get({
          url: url
        }, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          expect(JSON.parse(body)).not.toBeFalsy();
          var bodyJS = JSON.parse(body);
          var bodyArray = bodyJS.stores;
          var bodyArrayLength = bodyArray.length;
          var foundStores = 0;

          for (var i = 0; i < bodyArrayLength; i++) {
            if (bodyArray[i].isCurrent) {
              foundStores++;
              expect(bodyArray[i].number).
              toEqual(postJSON.stores[0].number);
            }
          };

          function storesFound() {
            //Checking, that only one store have isCurrent : true
            generalOptions.since('No store found. Make sure you pass with POST existing store number').expect(foundStores).toEqual(1);
          };

          setTimeout(function() {
            storesFound(), 1000});
          done();
        });
      }, 101);
    });





    // Making GET request TO /SETTINGS/ to verify, that store number was changed.
    it('Making GET test for ' + specificOptions.name + ' returns code 200, store number in /settings/ should be updated via previous POST request', function(done) {
      generalOptions.request.get({
        url: urlSettings
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body)).not.toBeFalsy();
        var bodyJS = JSON.parse(body);
        expect(bodyJS.currentStore).
        toEqual(postJSON.stores[0].number);
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
    //     expect(body.message).toEqual('Post invalid.'); // for v2 - body.message,  for v1: body.error.message
    //     done();
    //   });
    // });
  })
};

module.exports = stores;
