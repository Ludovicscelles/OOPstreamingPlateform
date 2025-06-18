import { documentariesData } from "./data/documentariesData";
import { filmsData } from "./data/filmsData";
import { seriesData } from "./data/seriesData";

import { createDocumentary } from "./utils/createDocumentary";
import { createFilm } from "./utils/createFilm";
import { createSerie } from "./utils/createSerie";

import { MovieLibrary } from "./MovieLibrary";
import { Serie } from "./models/Serie";
import { Film } from "./models/Film";
import { Documentary } from "./models/Documentary";

const movieLibrary = new MovieLibrary();

// Création d'un tableau d'identifiants de films sélectionnés
const selectedIdsFilms = [5, 9, 11, 14, 20];

// Filtrage des films en fonction des identifiants sélectionnés
const selectedFilms = filmsData.filter((film) =>
  selectedIdsFilms.includes(film.id)
);

// Boucle sur les films sélectionnés et création d'instances de Film
// puis ajout à la vidéothèque
selectedFilms.forEach((selectedFilm) => {
  const film = createFilm(selectedFilm);
  movieLibrary.add(film);
});

const deleateFilmId5 = movieLibrary.delete(5);
console.log(
  deleateFilmId5 ? `Film avec l'ID 5 supprimé` : `Vidéo non trouvée.`
);

const searchFilm = movieLibrary.search("Tit");
searchFilm.length > 0
  ? console.log(
      `Résultat de la recherche :\n${searchFilm.map((film) => `${film.title}`).join("\n")}`
    )
  : console.log(`Film non trouvé`);

const searchFilm2 = movieLibrary.search("zazoux");
searchFilm2.length > 0
  ? console.log(
      `Résultat de la recherche : \n${searchFilm2.map((film) => `${film.title}`).join("\n")}`
    )
  : console.log(`Film non trouvé`);

seriesData.forEach((serieData) => {
  const serie = createSerie(serieData);
  movieLibrary.addSerie(serie);
});

const searchSerie = movieLibrary.searchSerie("Ro");
searchSerie.length > 0
  ? console.log(
      `Résultat de la recherche : \n${searchSerie.map((serie) => `${serie.title}`).join("\n")}`
    )
  : console.log(`Série non trouvée`);

const searchEpisodeSerie1 = movieLibrary.searchEpisodeSerie("peut nuire");
searchEpisodeSerie1.length > 0
  ? console.log(
      `Épisode(s) trouvé(s) : ${searchEpisodeSerie1.map((ep) => `${ep.episode.title} (saison ${ep.season.number} de ${ep.serie.title})`)}`
    )
  : console.log(`Aucun épisode trouvé`);

// Création d'un tableau d'identifiants de documentaires sélectionnés
const selectedIds = [1, 2, 3, 4, 5];

// Filtrage des documentaires en fonction des identifiants sélectionnés
// puis création d'instances de Documentary pour chaque documentaire sélectionné
const selectedDocumentaries = documentariesData.filter((documentary) =>
  selectedIds.includes(documentary.id)
);

// Ajout des documentaires sélectionnés à la vidéothèque
selectedDocumentaries.forEach((selectedData) => {
  const documentary = createDocumentary(selectedData);
  movieLibrary.add(documentary);
});

const deleateDocumentaryId1 = movieLibrary.delete(1);
console.log(
  deleateDocumentaryId1
    ? `Documentaire avec l'ID 1 supprimé`
    : `Vidéo non trouvée.`
);

const searchDocumentary = movieLibrary.search("cléo");
searchDocumentary.length > 0
  ? console.log(
      `Documentaire(s) trouvé(s) : ${searchDocumentary.map(
        (doc) => `${doc.title}`
      )}`
    )
  : console.log(`Aucun documentaire trouvé`);

const searchDocumentary2 = movieLibrary.search("zozozozo");
searchDocumentary2.length > 0
  ? console.log(
      `Documentaire(s) trouvé(s) : ${searchDocumentary2.map(
        (doc) => `${doc.title}`
      )}`
    )
  : console.log(`Aucun documentaire trouvé`);

console.log(MovieLibrary);

console.log(movieLibrary.getAll().filter((video) => video instanceof Serie));

console.log(
  movieLibrary
    .getAll()
    .filter((video) => video instanceof Serie)
    .forEach((serie) => {
      console.log(`Vous regardez la série ${serie.title}`);
    })
);

console.log(movieLibrary.getAll().filter((video) => video instanceof Film));

console.log(
  movieLibrary
    .getAll()
    .filter((video) => video instanceof Film)
    .forEach((film) => film.play())
);

console.log(
  movieLibrary.getAll().filter((video) => video instanceof Documentary)
);

console.log(
  movieLibrary
    .getAll()
    .filter((video) => video instanceof Documentary)
    .forEach((documentary) => documentary.play())
);

console.log(movieLibrary);
