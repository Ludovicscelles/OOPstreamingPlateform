"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieLibrary = void 0;
class MovieLibrary {
    constructor() {
        this.videos = [];
    }
    getAll() {
        return this.videos;
    }
    add(video) {
        this.videos.push(video);
    }
    delete(videoId) {
        const initialLength = this.videos.length;
        this.videos = this.videos.filter((video) => video.id !== videoId);
        return this.videos.length < initialLength;
    }
}
exports.MovieLibrary = MovieLibrary;
