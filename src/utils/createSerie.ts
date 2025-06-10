// Description: Utility function to create a Serie instance with nested Seasons and Episodes.

// Imports des trois classes nécessaires depuis le fichier Serie.ts
import { Episode, Season, Serie } from "../models/Serie";

// Déclaration de la fonction createSerie et la rend exportable pour l'utiliser ailleurs dans le projet.
export function createSerie(

  // Paramètres de la fonction pour créer une série.
  // Chaque paramètre correspond à une propriété de la série.
  id: number,
  title: string,
  genre: string,
  realiseDate: string,
  director: string,

  // Paramètre seasonData : un tableau d'objets contenant les informations des saisons et des épisodes.
  // Chaque objet de seasonData contient le numéro de la saison et un tableau d'épisodes.
  // Chaque épisode a un titre, un numéro d'épisode et une durée.
  seasonData: {
    seasonNumber: number;
    episodes: {
      title: string;
      numberEpisode: number;
      duration: number;
    }[];
  }[]

  // La fonction retourne une instance de la classe Serie, construite à partir des paramètres fournis.
): Serie {

  // Boucle sur chaque élément de seasonData. Pour chaque saison, on extrait le numéro de la saison et les épisodes.
  const season = seasonData.map(({ seasonNumber, episodes }) => {
    
    // Pour chaque épisode, on crée une instance de la classe Episode avec le titre, le numéro d'épisode et la durée.
    const episodesInstances = episodes.map(
      (ep) => new Episode(ep.title, ep.numberEpisode, ep.duration)
    );

    // On retourne une instance de la classe Season avec le numéro de la saison et les épisodes créés précédemment.
    return new Season(seasonNumber, episodesInstances);

    //Fin de la méthode .map sur seasonData
  });

  // On retourne une nouvelle instance de la classe Serie avec les paramètres fournis et la saison créée.
  return new Serie(id, title, 0, genre, realiseDate, director, season);
}
