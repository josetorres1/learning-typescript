export {}
/* 

*/

//function to show a photograph

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

interface Picture {
    title: string
    date: string
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, 
                date: ${picture.date},
                orientation: ${picture.orientation} ]`)
}

let myPic = {
    title: "My picture",
    date: "2021-08-19",
    orientation: PhotoOrientation.Square,
}

showPicture(myPic)

showPicture({
    title: "My picture 2",
    date: "2021-08-19",
    orientation: PhotoOrientation.Landscape,
    // extra: false,//error
})
