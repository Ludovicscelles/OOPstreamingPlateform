"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
const Video_1 = require("./Video");
class Serie extends Video_1.Video {
    constructor(id, title, duration, genre, realiseDate, director, season) {
        super(id, title, duration, genre, realiseDate);
        this.director = director;
        this.season = season;
    }
    play() {
        console.log(`Lecture du film ${this.title} réalisé par : ${this.director}`);
    }
}
exports.Serie = Serie;
class Episode {
    constructor(title, number, duration) {
        this.title = title;
        this.number = number;
        this.duration = duration;
    }
    play() {
        console.log(`Lecture de l'épisode ${this.number} : ${this.title}`);
    }
}
class Season {
    constructor(number, episodes) {
        this.number = number;
        this.episodes = episodes;
    }
}
