/* src --> index */

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const routers = require("./routes");
const methodOverride = require("method-override");

const db = require("./config/db");

// connect db

db.connect();

//overide method because expressjs do not accept PUT, PATCH method
app.use(methodOverride("_method"));
//middleware

app.use(express.urlencoded()); //to req.body in POST method
app.use(express.json()); // when work with: XML, fetch, axios

//static file
app.use(express.static(path.join(__dirname, "/public")));

//template engine
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resource/views"));

//router
routers(app);

//
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
