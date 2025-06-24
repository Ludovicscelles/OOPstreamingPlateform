import { Video } from "./Video";

export class TvShow extends Video {
  constructor(
    id: string,
    title: string,
    genre: string,
    public director: string,
    public season: Season[]
  ) {
    super(id, title, genre);
  }
  play(): void {
    console.log(
      `Lecture de l'émission ${this.title}.`
    );
  }
}

export class Season {
  constructor(
    public year: number,
    public number: number,
    public TVHost: string,
    public episodes: Episode[]
  ) {}
}

export class Episode {
  constructor(
    
    public number: number,
    public duration: number,
  
  ) {}
  play() {
    console.log(`Lecture de l'épisode ${this.number}`);
  }
}
