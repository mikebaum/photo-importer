var spawn = require('child_process').spawn;

function logResult(process) {
    process.stdout.on('data', function (data) {    // register one or more handlers
        console.log('stdout: ' + data);
    });

    process.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    process.on('exit', function (code) {
        console.log('child process exited with code ' + code);
    });
}
var ll = function() {
    logResult(spawn("ls", ['-l']));
};

var ssh = function() {
    logResult(spawn("ssh", ['mike@10.0.4.3', "'echo $PATH'"]));
};

module.exports.ll = ll;
module.exports.ssh = ssh;
