'use strict';

var pullBody = require('./pullBody.js');
var filterArray = require('./filterArray.js');
var toolSpecs = require('../toolSpecs.js');
var since = require('jasmine2-custom-message');
var changeLanguage = require('./changeLanguage.js');


var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;


var contentValidation = function(language, postJSON) {
  return new Promise((resolve, reject) => {



    describe('Comparing Admin/Server content JSON files', function() {


      // ===== DO BEFORE TESTS =====

      beforeAll(async function() {

        await changeLanguage(mainOptions, certainOptions.blueServer, postJSON)

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

      }); //beforeAll




      // ===== TESTS =====

      var arrayLength;

      it('Making content validation ADMIN/SERVER ***- ' + language, function() {

        arrayLength = this.sameAdminContent.length;

        // CHECKING NUMBER OF SAME CONTENT FILES - ADMIN(for selected category) and SERVER
        since('NUMBER OF THE SAME CONTENT FILES ARE NOT THE SAME FOR ADMIN and SERVER: ' + this.lengthFilteredAdminContentArr + ' AND SERVER: ' + this.sameServerContent.length + " LANGUAGE: " + language).
        expect(this.lengthFilteredAdminContentArr).toBe(this.sameServerContent.length);



        //Comparing 2 arrays with same content (fileId)
        for (var j = 0; j < this.sameAdminContent.length; j++) {


          //CHECKING TITLE
          since('TITLES ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].title + ' / SERVER: ' + this.sameServerContent[j].title + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].title).toBe(this.sameServerContent[j].title);



          //CHECKING OUTPUT RANGES
          since('OUTPUT RANGES ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].outputRange + ' / SERVER: ' + this.sameServerContent[j].details.outputRange + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].outputRange).toBe(this.sameServerContent[j].details.outputRange);



          //CHECKING ACTION ID
          since('OUTPUT RANGES ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].actionId + ' / SERVER: ' + this.sameServerContent[j].details.actionId + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].actionId).toBe(this.sameServerContent[j].details.actionId);



          //CHECKING RESOLUTION
          since('RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].resolution + ' / SERVER: ' + this.sameServerContent[j].resolution + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].resolution).toBe(this.sameServerContent[j].resolution);



          //CHECKING SUPPORTED RESOLUTIONS
          since('SUPPORTED RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].supportedResolutions + ' / SERVER: ' + this.sameServerContent[j].details.supportedResolutions + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].supportedResolutions).toBe(this.sameServerContent[j].details.supportedResolutions);



          //CHECKING OUTPUT RESOLUTIONS
          since('OUTPUT RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].outputResolution + ' / SERVER: ' + this.sameServerContent[j].details.outputResolution + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].outputResolution).toBe(this.sameServerContent[j].details.outputResolution);



          //CHECKING SUPPORTED MODELS
          since('SUPPORTED MODELS ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].supportedModels + ' / SERVER: ' + this.sameServerContent[j].details.supportedModels + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].supportedModels).toBe(this.sameServerContent[j].details.supportedModels);



          //Do we need check this?
          //CHECKING SUPPORTED AUDIO MODELS
          since('SUPPORTED AUDIO MODELS ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].supportedAudioModels + ' / SERVER: ' + this.sameServerContent[j].details.supportedAudioModels + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].supportedAudioModels).toBe(this.sameServerContent[j].details.supportedAudioModels);



          //CHECKING UNSUPPORTED MODELS
          since('UNSUPPORTED MODELS ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].unsupportedModels + ' / SERVER: ' + this.sameServerContent[j].details.unsupportedModels + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].unsupportedModels).toBe(this.sameServerContent[j].details.unsupportedModels);



          //CHECKING CHANNEL
          since('CHANNELS ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].channel + ' / SERVER: ' + this.sameServerContent[j].details.channel + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].channel).toBe(this.sameServerContent[j].details.channel);



          //CHECKING AUDIO LEVEL
          since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].audioLevel + ' / SERVER: ' + this.sameServerContent[j].details.audioLevel + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].audioLevel).toBe(this.sameServerContent[j].details.audioLevel);



          //CHECKING LANGUAGE
          since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].type + ' / SERVER: ' + this.sameServerContent[j].details.type + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].type).toBe(this.sameServerContent[j].details.type);



          //Changing to format ID + Filename to compare with Filenames from Server
          var filenameAdmin = this.adminId + "/" + this.sameAdminContent[j].filename;
          var filenameServer = this.sameServerContent[j].filename;

          //CHECKING FILENAMES
          since('FILE NAMES ARE NOT THE SAME: ADMIN: ' + filenameAdmin + ' / SERVER: ' + filenameServer + " LANGUAGE: " + language)
            .expect(filenameAdmin).toBe(filenameServer);



          //CHECKING DETALABLE
          since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
              this.sameAdminContent[j].deletable + ' / SERVER: ' + this.sameServerContent[j].details.deletable + " LANGUAGE: " + language)
            .expect(this.sameAdminContent[j].deletable).toBe(this.sameServerContent[j].details.deletable);



          // = = = = = images = = = = = =

          var imagesAdmin = this.sameAdminContent[j].images;
          var imagesServer = this.sameServerContent[j].images;


          //CHECKING NUMBER OF IMAGES
          // since('NUMBER OF IMAGES IS NOT THE SAME: ADMIN: ' +
          //     this.sameAdminContent[j].images.length +
          //     ' / SERVER: ' + this.sameServerContent[j].images.length + " FILE: " + " ID/ " +
          //     this.sameAdminContent[j].fileId + " / TITLE: " + this.sameAdminContent[j].title)
          //   .expect(this.sameAdminContent[j].images.length).toBe(this.sameServerContent[j].images.length);
          resolve("Done!");

        }

      });

    }); //describe

  });
}
module.exports = contentValidation;
