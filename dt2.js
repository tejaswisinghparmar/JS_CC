//PRIMITIVE DATATYPES
// 7 types: String, Bool, Number, null, undefined, symbol, BigInt

//JavaScript is a dynamically typed language 


const outsideTemp= null
const id = Symbol('123')
const a_id= Symbol('123')

console.log(id === a_id)//asks if they are absolutly the same 
console.log(id == a_id)//asks if they are same after type conversion

//Non-Primitive (Reference )

//array ,Objects ,Functions

const cakes =["butterscotch", "red Velvet", "dark forest"]//array

let myObject={
    name: "BLACK",
    rank: "Elder",
}// an Object

const myFunction=function(){
    console.log("Hello f*ck")
}

console.log(typeof outsideTemp)
console.log(typeof id)
console.log(typeof cakes)
console.log(typeof myObject)
console.log(myFunction, typeof myFunction)
myFunction()
//