export abstract class Video {
  constructor(
    public id: number,
    public title: string,
    public duration: string,
    public genre: string,
    public releaseDate: string
  ) {}

  abstract getRead(): void;
}
