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
      url = url;
      generalOptions.request.post({
        url: url,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: postJSON
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        //expect(JSON.parse(body)).not.toBeFalsy();
        done();
      });
    });


    // Making GET to verify changes via POST
    it('Making GET test for ' + specificOptions.name + ' to verify POST changes', function(done) {
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body)).toBeTruthy();
        var bodyJS = JSON.parse(body);
        expect(bodyJS.systemDefaultLanguage).toBe(postJSON.systemDefaultLanguage);
        expect(bodyJS.systemCurrentLanguage).toBe(postJSON.systemCurrentLanguage);
        done();
      });
    });
}


post(specificOptions.postJSON1);
post(specificOptions.postJSON2);


  })
};

module.exports = getPost;
