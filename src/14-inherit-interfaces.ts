export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    description: string;
}

interface Picture extends Entity {
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 2,
    title: "Chistmas",
    description: "December 2020",
};

const picture: Picture = {
    id: 3,
    title: "Christmas tree",
    orientation: PhotoOrientation.Panorama,
};

let newPicture = {} as Picture; // trust me TS, this object is a Picture
newPicture.id = 4;
newPicture.orientation = PhotoOrientation.Landscape;
newPicture.title = "family and the lights";

console.log("album", album);
console.log("picture", picture);
console.log("newPicture", newPicture);
