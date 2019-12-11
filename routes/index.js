let express = require("express");
let router = express.Router();
let db = require("../database/index.js");

/* GET home page. */
router.get(
  "http://node-express-env.bcgwijp6ik.us-east-2.elasticbeanstalk.com/",
  (req, res, next) => {
    // res.render("index", { title: "Express" });
    console.log("get");
    res.send("oops");
    res.end();
  }
);

// router.get(`/:id`, (req, res) => {
//   let id = req.params.id;
//   db.getProduct(id, (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(results);
//     }
//   });
// });

module.exports = router;
