'use strict';
var expect = require('expect.js');
var fs = require('fs');

var stringSameAdminContent;
var stringSameServerContent;

var lengthServerContentJson;
var lengthFilteredAdminContentArr;


var checkNumberOfFiles = function() {


  function readStringSameAdminContent() {
    return new Promise((resolve, reject) => {

      fs.readFile('./Temp/stringSameAdminContent.js', 'utf8', function(err, data) {
        if (err) {
          throw err;
        }
        stringSameAdminContent = data;
        lengthFilteredAdminContentArr = stringSameAdminContent.length;

        console.log(lengthFilteredAdminContentArr);
        resolve(lengthFilteredAdminContentArr);
      });

    });
  };



  function readStringSameServerContent() {
    return new Promise((resolve, reject) => {

      fs.readFile('./Temp/stringSameServerContent.js', 'utf8', function(err, data) {
        if (err) {
          throw err;
        }
        stringSameServerContent = data;
        lengthServerContentJson = stringSameServerContent.length;
        console.log(lengthServerContentJson);
        resolve(lengthServerContentJson);
      });

    });
  };


  (async function() {

    try {
      lengthServerContentJson = await readStringSameServerContent();
    } catch (err) {
      console.log('ERROR: ' + err);
    }

    try {
      lengthFilteredAdminContentArr = await readStringSameAdminContent();
    } catch (err) {
      console.log('ERROR: ' + err);
    }

    expect(lengthFilteredAdminContentArr).not.to.be(undefined);
    expect(lengthServerContentJson).not.to.be(undefined);
    expect(lengthFilteredAdminContentArr).to.be(lengthServerContentJson);
  })();

}

module.exports = checkNumberOfFiles;
