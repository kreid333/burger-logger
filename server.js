const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen((err) => {
    if (err) throw err;
    console.log(`App listening at http://localhost:${PORT}`);
})