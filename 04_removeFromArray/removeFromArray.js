const removeFromArray = function() {
    
    const args = [...arguments];
    console.log(`Original Args ${args}`);
    let primeArr = args[0];
    console.log(`Array to be changed: ${primeArr}`);
    args.shift();
    console.log(`Values to remove: ${args}`);
    let finalArr = primeArr.filter(el => !args.includes(el));
    console.log(`Final Array ${finalArr}`);

    
  

    return finalArr;
    
}

// Do not edit below this line
module.exports = removeFromArray;
