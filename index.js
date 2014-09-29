module.exports = function() {

  return function(req, res, next) {
    var start = process.hrtime();
    var stream = process.stdout;

    var method = req.method;
    var url = req.url;

    stream.write('\nRequest started\n');

    res.on('finish', function() {
      var diff = process.hrtime(start);
      var duration = diff[0] * 1e3 + diff[1] * 1e-6

      stream.write('\nRequest ' + method  + ' to "' + url + '"\nprocessed in ' +
                   duration.toFixed(3) + ' milliseconds \n');
    });

    next();
  }
}

