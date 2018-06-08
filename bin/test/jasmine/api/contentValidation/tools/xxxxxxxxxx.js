'use strict';
var expect = require('expect.js');
var pullBody = require('./pullBody.js');
var filterArray = require('./filterArray.js');
var toolSpecs = require('../toolSpecs.js');
var since = require('jasmine2-custom-message');
var changeLanguage = require('./changeLanguage.js');


var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;



var contentValidation = function(postJSON) {


  changeLanguage(mainOptions, certainOptions.blueServer, postJSON);
  console.log("++++++++++++++++++++++++++++++++++++++++++");
  //Gettings Json Body from the Admin
  var adminJsonBody = pullBody(mainOptions, certainOptions.admin);
  //Gettings Json Body from the Admin Server
  var serverJsonBody = pullBody(mainOptions, certainOptions.blueServer.contentJson);
  //Gettings Json Body from the server Settings
  var serverSettingsJsonBody = pullBody(mainOptions, certainOptions.blueServer.settingsJson);



  //Gettings Array with Content objects from the Admin JSON Body
  var adminContentJson = adminJsonBody.content;

  //Gettings Array with Content objects from the Server JSON Body
  var serverContentJson = serverJsonBody.content;

  //Taking ADMIN id
  var adminId = adminJsonBody.id;

  //Taking ADMIN categories
  var adminCategories = adminJsonBody.device_categories;


  //Taking Current language on the server
  var systemCurrentLanguage = serverSettingsJsonBody.systemCurrentLanguage;


  //Filtering content from ADMIN for Heetwall_UHD server (can do same for other servers) for specific language (engl hardcoded)
  var filteredAdminContentArr = filterArray(adminContentJson, adminCategories.HEETWALL_SERVER_UHD_PLAYER, language);


  //Taking number of the contnet files (Here it's number of objects in the array = array length)
  var lengthServerContentJson = serverContentJson.length;
  var lengthFilteredAdminContentArr = filteredAdminContentArr.length;
  //  console.log("= = = = = " + language );
  //  console.log(serverContentJson);
  // console.log(filteredAdminContentArr);


  var sameAdminContent = [];
  var sameServerContent = [];



  //Working with two arrays. I take string title+type (type = language), than serch same in another array
  for (var i = 0; i < lengthFilteredAdminContentArr; i++) {
    var fileIdAdmin = filteredAdminContentArr[i].fileId;


    for (var k = 0; k < lengthServerContentJson; k++) {
      var fileIdServer = serverContentJson[k].details.fileId;


      // creating objects with same content to compare it in next tests
      //Comparing Title and Language
      if (fileIdAdmin === fileIdServer) {
        sameAdminContent.push(filteredAdminContentArr[i]);
        sameServerContent.push(serverContentJson[k]);
      }
    }
  }






  var arrayLength;




  arrayLength = sameAdminContent.length;
  console.log("-------------++++++++++++/////////////+++++++++ " + arrayLength);
  expect(lengthFilteredAdminContentArr).toBe(lengthServerContentJson);





  //= = = = = = = =



  var count = 0;

  //Comparing arrays with same content
  for (var i = 0; i < sameAdminContent.length; i++) {



    //CHECKING TITLE
    expect(filteredAdminContentArr[i].title).toBe(serverContentJson[k].title);




    //CHECKING OUTPUT RANGES
    expect(filteredAdminContentArr[i].outputRange).toBe(serverContentJson[k].details.outputRange);




    //CHECKING ACTION ID
    expect(filteredAdminContentArr[i].actionId).toBe(serverContentJson[k].details.actionId);




    //CHECKING RESOLUTION
    expect(filteredAdminContentArr[i].resolution).toBe(serverContentJson[k].resolution);




    //CHECKING SUPPORTED RESOLUTIONS
    expect(filteredAdminContentArr[i].supportedResolutions).toBe(serverContentJson[k].details.supportedResolutions);




    //CHECKING OUTPUT RESOLUTIONS
    expect(filteredAdminContentArr[i].outputResolution).toBe(serverContentJson[k].details.outputResolution);




    //CHECKING SUPPORTED MODELS
    expect(filteredAdminContentArr[i].supportedModels).toBe(serverContentJson[k].details.supportedModels);



    // it('SUPPORTED AUDIO MODELS Should match', function() {
    //Do we need check this?
    // //CHECKING SUPPORTED AUDIO MODELS
    // since('SUPPORTED AUDIO MODELS ARE NOT THE SAME: ADMIN: ' +
    //     filteredAdminContentArr[i].supportedAudioModels + ' / SERVER: ' + serverContentJson[k].details.supportedAudioModels)
    //   .expect(filteredAdminContentArr[i].supportedAudioModels).toBe(serverContentJson[k].details.supportedAudioModels);
    // });



    expect(filteredAdminContentArr[i].unsupportedModels).toBe(serverContentJson[k].details.unsupportedModels);



    expect(filteredAdminContentArr[i].channel).toBe(serverContentJson[k].details.channel);



    expect(filteredAdminContentArr[i].audioLevel).toBe(serverContentJson[k].details.audioLevel);



    expect(filteredAdminContentArr[i].type).toBe(serverContentJson[k].details.type);




    //Changing to format ID + Filename to compare with Filenames from Server
    var filenameAdmin = adminId + "/" + filteredAdminContentArr[i].filename;
    var filenameServer = serverContentJson[k].filename;

    expect(filenameAdmin).toBe(filenameServer);



    expect(filteredAdminContentArr[i].deletable).toBe(serverContentJson[k].details.deletable);




    // = = = = = images = = = = = =



    var imagesAdmin = filteredAdminContentArr[i].images;
    var imagesServer = serverContentJson[k].images;



    //CHECKING NUMBER OF IMAGES
    expect(filteredAdminContentArr[i].images.length).toBe(serverContentJson[k].images.length);


  }


  // } else {
  //   //console.log(filenameAdmin + '- - - -' + filenameServer);
  //   //console.log(count + ") - " + adminContentJson[i].provider.name);
  //   //count = count + 1;
  //   console.log("= = = = = = = = = = = ");
  // }



}
module.exports = contentValidation;
