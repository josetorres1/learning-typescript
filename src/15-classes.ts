export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

class Picture {
    // properties
    id: number;
    title: string;
    orientation: PhotoOrientation;
    constructor(id: number, title: string, orientation: number) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album {
    id: number;
    title: string;
    pictures: Picture[];

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, "Personal Pictures");
const picture: Picture = new Picture(1, "my photo", PhotoOrientation.Portrait);
album.addPicture(picture);

console.log("album", album);
