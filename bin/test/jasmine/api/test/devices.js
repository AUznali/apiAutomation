'use strict';


var devices = function(generalOptions, specificOptions) {

  describe('API tests for: ' + specificOptions.name + ' -', function() {

    beforeAll(function(done) {
      // Making POST request to DB to delete our test devices BEFORE the tests
      var query = "delete from devices where device_model='TESTING_MODEL'";
      var dBpostData = {
        query: query
      };
      var urlToDB = generalOptions.baseUrl + "/contentManagement/dbQuery";
      generalOptions.request.post({
        url: urlToDB,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: dBpostData
      }, function(error, response, body) {
        //console.log(JSON.stringify(body));
        //console.log(" ++++++ BEFORE TESTS: ALL TEST DEVICES ARE DELETED ++++++ ");
        done();
      });
    });


    afterAll(function(done) {
      // Making POST request to DB to delete our test devices AFTER the tests
      var query = "delete from devices where device_model='TESTING_MODEL'";
      var dBpostData = {
        query: query
      };
      var urlToDB = generalOptions.baseUrl + "/contentManagement/dbQuery";
      generalOptions.request.post({
        url: urlToDB,
        headers: {
          'content-type': 'application/json'
        },
        json: true,
        body: dBpostData
      }, function(error, response, body) {
        //console.log(JSON.stringify(body));
        //console.log(" ++++++ AFTER TESTS: ALL TEST DEVICES ARE DELETED ++++++ ");
        done();
      });
    });

    var url = generalOptions.baseUrl + specificOptions.route;

    // Making GET requet to get all devices
    it('GET requet for: ' + specificOptions.name + '. Expect: status code 200 & body not to Be Falsy', function(done) {
      generalOptions.request.get({
        url: url
      }, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body)).not.toBeFalsy();
        done();
      });
    });



    var typeChange = function(id, type, discovery_type) {


      it('Creating device with type: ' + type + ' and id: ' + id, function(done) {
        var postType = specificOptions.postJSON1;
        postType.devices[0].id = id;
        postType.devices[0].type = type;
        // console.log(postType);
        generalOptions.request.post({
          url: url,
          headers: {
            'content-type': 'application/json'
          },
          json: true,
          body: postType
        }, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          expect(body).not.toBeFalsy();
          done();
        });
      });



      it('Validating discovery_type: ' + discovery_type + ' for device type: ' + type + ' and check, that status = offline by default', function(done) {
        var deviceUrl = url + id;
        //console.log(deviceUrl);
        generalOptions.request.get({
          url: deviceUrl
        }, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          var jsonBody = JSON.parse(body);
          expect(jsonBody).not.toBeFalsy();
          expect(jsonBody.discovery_type).toBe(discovery_type);
          expect(jsonBody.status).toBe("offline");
          done();
        });
      });
    }


    typeChange('111', 'speaker', 'static');
    typeChange('222', 'tv', 'dynamic')
    typeChange('333', 'usb', 'dynamic');
    typeChange('444', 'soundbar', 'cec');
    typeChange('555', 'anyOtherDevice', 'dynamic');

  });
};

module.exports = devices;
