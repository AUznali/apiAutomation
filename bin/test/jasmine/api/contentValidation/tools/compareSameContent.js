//'use strict';
var fs = require('fs');
var since = require('jasmine2-custom-message');





describe('Comparing Admin/Server content JSON files', function() {


  beforeAll(function() {

    this.sameAdminContent = JSON.parse(fs.readFileSync('./Temp/sameAdminContent.js').toString());
    this.sameServerContent = JSON.parse(fs.readFileSync('./Temp/sameServerContent.js').toString());
    this.adminId = fs.readFileSync('./Temp/adminId.js').toString();

    //console.log(this.sameAdminContent);


    //IMAGES
    var imagesAdmin = this.sameAdminContent.images;
    var imagesServer = this.sameServerContent.images;
    console.log("======= Comparing ===========");
    });





    it('TEST', function(done) {
console.log("++++++++++++++++++TEST1++++++++++++++++++++++++ ");
done();
    });


    it('TEST2', function(done) {
console.log("++++++++++++++++++TEST2++++++++++++++++++++++++ ");
done();
    });



    // Here I do compare details between same contnet: ADMIN /SERVER;

    it('TITLE Should match', function(done) {
      //CHECKING TITLE
      // since('TITLES ARE NOT THE SAME: ADMIN: ' +
      //     this.sameAdminContent.title + ' / SERVER: ' + this.sameServerContent.title)
      //   .
        expect(this.sameAdminContent.title).toBe(this.sameServerContent.title);
        console.log("=========================" + this.sameAdminContent.title);
        done();
    });
    //
    //
    // it('OUTPUT RANGES Should match', function() {
    //   //CHECKING OUTPUT RANGES
    //   since('OUTPUT RANGES ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.outputRange + ' / SERVER: ' + this.sameServerContent.details.outputRange)
    //     .expect(this.sameAdminContent.outputRange).toBe(this.sameServerContent.details.outputRange);
    // });
    //
    //
    // it('ACTION ID Should match', function() {
    //   //CHECKING ACTION ID
    //   since('OUTPUT RANGES ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.actionId + ' / SERVER: ' + this.sameServerContent.details.actionId)
    //     .expect(this.sameAdminContent.actionId).toBe(this.sameServerContent.details.actionId);
    // });
    //
    //
    // it('RESOLUTION Should match', function() {
    //   //CHECKING RESOLUTION
    //   since('RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.resolution + ' / SERVER: ' + this.sameServerContent.resolution)
    //     .expect(this.sameAdminContent.resolution).toBe(this.sameServerContent.resolution);
    // });
    //
    //
    // it('SUPPORTED RESOLUTIONS Should match', function() {
    //   //CHECKING SUPPORTED RESOLUTIONS
    //   since('SUPPORTED RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.supportedResolutions + ' / SERVER: ' + this.sameServerContent.details.supportedResolutions)
    //     .expect(this.sameAdminContent.supportedResolutions).toBe(this.sameServerContent.details.supportedResolutions);
    // });
    //
    //
    // it('OUTPUT RESOLUTIONS Should match', function() {
    //   //CHECKING OUTPUT RESOLUTIONS
    //   since('OUTPUT RESOLUTIONS ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.outputResolution + ' / SERVER: ' + this.sameServerContent.details.outputResolution)
    //     .expect(this.sameAdminContent.outputResolution).toBe(this.sameServerContent.details.outputResolution);
    // });
    //
    //
    // it('SUPPORTED MODELS Should match', function() {
    //   //CHECKING SUPPORTED MODELS
    //   since('SUPPORTED MODELS ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.supportedModels + ' / SERVER: ' + this.sameServerContent.details.supportedModels)
    //     .expect(this.sameAdminContent.supportedModels).toBe(this.sameServerContent.details.supportedModels);
    // });
    //
    //
    // // it('SUPPORTED AUDIO MODELS Should match', function() {
    // //Do we need check this?
    // // //CHECKING SUPPORTED AUDIO MODELS
    // // since('SUPPORTED AUDIO MODELS ARE NOT THE SAME: ADMIN: ' +
    // //     this.sameAdminContent.supportedAudioModels + ' / SERVER: ' + this.sameServerContent.details.supportedAudioModels)
    // //   .expect(this.sameAdminContent.supportedAudioModels).toBe(this.sameServerContent.details.supportedAudioModels);
    // // });
    //
    //
    //
    // it('UNSUPPORTED MODELS Should match', function() {
    //   //CHECKING UNSUPPORTED MODELS
    //   since('UNSUPPORTED MODELS ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.unsupportedModels + ' / SERVER: ' + this.sameServerContent.details.unsupportedModels)
    //     .expect(this.sameAdminContent.unsupportedModels).toBe(this.sameServerContent.details.unsupportedModels);
    // });
    //
    //
    // it('CHANNEL Should match', function() {
    //   //CHECKING CHANNEL
    //   since('CHANNELS ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.channel + ' / SERVER: ' + this.sameServerContent.details.channel)
    //     .expect(this.sameAdminContent.channel).toBe(this.sameServerContent.details.channel);
    // });
    //
    //
    // it('AUDIO LEVEL Should match', function() {
    //   //CHECKING AUDIO LEVEL
    //   since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.audioLevel + ' / SERVER: ' + this.sameServerContent.details.audioLevel)
    //     .expect(this.sameAdminContent.audioLevel).toBe(this.sameServerContent.details.audioLevel);
    // });
    //
    //
    // it('LANGUAGE Should match', function() {
    //   //CHECKING LANGUAGE
    //   since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.type + ' / SERVER: ' + this.sameServerContent.details.type)
    //     .expect(this.sameAdminContent.type).toBe(this.sameServerContent.details.type);
    // });
    //
    //
    // it('FILENAMES Should match', function() {
    //   //Changing to format ID + Filename to compare with Filenames from Server
    //   var filenameAdmin = this.adminId + "/" + this.sameAdminContent.filename;
    //   var filenameServer = this.sameServerContent.filename;
    //
    //   //CHECKING FILENAMES
    //   since('FILE NAMES ARE NOT THE SAME: ADMIN: ' + filenameAdmin + ' / SERVER: ' + filenameServer)
    //     .expect(filenameAdmin).toBe(filenameServer);
    // });
    //
    //
    // it('DETALABLE Should match', function() {
    //   //CHECKING DETALABLE
    //   since('AUDIO LEVELS ARE NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.deletable + ' / SERVER: ' + this.sameServerContent.details.deletable)
    //     .expect(this.sameAdminContent.deletable).toBe(this.sameServerContent.details.deletable);
    // });
    //
    //
    // // = = = = = images = = = = = =
    //
    // it('NUMBER OF IMAGES Should match', function() {
    //   //CHECKING NUMBER OF IMAGES
    //   since('NUMBER OF IMAGES IS NOT THE SAME: ADMIN: ' +
    //       this.sameAdminContent.images.length +
    //       ' / SERVER: ' + this.sameServerContent.images.length + " FILE: " + " ID/ " +
    //       this.sameAdminContent.fileId + " / TITLE: " + this.sameAdminContent.title)
    //     .expect(this.sameAdminContent.images.length).toBe(this.sameServerContent.images.length);
    // });
});


//module.exports = compareSameContent;
