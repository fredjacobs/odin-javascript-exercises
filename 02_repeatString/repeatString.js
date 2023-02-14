const repeatString = function(word,n) {

    let str = '';

    if(Math.sign(n) === -1){
        return str = 'ERROR';
    }
    for(let i = 1; i <= n; i++){

        
        str += word;
        
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
