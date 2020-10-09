// DEFINING VARIABLES
const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        res.render("index", {burger: data});
    })
})

router.put("/api/burgers/:id", (req, res) => {
    burger.updateOne(req.params.id, function(data) {
        res.end();
    })
})

router.post("/api/burgers/", (req, res) => {
    burger.insertOne(req.body.burger_name, function(data){
        res.end();
    })
})

module.exports = router;