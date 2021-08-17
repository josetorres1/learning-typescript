export {}
let user: [number, string]
user = [1, "JoseT"]
console.log("user", user)
console.log("username", user[1])
console.log("username.length", user[1].length)
console.log("id", user[0])

let userInfo: [number, string, boolean]
userInfo = [2, "luixaviles", true]
console.log("userinfo", userInfo)

// Tuple Array
let array: [number, string][] = []
array.push([1, "luixaviles"])
array.push([2, "paparazzi"])
array.push([3, "platziUser"])

console.log("array", array)
array[2][1] = array[2][1].concat("001")
console.log("array", array)
