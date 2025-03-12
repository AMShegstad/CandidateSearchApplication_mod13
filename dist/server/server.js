import express from 'express';
var app = express();
var PORT = process.env.PORT || 3001;
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
