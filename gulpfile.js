'use strict';

(function() {
  var task = process.argv[2];
  var path = __dirname + '/build/gulp/task/' + task;

  var paths = [
    __dirname + '/build/gulp/scheme/' + task,
    __dirname + '/build/gulp/task/' + task,
    __dirname + '/build/gulp/gulp'
  ];

  for(var i = 0, length = paths.length; i < length; ++i) {
    path = paths[i];

    if(require('fs').existsSync(path + '.js')) {
      require(path);
      break;
    }
  }
})();
