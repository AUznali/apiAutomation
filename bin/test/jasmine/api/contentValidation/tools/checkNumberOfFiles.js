'use strict';


var checkNumberOfFiles = function(lengthFilteredAdminContentArr, lengthServerContentJson){

    describe('Comparing Admin/Server content JSON files', function() {

          it('Number of content files should be same', function() {
            since('NUMBER OF THE CONTENT FILES ARE NOT THE SAME FOR ADMIN: ' + lengthFilteredAdminContentArr + ' AND SERVER: ' + lengthServerContentJson).
            expect(lengthFilteredAdminContentArr).toBe(lengthServerContentJson);
          });
        }

        module.exports = checkNumberOfFiles;
