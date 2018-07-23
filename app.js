var express = require('express');

var app = express();
var logger = require('./logger');
app.use(logger);
app.get('/', function(request, response){
    // __dirname is the name of the directory the currently executing script resides in
    response.sendFile(__dirname + '/public/index.html');
});

// Static middleware serving files from the public folder
app.use(express.static('public'));

app.get('/blocks', function(request, response) {
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks);
});

// Port 3000 listening
app.listen(3000);