import { Video } from "./models/Video";
import { Episode, Season, Serie } from "./models/Serie";
import { TvShow } from "./models/TvShow";

export class MovieLibrary {
  private videos: Video[] = [];
  private series: Serie[] = [];
  private tvShows: TvShow[] = [];

  // Getter for all videos
  getAll(): Video[] {
    return this.videos;
  }

  // Getter for one video by ID
  getById(id: string): Video | undefined {
    return this.videos.find((video) => video.id === id);
  }

  search(videoTitle: string): Video[] {
    const searchTerm = videoTitle.toLowerCase();

    return this.videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm)
    );
  }

  searchSerie(serieTitle: string): Serie[] {
    const searchTerm = serieTitle.toLowerCase();

    return this.series.filter((serie) =>
      serie.title.toLowerCase().includes(searchTerm)
    );
  }

  searchTvShow(tvShowTitle: string): TvShow[] {
    const searchTerm = tvShowTitle.toLocaleLowerCase();

    return this.tvShows.filter((tvShow) =>
      tvShow.title.toLowerCase().includes(searchTerm)
    );
  }

  searchAll(videoTitle: string): { type: string; videoTitle: string }[] {
    const searchTerm = videoTitle.toLowerCase();
    const match: { type: string; videoTitle: string }[] = [];

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

  searchEpisodeSerie(
    episodeTitle: string
  ): { episode: Episode; season: Season; serie: Serie }[] {
    const searchTerm = episodeTitle.toLocaleLowerCase();

    const results: { episode: Episode; season: Season; serie: Serie }[] = [];

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

  add(video: Video) {
    this.videos.push(video);
  }

  addSerie(serie: Serie): void {
    this.series.push(serie);
  }

  addTvShow(tvShow: TvShow): void {
    this.tvShows.push(tvShow);
  }

  setTitle(videoId: string, newTitle: string): boolean {
    const video = this.videos.find((video) => video.id === videoId);
    if (video) {
      video.title = newTitle;
      return true;
    }
    return false;
  }

  setVideo(videoId: string, update: Partial<Video>): boolean {
    const video = this.videos.find((video) => video.id === videoId);
    if (!video) return false;
    Object.assign(video, update);
    return true;
  }

  delete(videoId: string): boolean {
    const initialLength = this.videos.length;
    this.videos = this.videos.filter((video) => video.id !== videoId);
    return this.videos.length < initialLength;
  }
}
