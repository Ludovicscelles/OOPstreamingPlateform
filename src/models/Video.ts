export abstract class Video {
  constructor(
    public id: number,
    public title: string,
    public genre: string,
    public duration?: number,
    public releaseDate?: string
  ) {}

  abstract play(): void;
}
