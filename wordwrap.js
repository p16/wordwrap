var wordwrap = function(word, col) {

    if(word.length < col) {
        return  word;
    }

    return word.replace(' ', '\n', word);

}

module.exports = wordwrap;
