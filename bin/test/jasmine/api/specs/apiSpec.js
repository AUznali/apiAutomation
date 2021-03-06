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




var generalOptions = {
  endpoint: config.endpoints,
  config: this.config,
  jar: this.jar,
  request: request,
  baseUrl: config.baseUrl,
  since: since,
  ip: config.baseUrl.replace('http://', '').replace('/v1', ''),
  testParameters: [
    config.endpoints.sanitize.whitespace
    //  ,config.endpoints.sanitize.specialCharacters
  ]
};

var specificOptions = {

  stores: {
    name: '/stores/',
    route: config.endpoints.stores.route,
    postJSON1: config.endpoints.stores.postJSON1,
    postJSON2: config.endpoints.stores.postJSON2,
    postJsonStoreNotExist: config.endpoints.stores.postJsonStoreNotExist,
    schema: storeSchema
  },
  devices: {
    name: '/devices/',
    route: config.endpoints.devices.route,
    postJSON1: config.endpoints.devices.postJSON1,
    postJSON2: config.endpoints.devices.postJSON2,
    schema: devicesSchema,
    discoveryTypes: config.endpoints.devices.discoveryTypes
  },

  settings: {
    name: '/settings/',
    route: config.endpoints.settings.route,
    postJSON1: config.endpoints.settings.postJSON1,
    postJSON2: config.endpoints.settings.postJSON2,
    postNewProperty: config.endpoints.settings.postNewProperty,
    schema: settingsSchema
  },

  content: {
    name: '/content/',
    route: config.endpoints.content.route,
    //postJSON: config.endpoints.settings.postJSON,
    schema: contentSchema
  },

  categories: {
    name: '/categories/',
    route: config.endpoints.categories.route,
    //postJSON: config.endpoints.settings.postJSON,
    schema: categoriesSchema
  }
};




module.exports = {
  generalOptions: generalOptions,
  specificOptions: specificOptions
}
