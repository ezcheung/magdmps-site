var express = require('express');
var path = require('path');
var app = express();
var browserify = require('browserify-middleware');
app.use(express.static(path.join(__dirname, "../client/public")));

app.get('/bundle.js',
 browserify('./client/main.js', {
    transform: [ [ require('babelify'), { presets: ["es2015", "react"] } ] ]
  })
);

app.get('*',function (req, res) {
  res.redirect('/');
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Listening on localhost:" + port);