var express = require("express");
var router = express.Router();
var db = require("../database/index");

/* GET home page. */
router.get(`/:id`, function(req, res, next) {
  let id = req.params.id;
  db.getProduct(id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

// router.get("/", function(req, res, next) {
//   console.log("lll");
//   res.render("index", { title: "Express" });
// });

module.exports = router;
