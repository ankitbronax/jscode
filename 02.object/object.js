const mySym=Symbol("charles olveria")

const JsUser={
    callme:"ankit",
    "full name":"ankit singh",
    age:18,
    city:"ranchi",
    email:"ankit178@bronax.com",
    mybest:"workout",
    [mySym]:"charles olveria bronax",
}
//console.log(JsUser.email)
//console.log(JsUser["mybest"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

//to change any value
JsUser.email="ankit178@asus.com",
//console.log(JsUser["email"])
//to lock any value
//Object.freeze(JsUser)
JsUser.city="patna"
//console.log(JsUser["city"])

JsUser.greeting=function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting())

JsUser.greeting2=function(){
    console.log(`Hello Js User ${this.callme}`)
}
console.log(JsUser.greeting2())