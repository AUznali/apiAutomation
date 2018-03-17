'use strict';
// var config = require('../config');
var request = require('request');
var unitID = 0;


//var postJSON = config.endpoints.postJSON;


var getPost = function(generalOptions, specificOptions) {
var url = generalOptions.baseUrl + specificOptions.route;

  describe('API tests for: ' + specificOptions.name, function() {




    // GET all stores
    it('= = = GET test for ' + specificOptions.name + ' should give status code 200', function(done) {
      request.get({
        url: url
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);

        //expect(JSON.parse(body).city).not.toBeFalsy();
        var bodyJS = JSON.parse(body);


        if (specificOptions.route == '/stores/') {
          unitID = bodyJS.stores[0].id;
        } else

        if (specificOptions.route == '/devices/') {
          unitID = bodyJS.devices[0].id;
        }


        this.unitID = unitID;
        done();
      });
    });



    // POST to update info
    it('= = = POST request returns status code 200, JSON of new item', function(done) {
    //  url = url;
      request.post({
        url: url,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: specificOptions.postJSON
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        //expect(JSON.parse(body).city).not.toBeFalsy();
        done();
      });
    });

  })
};


// Verify that POST update info
it('GET item request returns status code 200, JSON of NEW item', function(done) {
  request.get({
    url: url + '/' + testPost._id
  }, function(error, response, body) {
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(body)._id).toEqual(testPost._id);
    done();
  });
});


module.exports = getPost;
