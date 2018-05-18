'use strict';


var compareSameContent = function(sameAdminContent, sameServerContent, adminId){
    return new Promise((resolve, reject) => {

describe('Comparing Admin/Server content JSON files', function() {


  //IMAGES
  var imagesAdmin = sameAdminContent.images;
  var imagesServer = sameServerContent.images;


  // Here I do compare details between same contnet: ADMIN /SERVER;

  it('TITLE Should match', function() {
    //CHECKING TITLE
    since('TITLES ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.title + ' / SERVER: ' + sameServerContent.title)
      .expect(sameAdminContent.title).toBe(sameServerContent.title);
  });


  it('OUTPUT RANGES Should match', function() {
    //CHECKING OUTPUT RANGES
    since('OUTPUT RANGES ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.outputRange + ' / SERVER: ' + sameServerContent.details.outputRange)
      .expect(sameAdminContent.outputRange).toBe(sameServerContent.details.outputRange);
  });


  it('ACTION ID Should match', function() {
    //CHECKING ACTION ID
    since('OUTPUT RANGES ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.actionId + ' / SERVER: ' + sameServerContent.details.actionId)
      .expect(sameAdminContent.actionId).toBe(sameServerContent.details.actionId);
  });


  it('RESOLUTION Should match', function() {
    //CHECKING RESOLUTION
    since('RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.resolution + ' / SERVER: ' + sameServerContent.resolution)
      .expect(sameAdminContent.resolution).toBe(sameServerContent.resolution);
  });


  it('SUPPORTED RESOLUTIONS Should match', function() {
    //CHECKING SUPPORTED RESOLUTIONS
    since('SUPPORTED RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.supportedResolutions + ' / SERVER: ' + sameServerContent.details.supportedResolutions)
      .expect(sameAdminContent.supportedResolutions).toBe(sameServerContent.details.supportedResolutions);
  });


  it('OUTPUT RESOLUTIONS Should match', function() {
    //CHECKING OUTPUT RESOLUTIONS
    since('OUTPUT RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.outputResolution + ' / SERVER: ' + sameServerContent.details.outputResolution)
      .expect(sameAdminContent.outputResolution).toBe(sameServerContent.details.outputResolution);
  });


  it('SUPPORTED MODELS Should match', function() {
    //CHECKING SUPPORTED MODELS
    since('SUPPORTED MODELS ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.supportedModels + ' / SERVER: ' + sameServerContent.details.supportedModels)
      .expect(sameAdminContent.supportedModels).toBe(sameServerContent.details.supportedModels);
  });


  // it('SUPPORTED AUDIO MODELS Should match', function() {
  //Do we need check this?
  // //CHECKING SUPPORTED AUDIO MODELS
  // since('SUPPORTED AUDIO MODELS ARE NOT THE SAME: ADMIN: ' +
  //     sameAdminContent.supportedAudioModels + ' / SERVER: ' + sameServerContent.details.supportedAudioModels)
  //   .expect(sameAdminContent.supportedAudioModels).toBe(sameServerContent.details.supportedAudioModels);
  // });



  it('UNSUPPORTED MODELS Should match', function() {
    //CHECKING UNSUPPORTED MODELS
    since('UNSUPPORTED MODELS ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.unsupportedModels + ' / SERVER: ' + sameServerContent.details.unsupportedModels)
      .expect(sameAdminContent.unsupportedModels).toBe(sameServerContent.details.unsupportedModels);
  });


  it('CHANNEL Should match', function() {
    //CHECKING CHANNEL
    since('CHANNELS ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.channel + ' / SERVER: ' + sameServerContent.details.channel)
      .expect(sameAdminContent.channel).toBe(sameServerContent.details.channel);
  });


  it('AUDIO LEVEL Should match', function() {
    //CHECKING AUDIO LEVEL
    since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.audioLevel + ' / SERVER: ' + sameServerContent.details.audioLevel)
      .expect(sameAdminContent.audioLevel).toBe(sameServerContent.details.audioLevel);
  });


  it('LANGUAGE Should match', function() {
    //CHECKING LANGUAGE
    since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.type + ' / SERVER: ' + sameServerContent.details.type)
      .expect(sameAdminContent.type).toBe(sameServerContent.details.type);
  });


  it('FILENAMES Should match', function() {
    //Changing to format ID + Filename to compare with Filenames from Server
    var filenameAdmin = adminId + "/" + sameAdminContent.filename;
    var filenameServer = sameServerContent.filename;

    //CHECKING FILENAMES
    since('FILE NAMES ARE NOT THE SAME: ADMIN: ' + filenameAdmin + ' / SERVER: ' + filenameServer)
      .expect(filenameAdmin).toBe(filenameServer);
  });


  it('DETALABLE Should match', function() {
    //CHECKING DETALABLE
    since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
        sameAdminContent.deletable + ' / SERVER: ' + sameServerContent.details.deletable)
      .expect(sameAdminContent.deletable).toBe(sameServerContent.details.deletable);
  });


  // = = = = = images = = = = = =

  it('NUMBER OF IMAGES Should match', function() {
    //CHECKING NUMBER OF IMAGES
    since('NUMBER OF IMAGES IS NOT THE SAME: ADMIN: ' +
        sameAdminContent.images.length +
        ' / SERVER: ' + sameServerContent.images.length + " FILE: " + " ID/ " +
        sameAdminContent.fileId + " / TITLE: " + sameAdminContent.title)
      .expect(sameAdminContent.images.length).toBe(sameServerContent.images.length);
  });
});
resolve('Done!');
});
};

module.exports = compareSameContent;
