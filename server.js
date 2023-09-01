// install body-parser
/*
const http = require('http');
http.createServer(function(req, res) {
      res.end("hello world saroj")
}).listen(4200); 
*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('this is home page')
});

app.get('/services', function (req, res) {
    res.send('this is service page')
});


app.post("/login", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if (username === "javascript" && password === "react") {
        res.send("login successfull")
    } else {
        res.send("login failed");
    }
});

app.get('/players', function (req, res) {
    const p = ["a", "b", "c"];
    res.send(p)
});

app.listen(5000, () => {
    console.log("server started on port 5000")
});
