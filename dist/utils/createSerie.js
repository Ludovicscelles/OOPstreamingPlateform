"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSerie = createSerie;
const Serie_1 = require("../models/Serie");
const Serie_2 = require("../models/Serie");
const Serie_3 = require("../models/Serie");
function createSerie(id, title, genre, realiseDate, director, seasonData) {
    const season = seasonData.map(({ seasonNumber, episodes }) => {
        const episodesInstances = episodes.map((ep) => new Serie_3.Episode(ep.title, ep.number, ep.duration));
        return new Serie_2.Season(seasonNumber, episodesInstances);
    });
    return new Serie_1.Serie(id, title, 0, genre, realiseDate, director, season);
}
