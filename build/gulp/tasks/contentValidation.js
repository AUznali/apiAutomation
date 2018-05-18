'use strict';
var since = require('jasmine2-custom-message');

var pullBody = require('../../../bin/test/jasmine/api/contentValidation/tools/pullBody.js');
var filterArray = require('../../../bin/test/jasmine/api/contentValidation/tools/filterArray.js');
var toolSpecs = require('../../../bin/test/jasmine/api/contentValidation/toolSpecs.js');
var changeLanguage = require('../../../bin/test/jasmine/api/contentValidation/tools/changeLanguage.js');
var compareSameContent = require('../../../bin/test/jasmine/api/contentValidation/tools/compareSameContent.js');
var contentArrays = require('../../../bin/test/jasmine/api/contentValidation/tools/contentArrays.js');

var fs = require('fs');
var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;

var serverContentJson;
var filteredAdminContentArr;
var lengthServerContentJson;
var lengthFilteredAdminContentArr;
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


var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

var enPost = {
  "systemCurrentLanguage": "en-us"
};
var frPost = {
  "systemCurrentLanguage": "fr-ca"
};
var esPost = {
  "systemCurrentLanguage": "es-mx"
};
var ptPost = {
  "systemCurrentLanguage": "pt-br"
};



gulp.task('verCont', () => {
  console.log('Checking verCont...');
  //  validatingContent();
  changeLanguage(mainOptions, certainOptions.blueServer, enPost);
  //  changeLanguage(mainOptions, certainOptions.blueServer, frPost);
  // changeLanguage(mainOptions, certainOptions.blueServer, ptPost);
  // changeLanguage(mainOptions, certainOptions.blueServer, esPost);
  sameContentParsing(enPost);

 var fileContent = fs.readFileSync("./Temp/stringSameServerContent.js", "utf8");
 console.log(fileContent);

 //compareSameContent(sameAdminContent, sameServerContent, adminId);


});




/// = = = = = = = = = =


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

    } catch (err) {
      console.log('ERROR: ' + err);
    }

    // try {
    //       await sameContentParsing(postJSON);
    //     } catch (err) {
    //       console.log('ERROR: ' + err);
    //     }


  }
};



async function sameContentParsing(postJSON) {




  // try {
  //   await changeLanguage(mainOptions, certainOptions.blueServer, postJSON);
  //
  // } catch (err) {
  //   console.log('ERROR: ' + err);
  // }


  try {
    //Gettings Json Body from the Admin
    adminJsonBody = await pullBody(mainOptions, certainOptions.admin);
  } catch (err) {
    console.log('ERROR: ' + err);
  }



  try {
    //Gettings Json Body from the Admin Server
    serverJsonBody = await pullBody(mainOptions, certainOptions.blueServer.contentJson);
  } catch (err) {
    console.log('ERROR: ' + err);
  }


  try {
    //Gettings Json Body from the server SETTINGS
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

  //Taking ADMIN categories
  adminCategories = adminJsonBody.device_categories;


  //Taking Current language on the server
  systemCurrentLanguage = serverSettingsJsonBody.systemCurrentLanguage;


  language = postJSON.systemCurrentLanguage;

  try {
    //Filtering content from ADMIN for Heetwall_UHD server (can do same for other servers) for specific language (engl hardcoded)
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



};


// it('Number of content files should be same', function() {
//   for (var i = 0; i < sameAdminContent.length; i++) {
//     console.log("DEBUG-1 - - - - DEBUG-1 - - - - DEBUG-1 - - - - DEBUG-1 - - - - DEBUG-1");
//     console.log("------------------------------------- " + sameAdminContent[i].title);
//   }
// });
