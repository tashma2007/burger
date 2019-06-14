var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(burger_data) {
      var hbsObject = {
        burgers: burger_data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/burgers/insertOne", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function() {
      res.redirect("/burgers");
    });
  });
  
  router.put("/burgers/updateOne/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: true
    }, condition, function(response) {
        res.sjson(response);
      })
    });


module.exports = router;