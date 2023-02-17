const palindromes = function (str) {

let lowerStr  = str.toLowerCase();    

let cleanStr = lowerStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "");

console.log(cleanStr);


let revStr = "";
for (let i = cleanStr.length - 1; i >= 0; i--){
    revStr += cleanStr[i];
}

const isPalindrome = revStr.localeCompare(cleanStr);

if (isPalindrome == 0){
    return true;
}else{
    return false;
}



};

// Do not edit below this line
module.exports = palindromes;
