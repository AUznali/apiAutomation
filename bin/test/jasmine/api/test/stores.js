'use strict';


var stores = function(generalOptions, specificOptions) {
  describe('API tests for: ' + specificOptions.name, function() {
    var url = generalOptions.baseUrl + specificOptions.route;


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



    // Making POST request to update store number
    it('POST request returns status code 200', function(done) {
      generalOptions.request.post({
        url: url,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: specificOptions.postJSON
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(body).not.toBeFalsy();
        expect(body.error.message).toEqual('Store already exists.');
        done();
      });
    });



    // Making GET request to verify, that store number is changed.
    it('Making GET test for ' + specificOptions.name + ' returns code 200, store number should be updated via previous POST request', function(done) {
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

            expect(bodyArray[i].number).
            toEqual(specificOptions.postJSON.stores[0].number);
            foundStores++;
          }
        }
        generalOptions.since('No store found. Make sure you pass with POST existing store number').expect(foundStores).toEqual(1);
        done();
      });
    });


    // Validation Tests - Checks that response includes all required fields are enforced
    it('Validation: POST request returns status code 400 for missing properties', function(done) {
      generalOptions.request.post({
        url: url,
        headers: {
          'content-type': 'application/json'
        },
        json: true
      }, function(error, response, body) {
        expect(response.statusCode).toBe(400);
        expect(body.error.message).toEqual('Post invalid.');
        done();
      });
    });
  })
};

module.exports = stores;
