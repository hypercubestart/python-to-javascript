'use strict';
const controllers = require('./controllers');

module.exports = function(app) {
    // ping endpoint
    app.get("/test", function(req, res) {
        res.json("im working!");
    });

    app.get("/", function(req, res) {
        res.render('home', { });
    });

    app.route("/convert").post(controllers.convert); 
}