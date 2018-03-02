const Promise = require("bluebird");
const cmd = require('node-cmd');
const fs = Promise.promisifyAll(require("fs"));
const path = require('path');

var cmdGetAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd });

var runTranscrypt = function(filepath) {
    return cmdGetAsync('transcrypt -b ' + filepath);
}

exports.convert = function(req, res) {
    var filename = req.body.name;
    var filepath = './transcrypt/' + filename + '.py';

    var scriptname = filename + '.min.js'; //
    
    fs.writeFileAsync(filepath, req.body.python).then(function() { 
        return runTranscrypt(filepath);
    }).then(function() {
        res.render(req.body.html, {script: scriptpath});
    }).catch(function(err) {
        res.json(err);
        console.error(err);
    })
}

