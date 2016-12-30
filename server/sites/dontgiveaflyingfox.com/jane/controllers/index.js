const React = require('react');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const HomePage = require(path.join(path.dirname(require.main.filename), '../shared/components/jane/HomePage.react'));

module.exports = {
  init: (req, res) => {
    res.render('base.ejs', {
      title: 'jane | dontgiveaflyingfox',
      mountScript: '/js/dest/dontgiveaflyingfox.com/jane/indexBundle.js',
      pageContent: ReactDOMServer.renderToString(<HomePage />)
    });
  }
};
