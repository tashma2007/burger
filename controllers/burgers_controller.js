var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (burger_data) {
    var hbsObject = {
      burgers: burger_data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//route to add burger
router.post("/api/burgers", function (req, res) {
  burger.insertOne([
    "burger_name"
  ], [
      req.body.name
    ], function (result) {
      res.json({ id: result.insertId });
    });
});

//route to update burger condition
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;