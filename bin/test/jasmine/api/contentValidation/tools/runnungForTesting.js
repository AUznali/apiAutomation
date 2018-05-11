'use strict';
var toolSpecs = require('../toolSpecs.js');
var changeLanguage = require('./changeLanguage.js');
var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;

//Requests
var contentValidation = require('./contentValidation0.js');


(async function (){
  //Selecting languages one by one to change one by one
  for (var i = 0; i < 4; i++) {

    var language = mainOptions.languages[i];
    var postJSON = {};
    var key = 'systemCurrentLanguage';
    postJSON[key] = language;

    await contentValidation(language, postJSON);
  }
})();
