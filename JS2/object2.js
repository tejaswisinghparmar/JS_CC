const obj= {
    name: "Parker",
    stars: 4,
    reviews: 7002,
    price: 270,
    MRP: 285,
    Discount: 5,
    "Deal of the day": true 
};

obj.color="Black";

//console.table(obj)

//console.log(obj.stars>4 ? "good" : "Not good") 

const obj1={
    1:'a',
    2:'b',
    3:'c'
}
const obj2={
    4:'a',
    5:'d',
    6:'e'
}

const obj3={
    ...obj1,
    ...obj2
}
console.table(obj3)

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

console.log(obj.hasOwnProperty('name'))

const {"Deal of the day" : sale} =obj
console.log(sale)

