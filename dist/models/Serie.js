"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode = exports.Season = exports.Serie = void 0;
const Video_1 = require("./Video");
class Serie extends Video_1.Video {
    constructor(id, title, duration, genre, realiseDate, season) {
        super(id, title, duration, genre, realiseDate);
        this.season = season;
    }
    play() {
        console.log(`Lecture de la serie ${this.title}.`);
    }
}
exports.Serie = Serie;
class Season {
    constructor(year, number, episodes) {
        this.year = year;
        this.number = number;
        this.episodes = episodes;
    }
}
exports.Season = Season;
class Episode {
    constructor(title, number, duration, director) {
        this.title = title;
        this.number = number;
        this.duration = duration;
        this.director = director;
    }
    play() {
        console.log(`Lecture de l'épisode ${this.number} : ${this.title}`);
    }
}
exports.Episode = Episode;
