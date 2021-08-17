let nullVariable: null
nullVariable = null
//nullVariable = 2 // error

let otherVariable = null
otherVariable = "1"

console.log("nullVariable", nullVariable)
console.log("otherVariable", otherVariable)

let undefinedVariable: undefined
undefinedVariable = undefined
//undefinedVariable = 123

let otherUndefined = undefined
otherUndefined = "213"

console.log("undefinedVariable", undefinedVariable)
console.log("otherUndefined", otherUndefined)

// Testing subtypes null and undefined with primative types
let albumName: string
// albumName = null
// albumName = undefined

/* strictNullChecks valida el use de null in variables  */
