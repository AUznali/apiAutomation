'use strict';



//Pulling data from Api JSON to array. Later will compare data from this array with another one.
var pullToArray = function(mainOptions, certainOptions) {
  return new Promise((resolve, reject) => {

    //CREATE ARRAY (SERVER)
    var array = new Array();

    mainOptions.request.get({
      url: certainOptions.urlToContentJson
    }, function(error, response, body) {

      //PARSING BODY
      var bodyJS = JSON.parse(body);

      //GETTING LENGTH
      var arrayLength = bodyJS.content.length;

      //ADD TO ARRAY
      for (var i = 0; i < arrayLength; i++) {
        var id = bodyJS.content[i];
        array.push(id);
      }
      resolve (array);
    });
  });
};



// function getRandomPonyFooArticle() {
//   return new Promise((resolve, reject) => {
//     request('https://ponyfoo.com/articles/random', (err, res, body) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(body);
//     });
//   });
// }

module.exports = pullToArray;
