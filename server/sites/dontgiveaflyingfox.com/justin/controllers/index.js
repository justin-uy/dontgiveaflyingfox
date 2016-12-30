const React = require('react');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const HomePage = require(path.join(path.dirname(require.main.filename), '../shared/components/justin/HomePage.react'));

module.exports = {
  init: (req, res) => {
    res.render('base.ejs', {
      title: 'justin | dontgiveaflyingfox',
      mountScript: '/js/dest/dontgiveaflyingfox.com/justin/indexBundle.js',
      pageContent: ReactDOMServer.renderToString(<HomePage />)
    });
  }
};
