let mySym= Symbol("key22")


const JsUser1={
    name: "Black",
    "full Name": "Sirius Black",
    [mySym]: "let it be",
    age: 32,
    location: "Hogwartz",
    email: "buckbeak@email.service",
    isLoggedIn: true,
    lastLoginDay: ["Monday","Friday"]
}

//console.log(JsUser1.email)
//console.log(JsUser1["email"])
//console.log(JsUser1["full Name"],JsUser1["location"])
//console.log(typeof JsUser1[mySym])

JsUser1["full Name"]= "padfoot"
//Object.freeze(JsUser1)
JsUser1["full Name"]= "padfoot_lunarWolf"

//console.log(JsUser1)

JsUser1.greeting= function(){
    console.log("Hola, los siento Wilson")
}
JsUser1.greetingTwo= function(){
    console.log(`Hola, los siento ${this.name}`)
}

console.log(JsUser1.greeting())
console.log(JsUser1.greetingTwo())