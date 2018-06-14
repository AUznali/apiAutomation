'use strict';
var expect = require('expect.js');

var getDevices = async function(mainOptions, certainOptions) {

  function getRequest() {
    return new Promise(resolve => {
      var url = certainOptions.serverIp + mainOptions.endpoints.devices.path;
      console.log(url);


      //Making GET to get all devices
      mainOptions.request.get({
        url: url
      }, function(error, response, body) {


        //PARSING BODY
        expect(response.statusCode).to.be(200);
        var bodyJS = JSON.parse(body);
        devices = bodyJS.devices;
        resolve(devices);
      });

    });
  };

  var devices = await getRequest();


for(var device of devices){

  if(device.name.includes('PLAYER') && device.status == 'online'){
    console.log(device.name);
  }
}






};




module.exports = getDevices;
