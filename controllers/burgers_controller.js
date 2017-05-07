var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/", function(req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, 0],
    function() {
      res.redirect("/");
    }
  );
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: 1
    },
    condition,
    function() {
      res.redirect("/");
    }
  );
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
