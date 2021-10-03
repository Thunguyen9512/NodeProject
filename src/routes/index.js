/* route --> index.js */

const newsRouter = require("./news");
const siteRouter = require("./site")
const courseRouter = require("./courses")
const meRourer = require("./me")

function routers(app) {

  app.use("/news", newsRouter);
  app.use("/courses", courseRouter)
  app.use("/me", meRourer)
  app.use("/", siteRouter);
  

  //post method
  app.post("/search", (req, res) => {
    res.send("");
  });
}

module.exports = routers;
