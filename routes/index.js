let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  // res.render("index", { title: "Express" });
  res.send(req);
  res.end();
});

module.exports = router;
