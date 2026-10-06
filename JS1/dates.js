let myDate =new Date

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString("en-IN"))

console.log(typeof myDate) // Object

let myCreatedDate= new Date(2008, 1, 20, 13, 34, 59)
console.log(myCreatedDate.toLocaleString())

let myCreatedDate1 = new Date("2005-02-22");
console.log(myCreatedDate1.toDateString());

// myCreatedDate.toLocaleString('default', {
//     weekday: "long",
//     timeZone: "IN"
// })