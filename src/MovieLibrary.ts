import { Video } from "./models/Video";

export class MovieLibrary {
  private videos: Video[] = [];

  getAll(): Video[] {
    return this.videos;
  }

  add(video: Video) {
    this.videos.push(video);
  }
}
