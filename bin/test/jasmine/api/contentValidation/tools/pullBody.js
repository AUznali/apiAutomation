'use strict';
var expect = require('expect.js');


//Getting body from get API response
var pullBody = function(mainOptions, certainOptions) {
  return new Promise((resolve, reject) => {

    mainOptions.request.get({
      url: certainOptions.jsonUrl
    }, function(error, response, body) {
      expect(response.statusCode).to.be(200);


      //PARSING BODY
      var bodyJS = JSON.parse(body);
      resolve(bodyJS);
    });
  });
};


module.exports = pullBody;
