const reverseString = function(word) {

    const getArray = word.split('');
    getArray.reverse();
    const reversString = getArray.join('');
    return reversString;
};

// Do not edit below this line
module.exports = reverseString;
