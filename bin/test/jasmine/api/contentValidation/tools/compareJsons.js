'use strict';

var pullToArray = require('./pullToArray.js');
var toolSpecs = require('../toolSpecs.js');
var pullAdminData = require('./pullAdminData.js');
var since = require('jasmine2-custom-message');

var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;



beforeAll(async function() {

  //Gettings Arrays with Content objects from the Server and Admin JSONs
  this.adminContentJson = await pullToArray(mainOptions, certainOptions.admin);
  this.serverContentJson = await pullToArray(mainOptions, certainOptions.blueServer);

  //Taking obk=ject with not content data for ADMIN
  this.adminObject = await pullAdminData(mainOptions, certainOptions.admin);

  //Taking number of the contnet files (Here it's number of objects in the array = array length)
  this.lengthAdminContentJson = this.adminContentJson.length;
  this.lengthServerContentJson = this.serverContentJson.length;
})

describe('Comparing Admin/Server content JSON files', function() {


  it('Number of content files should be same', function() {
    since('NUMBER OF THE CONTENT FILES ARE NOT THE SAME FOR ADMIN AND SERVER: ' +
      this.lengthAdminContentJson + '/' + this.lengthServerContentJson).expect(this.lengthAdminContentJson).toBe(this.lengthServerContentJson);
  });



  it('File names should match', function() {
      var count = 0;
    //Working with two arrays. I take string title+type (type = language), than serch same in another array
    for (var i = 0; i < this.lengthAdminContentJson; i++) {
      var titlePlusLangAdmin = this.adminContentJson[i].title + this.adminContentJson[i].type;

      for (var k = 0; k < this.lengthServerContentJson; k++) {
        var titlePlusLangServer = this.serverContentJson[k].title + this.serverContentJson[k].details.type;

//Comparing Title and Language

        if (titlePlusLangAdmin === titlePlusLangServer) {

          // Here I do compare between same contnet: ADMIN /SERVER;fj

          //Changing to format ID + Filename to compare with Filenames from Server
          var filenameAdmin = this.adminObject.id + "/" + this.adminContentJson[i].filename;

          var filenameServer = this.serverContentJson[k].filename;

          //Comparing Filenames
          since('FILE NAMES ARE NOT THE SAME: ADMIN: ' +
            filenameAdmin + ' / SERVER: ' + filenameServer).expect(filenameAdmin).toBe(filenameServer);
        }
      }
    }
  });



});
