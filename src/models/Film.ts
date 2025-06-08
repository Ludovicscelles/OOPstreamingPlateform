import { Video } from "./Video";

export class Film extends Video {
  constructor(
    id: number,
    title: string,
    duration: number,
    genre: string,
    realiseDate: string,
    public director: string
  ) {
    super(id, title, duration, genre, realiseDate);
  }
  play(): void {
    console.log(`Lecture du film ${this.title} réalisé par : ${this.director}`);
  }
}
