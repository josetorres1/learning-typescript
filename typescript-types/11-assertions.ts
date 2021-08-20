export {}

let username: any

username = "JoseT"
username = "joe"

let message: string = (<string>username).length > 5 ? `Welcome ${username}` : "Username too short "
console.log("message", message)

let usernameWithId: any = "joseT 12021"

username = (<string>usernameWithId).split(" ")[0]
let id = (<string>usernameWithId).split(" ")[1]
console.log("username", username)
console.log("id", id)

//Sintax as

message = (username as string).length > 5 ? `Welcome ${username}` : "Username too short "

let helloUser: any
helloUser = "hello paparazzi"
username = (helloUser as string).substring(6)
console.log("username", username)
