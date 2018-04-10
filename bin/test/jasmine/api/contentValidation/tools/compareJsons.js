'use strict';

var pullToArray = require('./pullToArray.js');
var toolSpecs = require('../toolSpecs.js');
var assert = require('assert');



var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;


async function comparingJsonsData() {

  //Gettings Arrays with Content objects from the Server and Admin JSONs
  var adminContentJson = await pullToArray(mainOptions, certainOptions.admin);
  var serverContentJson = await pullToArray(mainOptions, certainOptions.admin);

  //Taking number of the contnet files (Here it's number of objects in the array = array length)
  var lengthAdminContentJson = adminContentJson.length;
  var lengthServerContentJson = serverContentJson.length;


  //  = = = = = TEST = = = = = Comparing number of the contnet files on the SERVER and on the ADMIN
  assert.equal(lengthAdminContentJson, lengthServerContentJson, "NUMBER OF THE CONTENT FILES ARE NOT THE SAME: ADMIN JSON: " +
    lengthAdminContentJson + " / SERVER JSON: " + lengthServerContentJson); //OK
};

comparingJsonsData();
