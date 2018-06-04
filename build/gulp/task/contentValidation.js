'use strict';

const gulp = require('gulp');
const jasmine = require('gulp-jasmine');


var since = require('jasmine2-custom-message');

var pullBody = require('../../../bin/test/jasmine/api/contentValidation/tools/pullBody.js');
var filterArray = require('../../../bin/test/jasmine/api/contentValidation/tools/filterArray.js');
var toolSpecs = require('../../../bin/test/jasmine/api/contentValidation/toolSpecs.js');
var changeLanguage = require('../../../bin/test/jasmine/api/contentValidation/tools/changeLanguage.js');
//var compareSameContent = require('../../../bin/test/jasmine/api/contentValidation/tools/compareSameContent.js');
var contentArrays = require('../../../bin/test/jasmine/api/contentValidation/tools/contentArrays.js');
var checkNumberOfFiles = require('../../../bin/test/jasmine/api/contentValidation/tools/checkNumberOfFiles.js');







var fs = require('fs');
var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;

var serverContentJson;
var filteredAdminContentArr;
var adminId;
var language;
var adminJsonBody;
var serverJsonBody;
var serverSettingsJsonBody;
var adminContentJson;
var adminCategories;
var systemCurrentLanguage;
var sameAdminContent;
var sameServerContent;
//IMAGES
var imagesAdmin;
var imagesServer;









gulp.task('main', function() {
  validatingContent();
});



async function validatingContent() {

  //Selecting languages one by one to change one by one
  for (var i = 0; i < 4; i++) {
    language = mainOptions.languages[i];
    var postJSON = {};
    var key = 'systemCurrentLanguage';
    postJSON[key] = language;
    //console.log(postJSON);


    try {
      await changeLanguage(mainOptions, certainOptions.blueServer, postJSON);
      //Changing systemCurrentLanguage
    } catch (err) {
      console.log('ERROR: ' + err);
    }



    try {
      //Gettings Json Body from the Admin Content (content api)
      adminJsonBody = await pullBody(mainOptions, certainOptions.admin);
    } catch (err) {
      console.log('ERROR: ' + err);
    }



    try {
      //Gettings Json Body from the Server Content (content api)
      serverJsonBody = await pullBody(mainOptions, certainOptions.blueServer.contentJson);
    } catch (err) {
      console.log('ERROR: ' + err);
    }



    try {
      //Gettings Json Body from the server SETTINGS (settings api)
      serverSettingsJsonBody = await pullBody(mainOptions, certainOptions.blueServer.settingsJson);

    } catch (err) {
      console.log('ERROR: ' + err);
    }


    //Gettings Array with Content objects from the Admin JSON Body
    adminContentJson = adminJsonBody.content;

    //Gettings Array with Content objects from the Server JSON Body
    serverContentJson = serverJsonBody.content;

    //Taking ADMIN id
    adminId = adminJsonBody.id;


    console.log("-----------------------------------------" + adminId);

    //Taking ADMIN categories
    adminCategories = adminJsonBody.device_categories;


    //Taking Current language on the server
    //  systemCurrentLanguage = serverSettingsJsonBody.systemCurrentLanguage;



    language = postJSON.systemCurrentLanguage;



    try {
      //Filtering content from ADMIN for Heetwall_UHD server (can do same for other servers) for specific language
      filteredAdminContentArr = await filterArray(adminContentJson, adminCategories.HEETWALL_SERVER_UHD_PLAYER, language);
    } catch (err) {
      console.log('ERROR: ' + err);
    }



    try {
      var content = await contentArrays(serverContentJson, filteredAdminContentArr);
      sameAdminContent = content[0];
      sameServerContent = content[1];
    } catch (err) {
      console.log('ERROR: ' + err);
    }


    //IMAGES
    var imagesAdmin = sameAdminContent.images;
    var imagesServer = sameServerContent.images;



    var stringSameAdminContent = JSON.stringify(sameAdminContent);
    var stringSameServerContent = JSON.stringify(sameServerContent);



    //Saving sameAdminContent & sameServerContent to the files. Next we'll compare this content.
    fs.writeFile("./Temp/stringSameAdminContent.js", stringSameAdminContent, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Thw file was saved (stringSameAdminContent)!");
    });

    fs.writeFile("./Temp/stringSameServerContent.js", stringSameServerContent, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved (stringSameServerContent)!");
    });
      //checkNumberOfFiles();
      // compareSameContent();

  }
};


gulp.task('size', function() {
  checkNumberOfFiles();
});



gulp.task('compare', () =>
    gulp.src('./contentValidation/tools/compareSameContent.js')
        .pipe(jasmine())
);





// it('Number of content files should be same', function() {
//   for (var i = 0; i < sameAdminContent.length; i++) {
//     console.log("DEBUG-1 - - - - DEBUG-1 - - - - DEBUG-1 - - - - DEBUG-1 - - - - DEBUG-1");
//     console.log("------------------------------------- " + sameAdminContent[i].title);
//   }
// });
