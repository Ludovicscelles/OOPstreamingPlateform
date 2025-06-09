import { Episode, Season, Serie } from "../models/Serie";

export function createSerie(
  id: number,
  title: string,
  genre: string,
  realiseDate: string,
  director: string,
  seasonData: {
    seasonNumber: number;
    episodes: {
      title: string;
      numberEpisode: number;
      duration: number;
    }[];
  }[]
): Serie {
  const season = seasonData.map(({ seasonNumber, episodes }) => {
    const episodesInstances = episodes.map(
      (ep) => new Episode(ep.title, ep.numberEpisode, ep.duration)
    );
    return new Season(seasonNumber, episodesInstances);
  });
  return new Serie(id, title, 0, genre, realiseDate, director, season);
}
