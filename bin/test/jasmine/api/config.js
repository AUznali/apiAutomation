'use strict';

var config = {
  //   env: process.env.TEST_ENV || 'mock',
  baseUrl: 'http://10.250.75.138:4715/v2',
  //baseUrl: 'http://10.250.75.144/v1',
  //  baseUrl: 'http://10.250.75.111/v1',
  // port: process.env.PORT || '4242',
  //   loginId: process.env.LOGIN_ID || 'mock@sre.sony.com',
  //   loginPass: process.env.LOGIN_PASS || 'qua46apexes',
  //   testRoutes: process.env.TEST_ROUTES || null,

  endpoints: {

    //STORES
    stores: {
      route: '/stores/',
      postJSON1: {
        stores: [{
          isCurrent: true,
          timezone: '-8',
          number: '-2'
        }]
      },

      postJSON2: {
        stores: [{
          isCurrent: true,
          timezone: '-8',
          number: '-3'
        }]
      },

      postJsonStoreNotExist: {
        stores: [{
          isCurrent: true,
          timezone: '-8',
          number: '-879789'
        }]
      }
    },

    //SETTINGS
    settings: {
      route: '/settings/',
      postJSON1: {
        subWooferVolume: '10',
        learningVideoVolume: '10',
        systemDefaultLanguage: 'fr-ca',
        systemCurrentLanguage: 'fr-ca',
        hdrEnabled: 'true',
        soundbarEnabled: 'true'
      },

      postJSON2: {
        subWooferVolume: '9',
        learningVideoVolume: '9',
        systemDefaultLanguage: 'en-us',
        systemCurrentLanguage: 'en-us',
        hdrEnabled: 'false',
        soundbarEnabled: 'false'
      },

      //New settings property
      postNewProperty: {
        testProperty: 'testTESTtestTEST'
      }
    },


    //DEVICES
    devices: {
      route: '/devices/',

      postJSON1: {
        "devices": [{
          "id": "123456789",
          "column": "0",
          "imageUri": "http://TEST.TEST",
          "ip": "166.66.66.66",
          "mac": "00:00:00:00:00:00",
          "model": "TESTING_MODEL",
          "name": "TEST",
          "row": "1",
          "type": "HEETWALL_SERVER_UHD_PLAYER",
          "discovery_type": "",
          "resolution": "333",
          "port": "33",
          "input": "0",
          "isContentSource": "1",
          "status": "33",
          "group": "33",
          "cookie": null
        }]
      },

      discoveryTypes: [{
          SMART_SPEAKER_PLAYER: "static"
        },
        {
          HEETWALL_SERVER_UHD_PLAYER: "dynamic"
        },
        {
          HD_PLAYER: "static"
        },
        {
          AUDIOWALL_SERVER_HBT_PLAYER: "dynamic"
        },
        {
          AUDIOWALL_SERVER_HD_PLAYER: "static"
        },
        {
          hdmiswitch: "dynamic"
        },
        {
          tablet: "static"
        },
        {
          tv: "dynamic"
        },
        {
          bd: "static"
        },
        {
          usb: "dynamic"
        },
        {
          SOUNDBAR_PLAYER_MASTER: "static"
        },
        {
          someTestType: "dynamic"
        },
        {
          HEETWALL_PLAYER_3: "static"
        },
        {
          HEETWALL_PLAYER_2: "static"
        }
      ]
    },


    //CONTENT
    content: {
      route: '/content/'
      // ,postJSON: {
      //   subWooferVolume: '0',
      //   learningVideoVolume: '10',
      //   systemDefaultLanguage: 'fr-ca',
      //   hdrEnabled: 'true',
      //   soundbarEnabled: 'true'
      // }
    },


    //CATEGORIES
    categories: {
      route: '/categories/'
      // ,postJSON: {
      //   subWooferVolume: '0',
      //   learningVideoVolume: '10',
      //   systemDefaultLanguage: 'fr-ca',
      //   hdrEnabled: 'true',
      //   soundbarEnabled: 'true'
      // }
    },

    sanitize: {
      whitespace: '           ',

      specialCharacters: '!@#$%^&*()_+',

      script: {
        value: '<script>alert(123)</script>',
        expect: '&lt;script&gt;alert(123)&lt;&#x2F;script&gt;'
      },
      html: {
        value: '<img src="test">',
        expect: '&lt;img src=&quot;test&quot;&gt;'
      }
    }



  }
};

//config.reqUrl = config.baseUrl;
module.exports = config;
