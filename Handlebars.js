// setup our requires
const HTTP_PORT = 8080;
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

// Register handlebars as the rendering engine for views
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/viewData", function(req, res) {

    var someData = {
        name: "John",
        age: 23,
        occupation: "developer",
        company: "Scotiabank"
    };

    res.render('viewData', {
        data: someData
    });

});

// start the server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);