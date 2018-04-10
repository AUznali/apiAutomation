'use strict';
var config = require('../config.js');
var since = require('jasmine2-custom-message');
var request = require('request');

//Schemas
var storeSchema = require('../../../../src/schema/stores.js');
var devicesSchema = require('../../../../src/schema/devices.js');
var settingsSchema = require('../../../../src/schema/settings.js');
var contentSchema = require('../../../../src/schema/content.js');
var categoriesSchema = require('../../../../src/schema/categories.js');



var mainOptions = {
  request: request
};



var certainOptions = {

  admin: {
    urlToContentJson: 'https://svpa-sre-content-prod.s3.amazonaws.com/2018.04.22-us_sre.json'
  },
  blueServer: { //4K Main Server HeetWall
    urlToContentJson: 'http://192.168.1.140/v1/content/',

  },
  yellowServer: { //Secondary Server HeetWall
    urlToContentJson: 'http://192.168.1.140/v1/content/',
  },
  greenServer: { //3rd Server HeetWall
    urlToContentJson: 'http://192.168.1.140/v1/content/',
  }
};


var endpoints = {
    title: 'title'
};




module.exports = {
  mainOptions: mainOptions,
  certainOptions: certainOptions,
  endpoints: endpoints
};
