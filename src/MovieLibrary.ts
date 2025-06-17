import { Video } from "./models/Video";
import { Episode, Serie } from "./models/Serie";

export class MovieLibrary {
  private videos: Video[] = [];
  private series: Serie[] = [];

  getAll(): Video[] {
    return this.videos;
  }

  search(videoTitle: string): Video[] {
    const searchTerm = videoTitle.toLocaleLowerCase();

    return this.videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm)
    );
  }

  searchEpisodeSerie(episodeTitle: string): Episode[] {
    const searchTerm = episodeTitle.toLocaleLowerCase();

    const matchEpisodes: Episode[] = [];

    for (const serie of this.series) {
      for (const season of serie.season) {
        for (const episode of season.episodes) {
          if (episode.title.toLocaleLowerCase().includes(searchTerm)) {
            matchEpisodes.push(episode);
          }
        }
      }
    }
    return matchEpisodes;
  }

  add(video: Video) {
    this.videos.push(video);
  }

  addSerie(serie: Serie): void {
    this.series.push(serie);
  }

  delete(videoId: number): boolean {
    const initialLength = this.videos.length;
    this.videos = this.videos.filter((video) => video.id !== videoId);
    return this.videos.length < initialLength;
  }
}
