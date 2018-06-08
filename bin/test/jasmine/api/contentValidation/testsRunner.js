'use strict';
var toolSpecs = require('./toolSpecs.js');
var changeLanguage = require('./tools/changeLanguage.js');
var mainOptions = toolSpecs.mainOptions;
var certainOptions = toolSpecs.certainOptions;

//Requests
var contentValidation = require('./tools/contentValidation.js');




(function() {
  //Selecting languages one by one to change one by one
  for (var i = 0; i < 4; i++) {


(async function() {
    var language = mainOptions.languages[i];
    var postJSON = {};
    var key = 'systemCurrentLanguage';
    postJSON[key] = language;


    try {
      await contentValidation(language, postJSON);
    } catch (err) {
      console.log('ERROR: ' + err);
    }
    })();

  }

})();
