'use strict';


var sendPost = function(mainOptions, certainOptions, postJSON) {
  return new Promise((resolve, reject) => {
    var url = certainOptions.serverIp + mainOptions.endpoints.settings.path;


    //Making POST to change system current language
    mainOptions.request.post({
      url: url,
      headers: {
        'content-type': 'application/json'
      },
      json: true,
      body: postJSON
    }, function(error, response, body) {
      expect(response.statusCode).toBe(200);
      resolve(body);
    });
  });
};



module.exports = sendPost;
