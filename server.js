var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Job = require('./api/models/apiModel'),
    bodyParser = require('body-parser');

// mongoose instance connection url
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cvAppDB',
    {useMongoClient: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/apiRoute');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('cvApp RESTful Api server started on port: ' + port);