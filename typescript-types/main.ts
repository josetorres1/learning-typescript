import double, { triple } from "./import"

let a = 2
console.log(a)

let b = double(a)
console.log(b)

let c = triple(a)
console.log(c)

////////////

let phone: number
phone = 1
phone = 4233432432

//Inferido
let phoneNumber = 4233432432
//phoneNumber = false  error

let hex: number = 0xf00d
let binary: number = 0b010111

let octal: number = 0o12312

// bollean

let isPro: boolean
isPro = true

// Inferido
let isUserPro = false
// isUserPro = 12321 // error

//strings
let username: string = "jose torres"
username = "jose"

//template string
let salute: string = `
    Hola, soy ${username} 
        y soy ${isUserPro}`
console.log(salute)
