"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSerie = createSerie;
const Serie_1 = require("../models/Serie");
function createSerie(id, title, genre, realiseDate, director, seasonData) {
    const season = seasonData.map(({ seasonNumber, episodes }) => {
        const episodesInstances = episodes.map((ep) => new Serie_1.Episode(ep.title, ep.numberEpisode, ep.duration));
        return new Serie_1.Season(seasonNumber, episodesInstances);
    });
    return new Serie_1.Serie(id, title, 0, genre, realiseDate, director, season);
}
