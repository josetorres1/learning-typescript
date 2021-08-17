// There are two way to indicate type array in ts
/* 
    1. Using :TYPE[]
    2. using Array<TYPE>
 */
//Explicit
let users: string[]
users = ["luixsavilex", "chepetor", "username"]

// users =[1, false, "test"]

// Implicit
let otherUsers = ["luixsavilex", "chepetor", "username"]
// otherUsers =[1, false, "test"]

//Array<TYPE>
let pictureTitles: Array<string>
pictureTitles = ["Favorite Sunset", "Vacation Time", "Landscape"]

// Accediendo a los valores en un Array
console.log("first user", users[0])
console.log("fist title", pictureTitles[0])

// Propiedades en Array
console.log("users.length", users.length)

// Uso de funciones en Arrays
users.push("aPlatziUser")
users.sort()
console.log("users", users)
