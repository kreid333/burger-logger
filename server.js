// DEFINING VARIABLES
const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");
const burger = require("./models/burger");

const app = express();

const PORT = process.env.PORT || 8080;

// MIDDLEWARE// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ==========TEST=============

app.get("/", (req, res) => {
    burger.selectAll(function(data) {
        res.render("index", {burger: data});
    })
})

// ==========TEST=============

// TURNING ON EXPRESS SERVER AND MYSQL CONNECTION
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`App listening at http://localhost:${PORT}`);
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected...");
})