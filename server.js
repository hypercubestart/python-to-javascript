const express = require('express');
const http = require('http');
const routes = require('./routes.js');

const bodyParser = require('body-parser');
const helmet = require('helmet'); //security

const app = express();
app.set('view engine', 'pug')

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 3000;

routes(app);

var server = http.createServer(app).listen(port, function() {
    console.log(`now listening on port ${port}`);
});

