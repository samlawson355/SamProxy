let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  // res.render("index", { title: "Express" });
  res.send("oops");
  res.end();
});

module.exports = router;
