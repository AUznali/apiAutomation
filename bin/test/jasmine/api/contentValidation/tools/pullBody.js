'use strict';



//Getting body from get API response
var pullBody = function(mainOptions, certainOptions) {
  return new Promise((resolve, reject) => {

    mainOptions.request.get({
      url: certainOptions.jsonUrl 
    }, function(error, response, body) {


      //PARSING BODY
      var bodyJS = JSON.parse(body);
      expect(bodyJS).not.toBeFalsy();
      resolve(bodyJS);
    });
  });
};


module.exports = pullBody;
