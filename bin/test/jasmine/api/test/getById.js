'use strict';
// var config = require('../config');

var unitID = 0;

var getById = function(generalOptions, specificOptions) {

  describe('API tests for: ' + specificOptions.name, function() {
    var url = generalOptions.baseUrl + specificOptions.route;



    // GET all items
    it('= = = GET ALL test for ' + specificOptions.name + ' return status code 200', function(done) {

      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body)).not.toBeFalsy();
        var bodyJS = JSON.parse(body);


        if (specificOptions.route == '/devices/') { // This is for /devices/

          //This is first device ID
          unitID = bodyJS.devices[0].id;
        } else if (specificOptions.route == '/categories/') { // This is for /categories/
          //This is first categories ID
          unitID = bodyJS.categories[0].id;
        } else if (specificOptions.route == '/stores/') { // This is for /stores/
          //This is first stores ID
          unitID = bodyJS.stores[0].id;
        } else {

          throw 'NO GET by ID for API ' + specificOptions.name;
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
