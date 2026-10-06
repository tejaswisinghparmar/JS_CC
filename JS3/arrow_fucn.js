const addTwo = (num1,num2) => {
    return num1+num2
}

// console.log(addTwo(5,90))


// const AddTwo =(num1,num2) => {
//     console.log(num1+num2)
//     return AddTwo(num1+num2,num1)
// }

// AddTwo(2,3)

const newFUN = (new1,new2) =>  new1*new2

console.log(newFUN(4,8))

let obj= {
    name: "tejaswi",

    saymyname: function(){
        console.log(this.name)
    },

    saymyname2:  () => console.log(this.name)
}

obj.saymyname()
obj.saymyname2()