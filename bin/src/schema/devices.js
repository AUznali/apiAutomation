'use strict';


var devicesSchema = {
  title: 'One device Schema',
  //type: 'string',
  required: ['ip', 'mac', 'name', 'type', 'status', 'group'],

  properties: {
    id: {
      type: 'string',
      uniqueItems: true
    },

    column: {
      type: 'string'
    },

    imageUri: {
      type: 'string'
    },

    ip: {
      type: 'string'
    },

    mac: {
      type: 'string'
    },

    model: {
      type: 'string'
    },

    name: {
      type: 'string'
    },

    row: {
      type: 'string'
    },

    type: {
      type: 'string'
    },

    discovery_type: {
      type: 'string'
    },

    resolution: {
      type: 'string'
    },

    port: {
      type: 'string'
    },

    input: {
      type: 'string'
    },

    isContentSource: {
      type: 'string'
    },

    status: {
      type: 'string',
    },

    group: {
      type: 'string',
    },

    cookie: {
      type: 'null',
    }
  }
}



module.exports = devicesSchema;
