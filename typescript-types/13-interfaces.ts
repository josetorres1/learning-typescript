export {};
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
    title: string;
    date: string;
    orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, 
                date: ${picture.date},
                orientation: ${picture.orientation} ]`);
}

let myPic = {
    title: "My picture",
    date: "2021-08-19",
    orientation: PhotoOrientation.Square,
};

showPicture(myPic);

showPicture({
    title: "My picture 2",
    date: "2021-08-18",
    orientation: PhotoOrientation.Landscape,
    // extra: false,//error
});

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
    const pic = { title: "default", date: "2021-08-19" };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}

let picture = generatePicture({});

console.log("picture", picture);
picture = generatePicture({ title: "My picture 2" });
console.log("picture", picture);
picture = generatePicture({ title: "My picture 4", date: "2021-09-01" });
console.log("picture", picture);

// Interfaz usuario

interface User {
    readonly id: number;
    username: string;
    isPro: boolean;
}

let user: User;

user = { id: 10, username: "JoseT", isPro: false };
console.log("user", user);
user.username = "chepeT";
// user.id = 12; //Error
console.log("user", user);
