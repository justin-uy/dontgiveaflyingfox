const janeSiteRoutes = require('./sites/dontgiveaflyingfox.com/jane/routes');
const justinSiteRoutes = require('./sites/dontgiveaflyingfox.com/justin/routes');
const wwwSiteRoutes = require('./sites/dontgiveaflyingfox.com/www/routes');

module.exports = (app) => {
  app.get('*', (req, res) => {
    const hostnameComponents = req.get('host').split('.');

    // currently only support one subdomain. must update routing logic once
    // we want to support routing for different domain names
    switch (hostnameComponents[0]) {
      case 'justin':
        justinSiteRoutes(req, res);
        break;
      case 'jane':
        janeSiteRoutes(req, res);
        break;
      case 'www':
        wwwSiteRoutes(req, res);
        break;
      default:
        res.send('404');
        break;
    }
  });
};
