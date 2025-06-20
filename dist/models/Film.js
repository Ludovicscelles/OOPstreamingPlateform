"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Film = void 0;
const Video_1 = require("./Video");
class Film extends Video_1.Video {
    constructor(id, title, genre, duration, realiseDate, director) {
        super(id, title, genre, duration, realiseDate);
        this.director = director;
    }
    play() {
        console.log(`Lecture du film ${this.title} réalisé par : ${this.director}`);
    }
}
exports.Film = Film;
