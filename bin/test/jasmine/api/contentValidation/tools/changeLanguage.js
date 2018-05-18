'use strict';


var sendPost = function(mainOptions, certainOptions, postJSON) {
  return new Promise(resolve => {

    var url = certainOptions.serverIp + mainOptions.endpoints.settings.path;

    //Making POST to change system current language
    mainOptions.request.post({
      url: url,
      headers: {
        'content-type': 'application/json'
      },
      json: true,
      body: postJSON
    }, function(error, response, newbody) {
      //  expect(response.statusCode).toBe(200);
      //return body;
       verifyLang();
    });

function verifyLang(){
  //Making GET to check that system current language was changed correctly
  mainOptions.request.get({
    url: url
  }, function(error, response, newBody) {
    var bodyJS = JSON.parse(newBody);
    //expect(postJSON.systemCurrentLanguage).toBe(bodyJS);
    console.log("++++++++++ POST +++++++++++++++" + postJSON.systemCurrentLanguage);
    console.log("^^^^^^^^^^^^ SERVER ^^^^^^^^^^^^" + bodyJS.systemCurrentLanguage);
  });
}




    resolve(console.log("DONE ++++++++++++"));

  });
};



module.exports = sendPost;
