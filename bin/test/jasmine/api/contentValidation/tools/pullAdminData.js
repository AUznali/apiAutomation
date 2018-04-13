'use strict';



//Pulling NOT Content data from Admin Api JSON to object. Later will use this data in jsons comparison.
var pullAdminData = function(mainOptions, certainOptions) {
  return new Promise((resolve, reject) => {

    //CREATING OBJECT
    var adminDataObject = {};



    mainOptions.request.get({
      url: certainOptions.urlToContentJson
    }, function(error, response, body) {

      //PARSING BODY
      var bodyJS = JSON.parse(body);

      //GETTING ID and push it to object

      adminDataObject.id = bodyJS.id;


      resolve(adminDataObject);
    });
  });
};

module.exports = pullAdminData;
