const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

/** Serve Angular Frontend */
app.use(express.static(path.join(__dirname, 'dist', "emiway")));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "emiway", "index.html"));
});

http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});
  