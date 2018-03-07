const Promise = require("bluebird");
const cmd = require('node-cmd');
const fs = Promise.promisifyAll(require("fs"));
const path = require('path');

var cmdGetAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd });

var runTranscrypt = function(filepath) {
    return cmdGetAsync('sudo transcrypt -b ' + filepath);
}

exports.convert = function(req, res) {
    var filename = req.body.name;
    var filepath = './transcrypt/' + filename + '.py';

    var scriptname = filename + '.js';
    var scriptpath = './transcrypt/__javascript__/' + scriptname;

    fs.writeFileAsync(filepath, req.body.python).then(function() { 
        return runTranscrypt(filepath);
    }).then(function() {
        return res.sendFile(scriptpath);
    }).catch(function(err) {
        res.json(err);
        console.error(err);
    });
}

