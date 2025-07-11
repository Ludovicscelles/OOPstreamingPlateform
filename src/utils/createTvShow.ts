import { EpisodeTvShow, SeasonTvShow, TvShow } from "../models/TvShow";

export function createTvShow(data: {
  id: string;
  title: string;
  genre: string;
  director: string;
  seasonData: {
    seasonYear: number;
    seasonNumber: number;
    seasonTVHost: string;
    episodes: {
      numberEpisode: number;
      duration: number;
    }[];
  }[];
}): TvShow {
  const season = data.seasonData.map(
    ({ seasonYear, seasonNumber, seasonTVHost, episodes }) => {
      const episodesInstances = episodes.map(
        (episode) => new EpisodeTvShow(episode.numberEpisode, episode.duration)
      );
      return new SeasonTvShow(
        seasonYear,
        seasonNumber,
        seasonTVHost,
        episodesInstances
      );
    }
  );
  return new TvShow(data.id, data.title, data.genre, data.director, season);
}
