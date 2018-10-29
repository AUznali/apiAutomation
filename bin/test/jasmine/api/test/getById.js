'use strict';
// var config = require('../config');

var unitID = 0;

var reporters = require('jasmine-reporters');
var junitReporter = new reporters.JUnitXmlReporter({
    savePath: '/Users/iposter/Downloads/Training/GIT_HUB/apiAutomation/bin/test/jasmine/api/test/testResults',
    consolidateAll: false
});
jasmine.getEnv().addReporter(junitReporter)


var getById = function(generalOptions, specificOptions) {

  describe('API tests for: ' + specificOptions.name, function() {
    var url = generalOptions.baseUrl + specificOptions.route;



    // GET all items
    it('GET requet for: ' + specificOptions.name + '.For GET All Expect: status code 200 & body not to Be Falsy', function(done) {
console.log(url);
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body)).not.toBeFalsy();
        var bodyJS = JSON.parse(body);


         if (specificOptions.route == '/categories/') { // This is for /categories/
          //This is first categories ID
          unitID = bodyJS.categories[0].id;
          getByFoundID();
        } else if (specificOptions.route == '/stores/') { // This is for /stores/
          //This is first stores ID
          unitID = bodyJS.stores[0].id;
          getByFoundID();
        } else {
          throw 'NOT A BUG: NO GET by ID for API ' + specificOptions.name;
        }
        done();

      });
    });

    //GET by ID
    var getByFoundID = function() {
      it('GET by ID requet for ' + specificOptions.name + '. Expect: status code 200 & body not to Be Falsy', function(done) {
        generalOptions.request.get({
          //Making GET request by ID
          url: url + unitID
        }, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          expect(JSON.parse(body)).not.toBeFalsy();
          done();
        });
      });
    }
  })
};



module.exports = getById;
