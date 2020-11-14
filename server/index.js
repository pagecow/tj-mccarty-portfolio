var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);



// const express = require("express"),
//   app = express(),
//   cors = require("cors"),
//   SERVER_PORT = "8080";

// app.use(express.json());
// app.use(cors());

// app.use('/', express.static('app', {index: "index.html"}));

// // app.use( express.static( `${__dirname}/../index.html` ) );

// app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}.`));