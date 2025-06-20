import { Video } from "./Video";

export class Film extends Video {
  constructor(
    id: string,
    title: string,
    genre: string,
    duration: number,
    realiseDate: string,
    public director: string
  ) {
    super(id, title, genre, duration, realiseDate);
  }
  play(): void {
    console.log(`Lecture du film ${this.title} réalisé par : ${this.director}`);
  }
}
