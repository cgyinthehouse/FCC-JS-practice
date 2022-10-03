/*
Valid US phone number format examples:
    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
*/

function telephoneCheck(str){
    let checker = /^(1\s?)?(\d{3}[-\s]?){2}\d{4}\b|(^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4})/;
    return checker.test(str);
};


console.log(telephoneCheck('555-555-5555'));
console.log(telephoneCheck('(555)555-5555'));
console.log(telephoneCheck('(555) 555-5555'));
console.log(telephoneCheck('555 555 5555'));
console.log(telephoneCheck('5555555555'));
console.log(telephoneCheck('1 555 555 5555'));
console.log(telephoneCheck('(6054756961)'));
console.log(telephoneCheck('27576227382'));
