'use strict';





var settingsSchema = {
  title: 'Settings Schema',
  //type: 'string',
  required: ['HEETWALL_SERVER_UHD_PLAYERContentUri'],

  properties: {
    HEETWALL_SERVER_UHD_PLAYERContentUri: {
      type: 'string',
      pattern: '(^https:\/\/).*(.json)$'
    },

    HEETWALL_SERVER_UHD_PLAYERUpdateUri: {
      type: 'string',
      pattern: '(^https:\/\/).*(.json)$'
    },

    contentSyncRunning: {
      type: 'string',
      enum: ['true', 'false']
    },

    HEETWALL_SERVER_UHD_PLAYER_Reboot: {
      type: 'string',
      enum: ['true', 'false']
    },

    AUDIOWALL_SERVER_HD_PLAYER_Reboot: {
      type: 'string',
      enum: ['true', 'false']
    },

    HD_PLAYER_Reboot: {
      type: 'string',
      enum: ['true', 'false']
    },

    AudioWallTabletReboot: {
      type: 'string',
      enum: ['true', 'false']
    },

    HEETWALL_SERVER_UHD_PLAYER_Update: {
      type: 'string',
      enum: ['true', 'false']
    },

    AUDIOWALL_SERVER_HD_PLAYER_Update: {
      type: 'string',
      enum: ['true', 'false']
    },

    HD_PLAYER_Update: {
      type: 'string',
      enum: ['true', 'false']
    },

    AudioWallTabletUpdate: {
      type: 'string',
      enum: ['true', 'false']
    },

    latestSoftwareDescription: {
      type: 'string'
    },

    latestSoftwareVersion: {
      type: 'string'
    },

    latestContentDescription: {
      type: 'string'
    },

    latestContentVersion: {
      type: 'string'
    },

    installedSoftwareVersion: {
      type: 'string'
    },

    installedContentVersion: {
      type: 'string'
    },

    phase: {
      type: 'string'
    },

    patch_2015_07_08_versionsTableConstraint: {
      type: 'string',
      enum: ['true', 'false']
    },

    patch_2015_07_08_settingsTableConstraint: {
      type: 'string',
      enum: ['true', 'false']
    },

    patch_2015_07_08_statusTableConstraint: {
      type: 'string',
      enum: ['true', 'false']
    },

    patch_2015_07_26_categoriesTableLanguage: {
      type: 'string',
      enum: ['true', 'false']
    },

    patch_2015_07_26_categoriesTableTranslation: {
      type: 'string',
      enum: ['true', 'false']
    },

    patch_2015_07_26_categoriesTableState: {
      type: 'string',
      enum: ['true', 'false']
    },

    patch_2015_07_29_rulesTableLanguage: {
      type: 'string',
      enum: ['true', 'false']
    },

    currentRetailer: {
      type: 'string'
    },

    download_end_time: {
      type: 'string'
    },

    currentRetailer: {
      type: 'string'
    },

    download_end_time: {
      type: 'string'
    },

    contentSyncPaused: {
      type: 'string',
      enum: ['true', 'false']
    },

    contentSyncInstalledByUser: {
      type: 'string'
    },

    contentSyncPausedByUser: {
      type: 'string'
    },

    allowContentSyncAutoInstall: {
      type: 'string'
    },

    allowUserSync: {
      type: 'string'
    },

    autoSync: {
      type: 'string',
      enum: ['true', 'false']
    },

    configEnvironment: {
      type: 'string'
    },

    configName: {
      type: 'string'
    },

    configOutput: {
      type: 'string'
    },

    configType: {
      type: 'string'
    },

    configSoftwareBaseUri: {
      type: 'string'
    },

    configSoftwareStartHour: {
      type: 'string'
    },

    configSoftwareDurationHours: {
      type: 'string'
    },

    configContentBaseUri: {
      type: 'string'
    },

    configContentStartHour: {
      type: 'string'
    },

    configContentDurationHours: {
      type: 'string'
    },

    configPromoBaseUri: {
      type: 'string',
      pattern: '(^https:\/\/)'
    },

    downloadSpeed: {
      type: 'string'
    },

    contentSyncExpectedFinishTime: {
      type: 'string'
    },

    download_start_time: {
      type: 'string'
    },

    contentSyncTotalItems: {
      type: 'string'
    },

    contentSyncCurrentItem: {
      type: 'string'
    },

    installedContentDescription: {
      type: 'string'
    },

    latestContentInstallDate: {
      type: 'string'
    },

    contentSyncDuration: {
      type: 'string'
    },

    bpsTestHeet: {
      type: 'string'
    },

    HeetWallTabletDlspdCheck: {
      type: 'string'
    },

    availablePhases: {
      type: 'string'
    },

    availableLanguages: {
      type: 'string',
      enum: ['en-us,es-mx,fr-ca,pt-br']
    },

    HD_PLAYER_swVersion: {
      type: 'string'
    },

    HD_PLAYER_installedContent: {
      type: 'string'
    },

    AUDIOWALL_SERVER_HD_PLAYER_swVersion: {
      type: 'string'
    },

    AUDIOWALL_SERVER_HD_PLAYER_installedContent: {
      type: 'string'
    },

    audioWallTablet_swVersion: {
      type: 'string'
    },

    sdkVersion: {
      type: 'string'
    },

    ssuVersion: {
      type: 'string'
    },

    mac: {
      type: 'string'
    },

    patch_2016_01_21_contentMetadata: {
      type: 'string'
    },

    patch_2016_01_21_content_bitdepth: {
      type: 'string'
    },

    patch_2016_01_21_content_colorspace: {
      type: 'string'
    },

    patch_2016_01_21_content_artist: {
      type: 'string'
    },

    patch_2016_01_21_content_album: {
      type: 'string'
    },

    patch_2016_04_05_index: {
      type: 'string'
    },

    currentStore: {
      type: 'string'
    },

    uptime: {
      type: 'string'
    },

    installedSoftwareDescription: {
      type: 'string'
    },

    latestSoftwareInstallDate: {
      type: 'string'
    },

    contentSyncPauseTime: {
      type: 'string'
    },

    contentSyncUnpauseTime: {
      type: 'string'
    },

    contentSyncPauseDuration: {
      type: 'string'
    },

    contentSyncRunningDuration: {
      type: 'string'
    },

    patch_2016_09_14_content_output_resolution: {
      type: 'string'
    },

    contentSyncError: {
      type: 'string'
    },

    contentSyncRunningDurationSeconds: {
      type: 'string'
    },

    contentSyncPauseDurationSeconds: {
      type: 'string'
    },

    contentSyncDurationSeconds: {
      type: 'string'
    },

    ipaddr: {
      type: 'string'
    },

    wipaddr: {
      type: 'string'
    },

    wmac: {
      type: 'string'
    },

    AUDIOWALL_SERVER_HBT_PLAYER_Update: {
      type: 'string'
    },

    SOUNDBAR_PLAYER_MASTER_Update: {
      type: 'string'
    },

    SOUNDBAR_PLAYER_SLAVE_Update: {
      type: 'string'
    },

    password: {
      type: 'string'
    },

    usbMountPoint: {
      type: 'string'
    },

    hostname: {
      type: 'string'
    },

    patch_2017_04_01_indexesPatch: {
      type: 'string'
    },

    patch_2017_04_02_moreIndexesPatch: {
      type: 'string'
    },

    TV2_PLAYER_Reboot: {
      type: 'string'
    },

    currentCategory: {
      type: 'string'
    },

    availableCategories: {
      type: 'string'
    },

    uiPath: {
      type: 'string'
    },

    uiType: {
      type: 'string'
    },

    AudioWallTabletDlspdCheck: {
      type: 'string'
    },

    Media2KServerDlspdCheck: {
      type: 'string'
    },

    softwareSyncError: {
      type: 'string'
    },

    patch_2017_06_15_content_expiration: {
      type: 'string'
    },

    patch_2017_06_15_content_enabled_date: {
      type: 'string'
    },

    tvLayout: {
      type: 'string'
    },

    HeetWallTabletNumReboots: {
      type: 'string'
    },

    HeetWallTabletUpdate: {
      type: 'string'
    },

    displayName: {
      type: 'string'
    },

    businessUnit: {
      type: 'string'
    },

    foundHbt: {
      type: 'string'
    },

    hdmiDeviceHeet: {
      type: 'string'
    },

    hdmiAudioVolumeHeet: {
      type: 'string'
    },

    hdmiAudioChannelsHeet: {
      type: 'string'
    },

    hdmiAudioMuteHeet: {
      type: 'string'
    },

    hdmiScreenWidthHeet: {
      type: 'string'
    },

    hdmiScreenHeightHeet: {
      type: 'string'
    },

    hdmiScreenRefreshHeet: {
      type: 'string'
    },

    memoryFreeHeet: {
      type: 'string'
    },

    hddTypeHeet: {
      type: 'string'
    },

    patch_2017_10_05_increaseForTvLayoutPatch: {
      type: 'string',
      enum: ['true', 'false']
    },

    wallLayout: {
      type: 'string'
    },

    HeetWallTabletReboot: {
      type: 'string',
      enum: ['true', 'false']
    },

    uipaddr: {
      type: 'string'
    },

    umac: {
      type: 'string'
    },

    patch_2017_11_27_actionsTableFileId: {
      type: 'string',
      enum: ['true', 'false']
    },

    platformId: {
      type: 'string'
    },

    tabletScreenSleepTime: {
      type: 'string'
    },

    tabletScreenWakeTime: {
      type: 'string'
    },

    tabletScreenSleepHours: {
      type: 'string'
    },

    systemCurrentLanguage: {
      type: 'string',
      enum: ['en-us','es-mx','fr-ca','pt-br']
    },

    softwareUpdateRequestState: {
      type: 'string'
    },

    contentUpdateRequestState: {
      type: 'string'
    },

    subWooferVolume: {
      type: 'string'
    },

    learningVideoVolume: {
      type: 'string'
    },

    systemDefaultLanguage: {
      type: 'string',
      enum: ['en-us','es-mx','fr-ca','pt-br']
    },

    hdrEnabled: {
      type: 'string',
      enum: ['true', 'false']
    },

    soundbarEnabled: {
      type: 'string',
      enum: ['true', 'false']
    }
  }
}




module.exports = settingsSchema;
