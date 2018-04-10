'use strict';


//Requests
var pullToArray = require('./tools/pullToArray.js');
var toolSpecs = require('./toolSpecs.js');

var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;
var endpoints = toolSpecs.endpoints;


// ==== RUNNING TESTS ====

//REQUESTS
// stores(generalOptions, specificOptions.stores);
// settings(generalOptions, specificOptions.settings);

var res;
res =  pullToArray(mainOptions, certainOptions.admin, endpoints.title);

// function print(){
//   console.log(res);
// }
// setTimeout(print, 5000);


// getById(generalOptions, specificOptions.categories);

//SANITIZATION
// for(var i = 0; i < generalOptions.testParameters.length; i++){
//   var parameterForTest = generalOptions.testParameters[i];
//   sanitization(generalOptions, specificOptions.stores, parameterForTest);
// }



//SCHEMA VALIDATION
// schemaValidation(generalOptions, specificOptions.stores);
// schemaValidation(generalOptions, specificOptions.devices);
// schemaValidation(generalOptions, specificOptions.settings);
// schemaValidation(generalOptions, specificOptions.content);
// schemaValidation(generalOptions, specificOptions.categories);
