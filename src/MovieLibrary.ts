import { Video } from "./models/Video";
import { Episode, Season, Serie } from "./models/Serie";

export class MovieLibrary {
  private videos: Video[] = [];
  private series: Serie[] = [];

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
