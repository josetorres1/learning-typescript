//Type: object
//Advice, you don´t need this type

let user: object
user = {} //Object
user = {
    id: 1,
    username: "joseT",
    firstName: "Jose",
    isPro: true,
}

console.log("user", user)
// Object vs object (Class JS vs Typescript Type)

//console.log("username", user.username) //Property 'username' does not exist on type 'object'

const myObj = {
    id: 1,
    username: "joseT",
    firstName: "Jose",
    isPro: true,
}
const isInstance = myObj instanceof Object
console.log("isInstance", isInstance)
