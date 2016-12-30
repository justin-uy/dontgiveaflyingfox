var fs = require('fs');
var browserify = require('browserify');
browserify('./client/dontgiveaflyingfox.com/www/indexMount.js')
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .pipe(fs.createWriteStream('./static/js/dest/indexBundle.js'));
