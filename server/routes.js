module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send("Welcome to dontgiveaflyingfox.com! Site is under construction and will be finished some day.");
  });
  // 404
  app.get('*', (req, res) => {
    res.send("404")
  });
};
