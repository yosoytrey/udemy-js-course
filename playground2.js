
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);


function retirement(retirementAge) {
    let a = ' years left until retirement.'

    return function(yearOfBirth) {
        let age = 2020 - yearOfBirth
        console.log((retirementAge - age) + a)
    }
}


