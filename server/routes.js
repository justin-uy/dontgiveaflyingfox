module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send("Welcome to justintrigue.us! Site is under construction and will be finished some day.");
  });
  // 404
  app.get('*', (req, res) => {
    res.send("404")
  });
};
