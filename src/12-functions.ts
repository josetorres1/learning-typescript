type squareSize = "100*100" | "500*500" | "1000*1000"

/* 
for optional parameters in a function  we add question mark   after the variable name and then the colon (:)
after parameter we can indicate the type of return
*/
function createPicture(title: string, date: string, size?: squareSize) {
    console.log("Create a picture using:", title, date, size)
}

createPicture("Test", "2021-08-19", "500*500")

createPicture("Platzi", "2020-03-10")

const createPic = (title: string, date: string, size?: squareSize): object => ({
    title,
    date,
    size,
})

const pic = createPic("Test", "2021-08-19")
console.log("pic", pic)
