const React = require('react');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const ViewContainer = require(path.join(path.dirname(require.main.filename), '../shared/components/ViewContainer.react'));

module.exports = {
  init: (req, res) => {
    res.render('base.ejs', {
      title: 'dontgiveaflyingfox',
      mountScript: '/js/dest/indexBundle.js',
      pageContent: ReactDOMServer.renderToString(<ViewContainer />)
    });
  }
};
