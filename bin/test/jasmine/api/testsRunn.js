'use strict';


//Requests
var stores = require('./test/stores.js');
var settings = require('./test/settings.js');
var getById = require('./test/getById.js');

var sanitization = require('./test/sanitization.js');

var schemaValidation = require('./test/schemaValidation.js');
 var apiSpec = require('./specs/apiSpec.js');

 var generalOptions = apiSpec.generalOptions;
 var specificOptions = apiSpec.specificOptions;




// ==== RUNNING TESTS ====

//REQUESTS
//stores(generalOptions, specificOptions.stores);
//getById(generalOptions, specificOptions.stores);

// settings(generalOptions, specificOptions.settings);
// getById(generalOptions, specificOptions.devices);
//  getById(generalOptions, specificOptions.categories);
//  getById(generalOptions, specificOptions.content);


//SANITIZATION
for(var i = 0; i < generalOptions.testParameters.length; i++){
  var parameterForTest = generalOptions.testParameters[i];
  sanitization(generalOptions, specificOptions.stores, parameterForTest);
}




//SCHEMA VALIDATION
// schemaValidation(generalOptions, specificOptions.stores);
// schemaValidation(generalOptions, specificOptions.devices);
// schemaValidation(generalOptions, specificOptions.settings);
// schemaValidation(generalOptions, specificOptions.content);
// schemaValidation(generalOptions, specificOptions.categories);
