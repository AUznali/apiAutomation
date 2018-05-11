'use strict';


var compareSameContent = function(filteredAdminContentArr, serverContentJson, adminId){
  console.log("= = = = = = = = = = = = ");
describe('Comparing Admin/Server content JSON files', function() {


  //IMAGES
  var imagesAdmin = filteredAdminContentArr.images;
  var imagesServer = serverContentJson.images;


  // Here I do compare details between same contnet: ADMIN /SERVER;

  it('TITLE Should match', function() {
    //CHECKING TITLE
    since('TITLES ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.title + ' / SERVER: ' + serverContentJson.title)
      .expect(filteredAdminContentArr.title).toBe(serverContentJson.title);
  });


  it('OUTPUT RANGES Should match', function() {
    //CHECKING OUTPUT RANGES
    since('OUTPUT RANGES ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.outputRange + ' / SERVER: ' + serverContentJson.details.outputRange)
      .expect(filteredAdminContentArr.outputRange).toBe(serverContentJson.details.outputRange);
  });


  it('ACTION ID Should match', function() {
    //CHECKING ACTION ID
    since('OUTPUT RANGES ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.actionId + ' / SERVER: ' + serverContentJson.details.actionId)
      .expect(filteredAdminContentArr.actionId).toBe(serverContentJson.details.actionId);
  });


  it('RESOLUTION Should match', function() {
    //CHECKING RESOLUTION
    since('RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.resolution + ' / SERVER: ' + serverContentJson.resolution)
      .expect(filteredAdminContentArr.resolution).toBe(serverContentJson.resolution);
  });


  it('SUPPORTED RESOLUTIONS Should match', function() {
    //CHECKING SUPPORTED RESOLUTIONS
    since('SUPPORTED RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.supportedResolutions + ' / SERVER: ' + serverContentJson.details.supportedResolutions)
      .expect(filteredAdminContentArr.supportedResolutions).toBe(serverContentJson.details.supportedResolutions);
  });


  it('OUTPUT RESOLUTIONS Should match', function() {
    //CHECKING OUTPUT RESOLUTIONS
    since('OUTPUT RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.outputResolution + ' / SERVER: ' + serverContentJson.details.outputResolution)
      .expect(filteredAdminContentArr.outputResolution).toBe(serverContentJson.details.outputResolution);
  });


  it('SUPPORTED MODELS Should match', function() {
    //CHECKING SUPPORTED MODELS
    since('SUPPORTED MODELS ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.supportedModels + ' / SERVER: ' + serverContentJson.details.supportedModels)
      .expect(filteredAdminContentArr.supportedModels).toBe(serverContentJson.details.supportedModels);
  });


  // it('SUPPORTED AUDIO MODELS Should match', function() {
  //Do we need check this?
  // //CHECKING SUPPORTED AUDIO MODELS
  // since('SUPPORTED AUDIO MODELS ARE NOT THE SAME: ADMIN: ' +
  //     filteredAdminContentArr.supportedAudioModels + ' / SERVER: ' + serverContentJson.details.supportedAudioModels)
  //   .expect(filteredAdminContentArr.supportedAudioModels).toBe(serverContentJson.details.supportedAudioModels);
  // });



  it('UNSUPPORTED MODELS Should match', function() {
    //CHECKING UNSUPPORTED MODELS
    since('UNSUPPORTED MODELS ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.unsupportedModels + ' / SERVER: ' + serverContentJson.details.unsupportedModels)
      .expect(filteredAdminContentArr.unsupportedModels).toBe(serverContentJson.details.unsupportedModels);
  });


  it('CHANNEL Should match', function() {
    //CHECKING CHANNEL
    since('CHANNELS ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.channel + ' / SERVER: ' + serverContentJson.details.channel)
      .expect(filteredAdminContentArr.channel).toBe(serverContentJson.details.channel);
  });


  it('AUDIO LEVEL Should match', function() {
    //CHECKING AUDIO LEVEL
    since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.audioLevel + ' / SERVER: ' + serverContentJson.details.audioLevel)
      .expect(filteredAdminContentArr.audioLevel).toBe(serverContentJson.details.audioLevel);
  });


  it('LANGUAGE Should match', function() {
    //CHECKING LANGUAGE
    since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.type + ' / SERVER: ' + serverContentJson.details.type)
      .expect(filteredAdminContentArr.type).toBe(serverContentJson.details.type);
  });


  it('FILENAMES Should match', function() {
    //Changing to format ID + Filename to compare with Filenames from Server
    var filenameAdmin = adminId + "/" + filteredAdminContentArr.filename;
    var filenameServer = serverContentJson.filename;

    //CHECKING FILENAMES
    since('FILE NAMES ARE NOT THE SAME: ADMIN: ' + filenameAdmin + ' / SERVER: ' + filenameServer)
      .expect(filenameAdmin).toBe(filenameServer);
  });


  it('DETALABLE Should match', function() {
    //CHECKING DETALABLE
    since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.deletable + ' / SERVER: ' + serverContentJson.details.deletable)
      .expect(filteredAdminContentArr.deletable).toBe(serverContentJson.details.deletable);
  });


  // = = = = = images = = = = = =

  it('NUMBER OF IMAGES Should match', function() {
    //CHECKING NUMBER OF IMAGES
    since('NUMBER OF IMAGES IS NOT THE SAME: ADMIN: ' +
        filteredAdminContentArr.images.length +
        ' / SERVER: ' + serverContentJson.images.length + " FILE: " + " ID/ " +
        filteredAdminContentArr.fileId + " / TITLE: " + filteredAdminContentArr.title)
      .expect(filteredAdminContentArr.images.length).toBe(serverContentJson.images.length);
  });
});
};

module.exports = compareSameContent;
