import { Video } from "./Video";

export class Documentary extends Video {
  constructor(
    id: string,
    title: string,
    genre: string,
    duration: number,
    realiseDate: string,
    public subject: string
  ) {
    super(id, title, genre, duration, realiseDate);
  }
  play(): void {
    console.log(
      `Lecture du documentaire ${this.title} sur le sujet : ${this.subject}`
    );
  }
}
