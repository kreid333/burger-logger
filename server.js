const express = require("express");
// DEFINING VARIABLES
const exphbs = require("express-handlebars");
const connection = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 8080;






// TURNING ON EXPRESS SERVER AND MYSQL CONNECTION
app.listen((err) => {
    if (err) throw err;
    console.log(`App listening at http://localhost:${PORT}`);
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected...");
})