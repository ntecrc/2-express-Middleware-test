module.exports = function(request, response, next) {
    // Plus sign converts date Object to milliseconds 
    var start = +new Date();
    var stream = process.stdout;
    var url = request.url;
    var method = request.method;

    response.on('finish', function() {
        var duration = +new Date() - start;
        var message = method + ' to ' + url +
            '\ntook ' + duration + ' ms \n\n';
        stream.write(message); // Prints the log message
    });


    next();
}