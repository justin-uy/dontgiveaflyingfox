const indexController = require('./controllers/index');

module.exports = (req, res) => {
  switch (req.url) {
    case '/':
      indexController.init(req, res);
      break;
    default:
      res.send('404');
  }
};
