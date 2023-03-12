var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From irwan" } \n');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }\n');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! \n" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
