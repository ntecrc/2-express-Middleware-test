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

var blocks = {
    'Fixed': 'Fastened securely in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
};


app.get('/blocks/:name', function(request, response) {
    var description = blocks[request.params.name]; // Returns undefined when no property is found for a given block name
    if (!description) { // Checks for a the presence of a description to determine the response
        response.status(404).json('No description for ' + request.params.name); // Informative error message
    } else {
        response.json(description); // Defaults to 200 success status code
    }
});
    
//     var blocks = ['Fixed', 'Movable', 'Rotating'];
//     if (request.query.limit >= 0) {
//         response.json(blocks.slice(0, request.query.limit));
//     } else {
//     response.json(blocks);
//     }
// });

// Port 3000 listening
app.listen(3000);

// checkout Morgan for more login solutions: https://github.com/expressjs/morgan