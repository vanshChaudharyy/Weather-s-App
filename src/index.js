const path = require("path");
const hbs = require("hbs");
// const requests = require("requests");
const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
// console.log(path.join(__dirname,"../public/css"))
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
