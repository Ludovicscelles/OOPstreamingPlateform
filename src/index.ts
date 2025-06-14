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

seriesData.forEach((serieData) => {
  const serie = createSerie(serieData);
  movieLibrary.add(serie);
});

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
