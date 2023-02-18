const fibonacci = function(getNum) {

    const num = Number(getNum);

    if (Math.sign(num) == -1  ){
        return "OOPS";
    }

let result = [0,1];

for (let i = 2; i <= 30; i++){
    result[i] = result[i - 2] + result[i - 1];
}

console.log(result);

const answer = result[num];
return answer;

};

// Do not edit below this line
module.exports = fibonacci;
