"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieLibrary = void 0;
class MovieLibrary {
    constructor() {
        this.videos = [];
        this.series = [];
    }
    getAll() {
        return this.videos;
    }
    getById(id) {
        return this.videos.find((video) => video.id === id);
    }
    search(videoTitle) {
        const searchTerm = videoTitle.toLowerCase();
        return this.videos.filter((video) => video.title.toLowerCase().includes(searchTerm));
    }
    searchSerie(serieTitle) {
        const searchTerm = serieTitle.toLowerCase();
        return this.series.filter((serie) => serie.title.toLowerCase().includes(searchTerm));
    }
    searchEpisodeSerie(episodeTitle) {
        const searchTerm = episodeTitle.toLocaleLowerCase();
        const results = [];
        for (const serie of this.series) {
            for (const season of serie.season) {
                for (const episode of season.episodes) {
                    if (episode.title.toLocaleLowerCase().includes(searchTerm)) {
                        results.push({ episode, season, serie });
                    }
                }
            }
        }
        return results;
    }
    add(video) {
        this.videos.push(video);
    }
    addSerie(serie) {
        this.series.push(serie);
    }
    delete(videoId) {
        const initialLength = this.videos.length;
        this.videos = this.videos.filter((video) => video.id !== videoId);
        return this.videos.length < initialLength;
    }
}
exports.MovieLibrary = MovieLibrary;
