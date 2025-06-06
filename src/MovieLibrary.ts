import { Video } from "./Video";

export class MovieLibrary {
  private videos: Video[] = [];

  add(video: Video) {
    this.videos.push(video);
  }
}
