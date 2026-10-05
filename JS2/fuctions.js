function addTwo(num1, num2){
    return num1+num2
}

let result= addTwo(3,2)

// console.log(result)
// console.log(addTwo(8, 9))


function loginUserMessage(Username="Guest "){
    if(Username){
        return `${Username} just logged in...`
    }
    else{
        console.log("Please enter a Username: ")
        console.log(loginUserMessage("Sirius"))
        return 
    }
}

console.log(loginUserMessage())


const Obj22= {
    username: "Black",
    age: "31"
}

function userage(anyobject){
    console.log(`${anyobject.username} is of ${anyobject.age} years.`)
}

userage({
    username: "fuck",
    age:"u"
})
console.log(userage(Obj22));
