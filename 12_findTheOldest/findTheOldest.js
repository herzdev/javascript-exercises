const findTheOldest = function(peopleArr) {
/*
1   loop through array and object
2   calculate age for first object
3   safe name + age to new object
4   calculate age for second object
5   compare the age to the ages in the object
    if age is older, then replace the name
*/

    const oldestPerson = {
        "name": "",
        "age": 0,
    };

    let age = 0;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    peopleArr.forEach(element => {

        age = element.yearOfDeath - element.yearOfBirth;

        if(isNaN(age)) {
            oldestPerson["name"] = element.name;
            oldestPerson["age"] = currentYear - element.yearOfBirth;
        }
        if(age > oldestPerson.age) {
            oldestPerson["name"] = element.name;
            oldestPerson["age"] = age;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
