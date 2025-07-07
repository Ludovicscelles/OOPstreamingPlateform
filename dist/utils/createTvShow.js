"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTvShow = createTvShow;
const TvShow_1 = require("../models/TvShow");
function createTvShow(data) {
    const season = data.seasonData.map(({ seasonYear, seasonNumber, seasonTVHost, episodes }) => {
        const episodesInstances = episodes.map((episode) => new TvShow_1.EpisodeTvShow(episode.numberEpisode, episode.duration));
        return new TvShow_1.SeasonTvShow(seasonYear, seasonNumber, seasonTVHost, episodesInstances);
    });
    return new TvShow_1.TvShow(data.id, data.title, data.genre, data.director, season);
}
