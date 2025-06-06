"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieLibrary = void 0;
class MovieLibrary {
    constructor() {
        this.videos = [];
    }
    add(video) {
        this.videos.push(video);
    }
}
exports.MovieLibrary = MovieLibrary;
