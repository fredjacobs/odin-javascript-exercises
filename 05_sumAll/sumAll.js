const sumAll = function() {

    console.log(typeof arguments[0])
    console.log(typeof arguments[1])

    if ( typeof arguments[0] == 'string' || typeof arguments[1] == 'string' 
    || Math.sign(arguments[0]) == -1 || Math.sign(arguments[1]) == -1
     || typeof arguments[0] == 'object' || typeof arguments[1] == 'object' ){
        return 'ERROR';
    }

    let num1 = null;
    let num2 = null;
    let total = null;

    if(arguments[1] > arguments[0]){
        num1 = arguments[0];
        num2 = arguments[1];
    }else{
        num1 = arguments[1];
        num2 = arguments[0];
    }
    console.log(`NUM1 : ${num1}  NUM2: ${num2}`);

    
    
    for(let i = num1; i <= num2; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
