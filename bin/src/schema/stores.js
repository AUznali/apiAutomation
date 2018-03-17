'use strict';

var storeSchema = {
  title: 'One store Schema',
  //type: 'string',
  required: ['id', 'isCurrent', 'name', 'number', 'state', 'timezone'],

  properties: {
    id: {
      type: 'string',
      uniqueItems: true,
       pattern: '^[a-z, 0-9]{8}-[a-z, 0-9]{4}-[a-z, 0-9]{4}-[a-z, 0-9]{4}-[a-z, 0-9]{12}$'
    },

    isCurrent: {
      type: 'boolean',
      enum: [true, false]

    },

    city: {
      type: 'string'
    },

    name: {
      type: 'string'
    },

    number: {
      type: 'string'
    },

    state: {
      type: 'string'
    },

    timezone: {
      type: 'string'
    },

    retailer: {
      type: 'string'
    },

    region: {
      type: 'string'
    }
  }
}



module.exports = storeSchema;
