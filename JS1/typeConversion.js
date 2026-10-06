let score =22
let R_name= "2345str"
// console.log(typeof score);
// console.log(typeof(score));

let R_nameInNumber=Number(R_name)
let valueInString = String(score);

console.log(typeof score, score);
console.log(typeof R_name, R_name);
console.log(typeof R_nameInNumber, R_nameInNumber);
console.log(typeof valueInString, valueInString);
console.log(Number("22"));
console.log(Number("22abc"));
console.log(Number(""));
console.log(Number(" "));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

//NaN is Not a number but when we checked NaN's datatype it said number so JS is not a good fucker;
// Conversions can be done in many datatypes ie> Number, String, Boolean

console.log(true,+true,Boolean(""),+"")