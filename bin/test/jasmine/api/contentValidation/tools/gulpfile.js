'use strict';
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

var pullBody = require('./pullBody.js');
var filterArray = require('./filterArray.js');
var toolSpecs = require('../toolSpecs.js');
var since = require('jasmine2-custom-message');
var changeLanguage = require('./changeLanguage.js');
var compareSameContent = require('./compareSameContent.js');


var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;

var serverContentJson;
var filteredAdminContentArr;
var lengthServerContentJson;
var lengthFilteredAdminContentArr;
var adminId;









  var contentValidation = function(language, postJSON) {
    return new Promise((resolve, reject) => {

      console.log(postJSON);



      (async function() {


        await changeLanguage(mainOptions, certainOptions.blueServer, postJSON);

        //Gettings Json Body from the Admin
        adminJsonBody = await pullBody(mainOptions, certainOptions.admin);
        //Gettings Json Body from the Admin Server


        serverJsonBody = await pullBody(mainOptions, certainOptions.blueServer.contentJson);
        //Gettings Json Body from the server Settings
        serverSettingsJsonBody = await pullBody(mainOptions, certainOptions.blueServer.settingsJson);


        //Gettings Array with Content objects from the Admin JSON Body
        adminContentJson = adminJsonBody.content;

        //Gettings Array with Content objects from the Server JSON Body
        serverContentJson = serverJsonBody.content;

        //Taking ADMIN id
        adminId = adminJsonBody.id;

        //Taking ADMIN categories
        adminCategories = adminJsonBody.device_categories;


        //Taking Current language on the server
        systemCurrentLanguage = serverSettingsJsonBody.systemCurrentLanguage;


        //Filtering content from ADMIN for Heetwall_UHD server (can do same for other servers) for specific language (engl hardcoded)
        filteredAdminContentArr = await filterArray(adminContentJson, adminCategories.HEETWALL_SERVER_UHD_PLAYER, language);


        //Taking number of the contnet files (Here it's number of objects in the array == array length)
        lengthServerContentJson = serverContentJson.length;
        lengthFilteredAdminContentArr = filteredAdminContentArr.length;


        //console.log("= = = = = " + language );
        //  console.log(serverContentJson);
        // console.log(filteredAdminContentArr);


  console.log("====================================");

        //Working with two arrays. I take string title+type (type = language), than serch same in another array
        for (var i = 0; i < lengthFilteredAdminContentArr; i++) {
          var fileIdAdmin = filteredAdminContentArr[i].fileId;


          for (var k = 0; k < lengthServerContentJson; k++) {
            var fileIdServer = serverContentJson[k].details.fileId;


            //Comparing Title and Language
            if (fileIdAdmin === fileIdServer) {
              compareSameContent(filteredAdminContentArr, serverContentJson, adminId);
            }
          }
        }
      })();


      resolve('Done!');
    });
  };






gulp.task('one', async ()  => {



    //Selecting languages one by one to change one by one
    for (var i = 0; i < 4; i++) {

      var language = mainOptions.languages[i];
      var postJSON = {};
      var key = 'systemCurrentLanguage';
      postJSON[key] = language;

      await contentValidation(language, postJSON).pipe(jasmine());



      // gulp.src('testsRunn.js')
      //     .pipe(jasmine())
    }
});



gulp.task('default', ['one', 'two']);
