export {}
/* void. Es lo opuesto de any. Representa la ausencia de valor. Se utiliza cuando las variables no retorna valores */

// Tipo explicito
function showInfo(user: any): any {
    console.log("user info", user.id, user.username, user.firstName)
    // return "2"
}

showInfo({ id: 1, username: "torva", firstName: "Jose" })

//Tipo inferido

function showFormattedInfo(user: any) {
    console.log(`User info:
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `)
}
showFormattedInfo({ id: 1, username: "torva", firstName: "Jose" })

//Tipo void, como tipo de dato en variable Null and undefined son subtipos del tipo void. Solo funcionan cuando el checkeo estricto es false
let unusable: void
// unusable = null
// unusable = undefined

// tipo never

function handleError(code: number, message: string): void {
    //logica de funcion
    //generar mensaje

    throw new Error(`${message}. Code:${code}`)
}
handleError(404, "Not Found")

// try {
//     handleError(404, "Not Found")
// } catch (error) {
//     // console.log(error.message)
// }
