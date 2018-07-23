$(function(){
    // Returns blocks in JSON format
    $.get('/blocks', appendToList);
    // Creates an empty array
    function appendToList(blocks) {
        var list = [];
        for (var i in blocks) {
            list.push($('<li>', { text: blocks[i] }));
        }
        // Append list to the page
        $('.block-list').append(list);
    }
});