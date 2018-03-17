'use strict';

var chai = require('chai');
chai.use(require('chai-json-schema'));
var expect = chai.expect;
var unitID = 0;


var schemaValidation = function(generalOptions, specificOptions) {
  describe('Schema validation test for: ' + specificOptions.name, function() {
    var url = generalOptions.baseUrl + specificOptions.route;

    it('Getting id of ' + specificOptions.name, function(done) {
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
        } else

        {
          unitID = '';
        }
        this.unitID = unitID;
        done();
      });
    });



    it('Body should match with schema for ' + specificOptions.name, function(done) {
      url = url + unitID;
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {

        //Schema validation
        var bodyJS = JSON.parse(body);

        expect(bodyJS).to.be.jsonSchema(specificOptions.schema);
        done();
      });
    });

  });
};

module.exports = schemaValidation;
