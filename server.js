var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = getRequestPathname(request);
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    }

    function getRequestPathname(request) {
        var baseURL = 'http://' + request.headers.host + '/';
        return new URL(request.url, baseURL).pathname;
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;