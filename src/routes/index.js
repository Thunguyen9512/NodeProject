/* route --> index.js */

const newsRouter = require("./news");
const siteRouter = require("./site")

function routers(app) {
    
  app.use("/news", newsRouter);
  app.use("/", siteRouter);

  //post method
  app.post("/search", (req, res) => {
    console.log("data", req.body);
    res.send("");
  });
}

module.exports = routers;
