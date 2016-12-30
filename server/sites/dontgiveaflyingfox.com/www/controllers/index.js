const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ViewContainer = require('../views/index/ViewContainer.react');

module.exports = {
  init: (req, res) => {
    res.render('base.ejs', {
      title: 'dontgiveaflyingfox',
      pageContent: ReactDOMServer.renderToString(<ViewContainer />)
    });
  }
};
