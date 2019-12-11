var express = require("express");
var router = express.Router();
// var db = require("../database/index");

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log(db);
  res.render("index", { title: "Express" });
});

module.exports = router;
