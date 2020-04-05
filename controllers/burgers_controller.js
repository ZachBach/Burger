var express = require("express");
var burger = require("../models/burger.js")

var router = express.Router();

// Get Request

router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var burgerData = { burgers: data};
        res.render("index", burgerData);
    });
});

// Create/post Request

router.post("/insertOne", function(req, res){
    burger.insertOne(req.body.burger_name, function (vals){
        res.redirect("/")
    });
});

// Update/post Request

router.post("/updateOne/:id", function (req, res) {
    var getCondition = "id = " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, getCondition, function () {
        res.redirect("/");
    });
});

//Delete/post Request
router.post("/deleteOne/:id", function (req, res) {
    var getCondition = "id = " + req.params.id;
    burger.deleteOne(getCondition, function () {
        res.redirect("/");
    });
});

module.exports = router;
