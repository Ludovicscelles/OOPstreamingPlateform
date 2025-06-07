import { Video } from "./Video";

export class Serie extends Video {
  constructor(
    id: number,
    title: string,
    duration: number,
    genre: string,
    realiseDate: string,
    public director: string,
    public season: Season[]
  ) {
    super(id, title, duration, genre, realiseDate);
  }
  play(): void {
    console.log(`Lecture de la serie ${this.title} réalisé par ${this.director}.`);
  }
}

export class Episode {
  constructor(
    public title: string,
    public number: number,
    public duration: number
  ) {}
  play() {
    console.log(`Lecture de l'épisode ${this.number} : ${this.title}`);
  }
}

export class Season {
  constructor(
    public number: number,
    public episodes: Episode[]
  ) {}
}
