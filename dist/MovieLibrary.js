"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieLibrary = void 0;
class MovieLibrary {
    constructor() {
        this.videos = [];
        this.series = [];
        this.tvShows = [];
    }
    // Getter for all videos
    getAll() {
        return this.videos;
    }
    // Getter for one video by ID
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
    searchTvShow(tvShowTitle) {
        const searchTerm = tvShowTitle.toLocaleLowerCase();
        return this.tvShows.filter((tvShow) => tvShow.title.toLowerCase().includes(searchTerm));
    }
    searchAll(videoTitle) {
        const searchTerm = videoTitle.toLowerCase();
        const match = [];
        for (const video of this.videos) {
            if (video.title.toLowerCase().includes(searchTerm)) {
                match.push({ type: video.constructor.name, videoTitle: video.title });
            }
        }
        for (const serie of this.series) {
            if (serie.title.toLowerCase().includes(searchTerm)) {
                match.push({ type: "Série", videoTitle: serie.title });
            }
        }
        for (const tvShow of this.tvShows) {
            if (tvShow.title.toLocaleLowerCase().includes(searchTerm)) {
                match.push({ type: "TvShow", videoTitle: tvShow.title });
            }
        }
        return match;
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
    addTvShow(tvShow) {
        this.tvShows.push(tvShow);
    }
    setTitle(videoId, newTitle) {
        const video = this.videos.find((video) => video.id === videoId);
        if (video) {
            video.title = newTitle;
            return true;
        }
        return false;
    }
    setVideo(videoId, update) {
        const video = this.videos.find((video) => video.id === videoId);
        if (!video)
            return false;
        Object.assign(video, update);
        return true;
    }
    delete(videoId) {
        const initialLength = this.videos.length;
        this.videos = this.videos.filter((video) => video.id !== videoId);
        return this.videos.length < initialLength;
    }
}
exports.MovieLibrary = MovieLibrary;
