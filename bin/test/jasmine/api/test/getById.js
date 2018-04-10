'use strict';
// var config = require('../config');

var unitID = 0;

var getById = function(generalOptions, specificOptions) {

  describe('API tests for: ' + specificOptions.name, function() {
    var url = generalOptions.baseUrl + specificOptions.route;



    // GET all items
   it('= = = GET ALL test for ' + specificOptions.name + ' return status code 200',  function(done) {
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body)).not.toBeFalsy();

        if (specificOptions.route == '/devices/') {
          var bodyJS = JSON.parse(body);

          //This is first device ID
          unitID = bodyJS.devices[0].id;
        } else {
         unitID = '';
        }
        done();

      });
    });


    //GET by ID
    it('= = = GET by ID test for ' + specificOptions.name + ' return status code 200', function(done) {
      generalOptions.request.get({
        //Making GET request by ID
        url: url + unitID
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body)).not.toBeFalsy();
        done();
      });
    });
  })
};



module.exports = getById;
