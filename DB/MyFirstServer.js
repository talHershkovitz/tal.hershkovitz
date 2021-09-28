


// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/html' });
//     res.end('Hello World!');
// }).listen(8080);

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql = require('./db')
// parse requests of contenttype: application/json
app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true
}));
// simple route
app.get("/", (req, res) => {
res.json({ message: "Welcome to CV DB" });
});
// set port, listen for requests
app.listen(3000, () => {
console.log("Server is running on port 3000."
);
});

// Create a route for getting all inquiries
app.get("/inquiries", function(req, res){
    sql.query("SELECT * FROM inquiries", (err, mysqlres) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all inquiries: " + err});
    return;
    }
    console.log("got all inquiries...");
    res.send(mysqlres);
    return;
    });
    });

