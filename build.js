const fs = require('fs');
const browserify = require('browserify');
const inputBasePath = './client/';

// inputs
[
  'dontgiveaflyingfox.com/www/indexMount.js',
  'dontgiveaflyingfox.com/justin/indexMount.js'
  'dontgiveaflyingfox.com/jane/indexMount.js'
].map((v, i) => {
  const pathSegments = v.split('/');
  let pathToDest = './static/js/dest';
  for (let j = 0; j < pathSegments.length; j++) {
    const segment = pathSegments[j];
    pathToDest += '/' + segment;
    if (!segment.match(/\.js$/)) {
      try {
        fs.mkdirSync(pathToDest);
      } catch (e) {
        // directory creation may fail if the directory already exists
        // fail silently
        if (e.code !== 'EEXIST') {
          console.log(e);
        }
      }
    }
  }

  browserify(inputBasePath + v)
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(fs.createWriteStream('./static/js/dest/' + v.replace('Mount', 'Bundle')));
});
