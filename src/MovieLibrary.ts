import { Video } from "./models/Video";

export class MovieLibrary {
  private videos: Video[] = [];

  getAll(): Video[] {
    return this.videos;
  }

  search(videoTitle: string): Video[] {
    return this.videos.filter((video) =>
      video.title.toLowerCase().includes(videoTitle.toLowerCase())
    );
  }

  add(video: Video) {
    this.videos.push(video);
  }

  delete(videoId: number): boolean {
    const initialLength = this.videos.length;
    this.videos = this.videos.filter((video) => video.id !== videoId);
    return this.videos.length < initialLength;
  }
}
