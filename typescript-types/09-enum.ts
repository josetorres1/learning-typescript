//enum type
// const Landscape = 0
// const portrait = 1
// const square = 2
// const panorama = 3

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape
console.log("landscape", landscape)
console.log("landscape", PhotoOrientation[landscape])

enum pictureOrientation {
    Landscape = 10,
    Portrait,
}

enum pictureOrientation {
    Square = 20,
    Panorama,
}

console.log("Square", pictureOrientation.Square)
console.log("pictureOrientation", pictureOrientation)
enum Country {
    Bolivia = "bol",
    Colombia = "col",
    Mexico = "mex",
    EEUU = "usa",
}

const country: Country = Country.Colombia
console.log("Country", country)
