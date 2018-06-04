'use strict';

var pullBody = require('./pullBody.js');
var filterArray = require('./filterArray.js');
var toolSpecs = require('../toolSpecs.js');
var since = require('jasmine2-custom-message');
var changeLanguage = require('./changeLanguage.js');


var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;



var contentValidation = function(postJSON) {
  return new Promise((resolve, reject) => {




    describe('Comparing Admin/Server content JSON files', function() {


    beforeAll(async function() {

      await changeLanguage(mainOptions, certainOptions.blueServer, postJSON)
console.log("++++++++++++++++++++++++++++++++++++++++++");
      //Gettings Json Body from the Admin
      this.adminJsonBody = await pullBody(mainOptions, certainOptions.admin);
      //Gettings Json Body from the Admin Server
      this.serverJsonBody = await pullBody(mainOptions, certainOptions.blueServer.contentJson);
      //Gettings Json Body from the server Settings
      this.serverSettingsJsonBody = await pullBody(mainOptions, certainOptions.blueServer.settingsJson);


      //Gettings Array with Content objects from the Admin JSON Body
      this.adminContentJson = this.adminJsonBody.content;

      //Gettings Array with Content objects from the Server JSON Body
      this.serverContentJson = this.serverJsonBody.content;

      //Taking ADMIN id
      this.adminId = this.adminJsonBody.id;

      //Taking ADMIN categories
      this.adminCategories = this.adminJsonBody.device_categories;


      //Taking Current language on the server
      this.systemCurrentLanguage = this.serverSettingsJsonBody.systemCurrentLanguage;


      //Filtering content from ADMIN for Heetwall_UHD server (can do same for other servers) for specific language (engl hardcoded)
      this.filteredAdminContentArr = await filterArray(this.adminContentJson, this.adminCategories.HEETWALL_SERVER_UHD_PLAYER, language);


      //Taking number of the contnet files (Here it's number of objects in the array = array length)
      this.lengthServerContentJson = this.serverContentJson.length;
      this.lengthFilteredAdminContentArr = this.filteredAdminContentArr.length;
      //  console.log("= = = = = " + language );
      //  console.log(this.serverContentJson);
      // console.log(this.filteredAdminContentArr);


      this.sameAdminContent = [];
      this.sameServerContent = [];



      //Working with two arrays. I take string title+type (type = language), than serch same in another array
      for (var i = 0; i < this.lengthFilteredAdminContentArr; i++) {
        var fileIdAdmin = this.filteredAdminContentArr[i].fileId;


        for (var k = 0; k < this.lengthServerContentJson; k++) {
          var fileIdServer = this.serverContentJson[k].details.fileId;


          // creating objects with same content to compare it in next tests
          //Comparing Title and Language
          if (fileIdAdmin === fileIdServer) {
            this.sameAdminContent.push(this.filteredAdminContentArr[i]);
            this.sameServerContent.push(this.serverContentJson[k]);
          }
        }
      }

    });








var arrayLength;

      it('Number of content files should be same', function() {


        arrayLength = this.sameAdminContent.length;
          console.log("-------------++++++++++++/////////////+++++++++ " + arrayLength);

        since('NUMBER OF THE CONTENT FILES ARE NOT THE SAME FOR ADMIN: ' + this.lengthFilteredAdminContentArr + ' AND SERVER: ' + this.lengthServerContentJson).
        expect(this.lengthFilteredAdminContentArr).toBe(this.lengthServerContentJson);
      });





      //= = = = = = = =



      var count = 0;

      //Comparing arrays with same content
      for (var i = 0; i < this.sameAdminContent.length; i++) {







            it('TITLE Should match', function() {
              //CHECKING TITLE
              since('TITLES ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].title + ' / SERVER: ' + this.serverContentJson[k].title)
                .expect(this.filteredAdminContentArr[i].title).toBe(this.serverContentJson[k].title);
            });


            it('OUTPUT RANGES Should match', function() {
              //CHECKING OUTPUT RANGES
              since('OUTPUT RANGES ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].outputRange + ' / SERVER: ' + this.serverContentJson[k].details.outputRange)
                .expect(this.filteredAdminContentArr[i].outputRange).toBe(this.serverContentJson[k].details.outputRange);
            });


            it('ACTION ID Should match', function() {
              //CHECKING ACTION ID
              since('OUTPUT RANGES ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].actionId + ' / SERVER: ' + this.serverContentJson[k].details.actionId)
                .expect(this.filteredAdminContentArr[i].actionId).toBe(this.serverContentJson[k].details.actionId);
            });


            it('RESOLUTION Should match', function() {
              //CHECKING RESOLUTION
              since('RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].resolution + ' / SERVER: ' + this.serverContentJson[k].resolution)
                .expect(this.filteredAdminContentArr[i].resolution).toBe(this.serverContentJson[k].resolution);
            });


            it('SUPPORTED RESOLUTIONS Should match', function() {
              //CHECKING SUPPORTED RESOLUTIONS
              since('SUPPORTED RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].supportedResolutions + ' / SERVER: ' + this.serverContentJson[k].details.supportedResolutions)
                .expect(this.filteredAdminContentArr[i].supportedResolutions).toBe(this.serverContentJson[k].details.supportedResolutions);
            });


            it('OUTPUT RESOLUTIONS Should match', function() {
              //CHECKING OUTPUT RESOLUTIONS
              since('OUTPUT RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].outputResolution + ' / SERVER: ' + this.serverContentJson[k].details.outputResolution)
                .expect(this.filteredAdminContentArr[i].outputResolution).toBe(this.serverContentJson[k].details.outputResolution);
            });


            it('SUPPORTED MODELS Should match', function() {
              //CHECKING SUPPORTED MODELS
              since('SUPPORTED MODELS ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].supportedModels + ' / SERVER: ' + this.serverContentJson[k].details.supportedModels)
                .expect(this.filteredAdminContentArr[i].supportedModels).toBe(this.serverContentJson[k].details.supportedModels);
            });


            // it('SUPPORTED AUDIO MODELS Should match', function() {
            //Do we need check this?
            // //CHECKING SUPPORTED AUDIO MODELS
            // since('SUPPORTED AUDIO MODELS ARE NOT THE SAME: ADMIN: ' +
            //     this.filteredAdminContentArr[i].supportedAudioModels + ' / SERVER: ' + this.serverContentJson[k].details.supportedAudioModels)
            //   .expect(this.filteredAdminContentArr[i].supportedAudioModels).toBe(this.serverContentJson[k].details.supportedAudioModels);
            // });



            it('UNSUPPORTED MODELS Should match', function() {
              //CHECKING UNSUPPORTED MODELS
              since('UNSUPPORTED MODELS ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].unsupportedModels + ' / SERVER: ' + this.serverContentJson[k].details.unsupportedModels)
                .expect(this.filteredAdminContentArr[i].unsupportedModels).toBe(this.serverContentJson[k].details.unsupportedModels);
            });


            it('CHANNEL Should match', function() {
              //CHECKING CHANNEL
              since('CHANNELS ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].channel + ' / SERVER: ' + this.serverContentJson[k].details.channel)
                .expect(this.filteredAdminContentArr[i].channel).toBe(this.serverContentJson[k].details.channel);
            });


            it('AUDIO LEVEL Should match', function() {
              //CHECKING AUDIO LEVEL
              since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].audioLevel + ' / SERVER: ' + this.serverContentJson[k].details.audioLevel)
                .expect(this.filteredAdminContentArr[i].audioLevel).toBe(this.serverContentJson[k].details.audioLevel);
            });


            it('LANGUAGE Should match', function() {
              //CHECKING LANGUAGE
              since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].type + ' / SERVER: ' + this.serverContentJson[k].details.type)
                .expect(this.filteredAdminContentArr[i].type).toBe(this.serverContentJson[k].details.type);
            });


            it('FILENAMES Should match', function() {
              //Changing to format ID + Filename to compare with Filenames from Server
              var filenameAdmin = this.adminId + "/" + this.filteredAdminContentArr[i].filename;
              var filenameServer = this.serverContentJson[k].filename;

              //CHECKING FILENAMES
              since('FILE NAMES ARE NOT THE SAME: ADMIN: ' + filenameAdmin + ' / SERVER: ' + filenameServer)
                .expect(filenameAdmin).toBe(filenameServer);
            });


            it('DETALABLE Should match', function() {
              //CHECKING DETALABLE
              since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].deletable + ' / SERVER: ' + this.serverContentJson[k].details.deletable)
                .expect(this.filteredAdminContentArr[i].deletable).toBe(this.serverContentJson[k].details.deletable);
            });



            // = = = = = images = = = = = =



            var imagesAdmin = this.filteredAdminContentArr[i].images;
            var imagesServer = this.serverContentJson[k].images;


            it('NUMBER OF IMAGES Should match', function() {
              //CHECKING NUMBER OF IMAGES
              since('NUMBER OF IMAGES IS NOT THE SAME: ADMIN: ' +
                  this.filteredAdminContentArr[i].images.length +
                  ' / SERVER: ' + this.serverContentJson[k].images.length + " FILE: " + " ID/ " +
                  this.filteredAdminContentArr[i].fileId + " / TITLE: " + this.filteredAdminContentArr[i].title)
                .expect(this.filteredAdminContentArr[i].images.length).toBe(this.serverContentJson[k].images.length);
            });

}


          // } else {
          //   //console.log(filenameAdmin + '- - - -' + filenameServer);
          //   //console.log(count + ") - " + this.adminContentJson[i].provider.name);
          //   //count = count + 1;
          //   console.log("= = = = = = = = = = = ");
          // }




      resolve('Done!');





    }); //describe


  });
}
module.exports = contentValidation;
