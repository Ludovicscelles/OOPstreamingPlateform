// Description: Utility function to create a Serie instance with nested Seasons and Episodes.

// Imports des trois classes nécessaires depuis le fichier Serie.ts
import { Episode, Season, Serie } from "../models/Serie";

// Déclaration de la fonction createSerie et la rend exportable pour l'utiliser ailleurs dans le projet.
export function createSerie(
  // Paramètres de la fonction pour créer une série.
  // Chaque paramètre correspond à une propriété de la série.
  data: {
    id: number;
    title: string;
    genre: string;

    // Paramètre seasonData : un tableau d'objets contenant les informations des saisons et des épisodes.
    // Chaque objet de seasonData contient le numéro de la saison et un tableau d'épisodes.
    // Chaque épisode a un titre, un numéro d'épisode et une durée.
    seasonData: {
      seasonYear: number;
      seasonNumber: number;
      episodes: {
        title: string;
        numberEpisode: number;
        duration: number;
        director: string;
      }[];
    }[];

    // La fonction retourne une instance de la classe Serie, construite à partir des paramètres fournis.
  }
): Serie {
  // Boucle sur chaque élément de seasonData. Pour chaque saison, on extrait le numéro de la saison et les épisodes.
  const season = data.seasonData.map(({ seasonYear, seasonNumber, episodes }) => {
    // Pour chaque épisode, on crée une instance de la classe Episode avec le titre, le numéro d'épisode et la durée.
    const episodesInstances = episodes.map(
      (ep) => new Episode(ep.title, ep.numberEpisode, ep.duration, ep.director)
    );

    // On retourne une instance de la classe Season avec le numéro de la saison et les épisodes créés précédemment.
    return new Season(seasonYear, seasonNumber, episodesInstances);

    //Fin de la méthode .map sur seasonData
  });

  // On retourne une nouvelle instance de la classe Serie avec les paramètres fournis et la saison créée.
  return new Serie(data.id, data.title, data.genre, season);
}
