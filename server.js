const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
// const formidable = require('formidable');
const fs = require("fs");

app.use(express.static('static'));
app.use(express.static('static/cwiczenia'));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/static/index.html"));

});

app.post("/handleForm", function (req, res) {

    console.log(req.body);

    const directories = fs.readdirSync(path.join(__dirname + "/static/cwiczenia"));
    console.log(directories);

    let files = []
    for (let i = 0; i < directories.length; i++) {
        const file = fs.readdirSync(path.join(__dirname + "/static/cwiczenia/" + directories[i]));
        console.log(file);
        files.push([directories[i], file]);
    };

    console.log(files);
    res.send(files);
});



app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
});