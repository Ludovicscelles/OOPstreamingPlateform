"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeTvShow = exports.SeasonTvShow = exports.TvShow = void 0;
const Video_1 = require("./Video");
class TvShow extends Video_1.Video {
    constructor(id, title, genre, director, season) {
        super(id, title, genre);
        this.director = director;
        this.season = season;
    }
    play() {
        console.log(`Lecture de l'émission ${this.title}.`);
    }
}
exports.TvShow = TvShow;
class SeasonTvShow {
    constructor(year, number, TVHost, episodes) {
        this.year = year;
        this.number = number;
        this.TVHost = TVHost;
        this.episodes = episodes;
    }
}
exports.SeasonTvShow = SeasonTvShow;
class EpisodeTvShow {
    constructor(number, duration) {
        this.number = number;
        this.duration = duration;
    }
    play() {
        console.log(`Lecture de l'épisode ${this.number}`);
    }
}
exports.EpisodeTvShow = EpisodeTvShow;
