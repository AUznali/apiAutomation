'use strict';


var categoriesSchema = {
  title: 'Categories Schema',
  type: 'object',
  required: ['id', 'name', 'language'],
  properties: {
    id: {
      type: 'string',
      pattern: '^[a-z, 0-9]{8}-[a-z, 0-9]{4}-[a-z, 0-9]{4}-[a-z, 0-9]{4}-[a-z, 0-9]{12}$'
    },
    name: {
      type: 'string'
    },
    language: {
      type: 'string',
      enum: ['en-us', 'fr-ca', 'es-mx', 'pt-br']
    },
    translation: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    images: {
      type: 'array',
      items: [{
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          uri: {
            type: 'string',
            pattern: 'png$'
          },
          width: {
            type: 'string'
          },
          height: {
            type: 'string'
          },
          row: {
            type: 'string'
          },
          column: {
            type: 'string'
          },
          action: {
            type: 'null'
          }
        }
      }]
    }
  }
};

module.exports = categoriesSchema;
