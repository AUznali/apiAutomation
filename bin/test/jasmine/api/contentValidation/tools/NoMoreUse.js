'use strict';


//Pulling data from Api JSON to array. Later will compare data from this array with another one.
var pullToArray = function(mainOptions, certainOptions, endpoint) {

  describe('Trying to find ruight solution', function() {

    //CREATE ARRAY (SERVER)
    var array = new Array();


    // GET ALL ITEMS
    it('Take all content', function(done) {
      mainOptions.request.get({
        url: certainOptions.urlToContentJson
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        // GETTING BODY - JSON FILE
        expect(JSON.parse(body)).not.toBeFalsy();
        //PARSING BODY
        var bodyJS = JSON.parse(body);

        //GETTING LENGTH
        var arrayLength = bodyJS.content.length;

        //ADD TO ARRAY
        for (var i = 0; i < arrayLength; i++) {
          var id = bodyJS.content[i];
          array.push(id);
        }
        //PRINTING
        for (var j = 0; j < arrayLength; j++) {
          //console.log(array[j][endpoint]);
        }
        return array;
        done();
      });
    });
  });
}

module.exports = pullToArray;
