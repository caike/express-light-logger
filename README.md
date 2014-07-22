# Express Light Logger

Basic logger for Express.

Usage:

```javascript
var express = require('express');
var app = express();

var logger = require('light-logger');

app.use(logger());

app.get('/', function(req, res) {

  setTimeout(function() {
    res.write('Responding in 5 seconds');
    res.end();
  }, 5000);

}).listen(8080, function() {
  console.log('Listening!');
});
```

Prints:

> Request started

> Response sent in 5002.816 milliseconds
