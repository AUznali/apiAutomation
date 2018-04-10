'use strict';

var pullToArray = require('./pullToArray.js');
var toolSpecs = require('../toolSpecs.js');
var assert = require('assert');



var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;


async function comparingJsonsData() {

  //Gettings Arrays with Content objects from the Server and Admin JSONs
  var adminContentJson = await pullToArray(mainOptions, certainOptions.admin);
  var serverContentJson = await pullToArray(mainOptions, certainOptions.blueServer);

  //Taking number of the contnet files (Here it's number of objects in the array = array length)
  var lengthAdminContentJson = adminContentJson.length;
  var lengthServerContentJson = serverContentJson.length;


  //  = = = = = TEST 1 = = = = = Comparing number of the contnet files on the SERVER and on the ADMIN
  // assert.equal(lengthAdminContentJson, lengthServerContentJson, "NUMBER OF THE CONTENT FILES ARE NOT THE SAME: ADMIN JSON: " +
  //   lengthAdminContentJson + " / SERVER JSON: " + lengthServerContentJson);
  // = = = = = = = = = = = = =  = = = = = = = = = = = = =  = = = = = = = = = = = = =  = = = = = = = = = = = = =  = = = = = = = = = = = = =  = = = = = = = = = = = =



//  = = = = = TEST 2 = = = = = Working with two arrays. I take string title+type (type = language), than serch same in another array.
// When find, do check for all other rows.
  for (var i = 0; i < lengthAdminContentJson; i++) {
    var titlePlusLangAdmin = adminContentJson[i].title + adminContentJson[i].type;

    for (var j = 0; j < lengthServerContentJson; j++) {
      var titlePlusLangServer = serverContentJson[j].title + serverContentJson[j].details.type;
     if(titlePlusLangAdmin.localeCompare(titlePlusLangServer)){
       console.log(titlePlusLangAdmin + " = " + titlePlusLangServer);
       // Here I do compare between same contnet: ADMIN /SERVER;
       
      }
    }


  }
};



comparingJsonsData();
