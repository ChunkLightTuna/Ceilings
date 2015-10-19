var express = require('express');

//file uploads
var multer = require('multer');
var path = require('path');
var upload = multer({
  dest: 'pdf/',
  fileFilter: function (req, file, cb) {
    if(path.extname(file.originalname) !== '.pdf') {
      return cb(new Error('PDF u gieb?'));
    }
      cb(null, true);
  },
  //15MB size limit
  limits: { fileSize: 15 * 1024 * 1024 }

});

//for our conversions
var spawn = require('child_process').spawn;

/*
//ssl
var https = require('https');
var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('keys/node-key.pem'),
  cert: fs.readFileSync('keys/node-cert.pem')
};
*/

var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.get('/',function(req,res) {
  res.render('upload', {title: 'upload'});
});

app.post('/upload', upload.single('file'), function(req,res,next) {
  script = spawn('./convert.sh', [req.file.filename])

  script.stdout.on('data', function (data) {    // register one or more handlers
    console.log('stdout: ' + data);
  });

  script.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  script.on('exit', function (code) {
    console.log('child process exited with code ' + code);
  });

  res.render('edit', {title: 'edit'});
});

app.use(express.static('static'));

/*
// Handle 404
app.use(function(req, res) {
  res.status(404).send("These aren't the droids you're looking for.");
});

// Handle 500
app.use(function(error, req, res, next) {
  res.status(500).send("These aren't the droids you're looking for.");
});
*/

//https.createServer(options, app).listen(8080);
//http.createServer(app).listen(8080);
var server = app.listen(8080, function() {
  var port = server.address().port;

  console.log('Listening on port %s', port);
});
