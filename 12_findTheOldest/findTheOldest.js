const findTheOldest = function(people) {

    let age = 0;
    let oldestPerson = {};

    people.forEach(person => {

        if(!person.yearOfDeath){
            let curYear = new Date();
            person.yearOfDeath = curYear.getFullYear();
        }

       let personAge = person.yearOfDeath - person.yearOfBirth;
       
       if (personAge > age){
        oldestName = person.name;
        age = personAge
        oldestPerson = person;
        console.log(age);
       }
        
    });
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
