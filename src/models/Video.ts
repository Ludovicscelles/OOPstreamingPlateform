export abstract class Video {
  constructor(
    public id: number,
    public title: string,
    public duration: number,
    public genre: string,
    public releaseDate: string
  ) {}

  abstract play(): void;
}
