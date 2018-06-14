'use strict';

var config = {
  //   env: process.env.TEST_ENV || 'mock',
  baseUrl: 'http://10.250.75.144:4715/v2',
  //baseUrl: 'http://10.250.75.144/v1',
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
        }
      ]
    },

    postJSON2: {
      stores: [{
        isCurrent: true,
        timezone: '-8',
        number: '-3'
      }
    ]
  },

    postJsonStoreNotExist: {
      stores: [{
        isCurrent: true,
        timezone: '-8',
        number: '-79797979'
      }
    ]
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
    }
  },


    //DEVICES
    devices: {
      route: '/devices/',
      postJSON: {
        subWooferVolume: '0',
        learningVideoVolume: '10',
        systemDefaultLanguage: 'fr-ca',
        hdrEnabled: 'true',
        soundbarEnabled: 'true'
      }
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

  specialCharacters:'!@#$%^&*()_+',

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
