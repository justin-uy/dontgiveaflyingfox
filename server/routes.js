module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send("hello, world!")
  });
  // 404
  app.get('*', (req, res) => {
    res.send("404")
  });
};
