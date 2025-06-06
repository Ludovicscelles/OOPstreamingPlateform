import { Video } from "./Video";

export  class Documentary extends Video {
  constructor(
    id: number,
    title: string,
    duration: number,
    genre: string,
    realiseDate: string,
    public subject: string
  ) {
    super(id, title, duration, genre, realiseDate);
  }
   play(): void {
    console.log(
      `Lecture du documentaire ${this.title} sur le sujet : ${this.subject}`
    );
  }
}
