'use strict';


var contentArrays = function(serverContentJson, filteredAdminContentArr) {
return new Promise(resolve => {

    var sameAdminContent = [];
    var sameServerContent = [];

    //Taking number of the contnet files (Here it's number of objects in the array == array length)
    var lengthServerContentJson = serverContentJson.length;
    var lengthFilteredAdminContentArr = filteredAdminContentArr.length;


    //Working with two arrays. Comparing content by File ID
    for (var i = 0; i < lengthFilteredAdminContentArr; i++) {
      var fileIdAdmin = filteredAdminContentArr[i].fileId;

      for (var k = 0; k < lengthServerContentJson; k++) {
        var fileIdServer = serverContentJson[k].details.fileId;

        // creating objects with same content to compare it in next tests
        //Comparing Title and Language
        if (fileIdAdmin === fileIdServer) {
          sameAdminContent.push(filteredAdminContentArr[i]);
          sameServerContent.push(serverContentJson[k]);
        }
      }

    }
          //console.log(filteredAdminContentArr[1]);
    resolve([sameAdminContent, sameServerContent]);

  });
};








module.exports = contentArrays;
