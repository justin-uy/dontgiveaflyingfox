module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send("welcome to justintrigue.us! Site is under construction and is we be finished some day.");
  });
  // 404
  app.get('*', (req, res) => {
    res.send("404")
  });
};
