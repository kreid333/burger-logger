// DEFINING VARIABLES
const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 8080;

// MIDDLEWARE// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// TURNING ON EXPRESS SERVER AND MYSQL CONNECTION
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`App listening at http://localhost:${PORT}`);
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected...");
})