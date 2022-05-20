var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called.");
    var content = "empty";

    exec()
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliSeconds);
    }
    
    sleep(10000);
    return "Hello start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello upload";
}

exports.start = start;
exports.upload = upload;