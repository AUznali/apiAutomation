'use strict';

var contentSchema = {
  title: 'Content api Schema',
  type: 'object',
  required: ['id', 'title', 'filename', 'resolution'],

  properties: {
    id: {
      type: 'string',
      uniqueItems: true,
      pattern: '^[a-z, 0-9]{8}-[a-z, 0-9]{4}-[a-z, 0-9]{4}-[a-z, 0-9]{4}-[a-z, 0-9]{12}$'
    },
    title: {
      type: 'string'
    },
    filename: {
      type: 'string',
      pattern: 'ts$|mp4$' //.ts or .mp4 files format validation
    },
    resolution: {
      type: 'string'
    },

    details: {
      type: 'object',
      properties: {
        description: 'string',
        genres: {
          type: 'array',
          items: ['object']
        },
        duration: 'string',
        release: 'string',
        tags: 'string',
        rating: 'string',
        expires: 'string',
        added: 'string',
        frameRate: 'string',
        type: {
          type: 'string',
          enum: ['en-us', 'fr-ca', 'es-mx', 'pt-br']
        },
        deletable: 'string',
        outputRange: 'string',
        outputResolution: 'string',
        enabledDate: 'string',
        channel: 'string',
        actionId: 'string',
        resolution: 'string',

        supportedResolutions: 'string',
        supportedModels: 'string',
        supportedAudioModels: 'string',
        audioLevel: 'string',
        fileId: 'string',
        metadata: 'string',
        bitdepth: 'string',
        colorspace: 'string',
        artist: 'string',
        album: 'string'
      }
    },
    status: {
      state: 'string',
      download: {
        size: 'string',
        bytes: 'number',
        position: 'string'
      },
      playback: {
        viewCount: 'string',
        position: 'string'
      }
    },
    categories: [{
      id: {
        type: 'string',
        uniqueItems: true,
        pattern: '^[a-z, 0-9]{8}-[a-z, 0-9]{4}-[a-z, 0-9]{4}-[a-z, 0-9]{4}-[a-z, 0-9]{12}$'
      },
      name: 'string',
      language: {
        type: 'string',
        enum: ['en-us', 'es-mx', 'fr-ca', 'pt-br']
      },
      translation: 'string',
      state: 'string'
    }],

    images: [{
      id: 'string',
      uri: 'string',
      width: 'string',
      height: 'string',
      row: 'string',
      column: 'string',
      action: 'string'
    }]
  }
}




module.exports = contentSchema;
