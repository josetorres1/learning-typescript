import { Album } from "./album";
import { PhotoOrientation } from "./photoOrientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, "joset", "jose", true);
const album = new Album(2, "My course of TS");
const picture = new Picture(3, "TS class", PhotoOrientation.Portrait);

user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);

user.removeAlbum(album);
console.log("user", user);
