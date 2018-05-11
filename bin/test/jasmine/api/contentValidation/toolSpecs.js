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

//SERVERS IPs
var blueServerIp = 'http://10.250.75.140/'; // Main server
var yellowServerIp = 'http://10.250.75.140/'; // Second server
var greenServerIp = 'http://10.250.75.140/'; // 3rd Server



var mainOptions = {
  request: request,
  languages: ['en-us', 'es-mx', 'fr-ca', 'pt-br'],
  endpoints: {
    settings: {
      path: 'settings/',
      localEndpoints: {
        systemCurrentLanguage: 'systemCurrentLanguage'
      }
    }
  }
};



var certainOptions = {

  //ADMIN
  admin: {
    jsonUrl: 'https://svpa-sre-content-prod.s3.amazonaws.com/2018.04.22-us_sremirror.json',
    // https://svpa-sre-content-prod.s3.amazonaws.com/2018.01.18-us_sremirror.json
    // https://svpa-sre-content-prod.s3.amazonaws.com/2018.04.22-us_sremirror.json'


    deviceCategories: {
      jsonPath: 'device_categories' + 'HEETWALL_SERVER_UHD_PLAYER'
    }

  },

  //BLUE SERVER
  blueServer: { //4K Main Server HeetWall
    serverIp: blueServerIp,

    contentJson: {
      jsonUrl: blueServerIp + 'v1/content/',
    },
    settingsJson: {
      jsonUrl: blueServerIp + 'v1/settings/'
    }
  },

  //YELLOW SERVER
  yellowServer: { //Secondary Server HeetWall
    serverIp: yellowServerIp,
    urlToContentJson: yellowServerIp + 'v1/content/',
    device_categories: yellowServerIp + 'v1/content/device_categories/'
  },

  //GREEN SERVER
  greenServer: { //3rd Server HeetWall
    serverIp: greenServerIp,
    urlToContentJson: greenServerIp + 'v1/content/',
    device_categories: greenServerIp + 'v1/content/device_categories/'
  }
};


module.exports = {
  mainOptions: mainOptions,
  certainOptions: certainOptions
};
