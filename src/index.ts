import { documentariesData } from "./data/documentariesData";
import { filmsData } from "./data/filmsData";

import { createDocumentary } from "./utils/createDocumentary";
import { createFilm } from "./utils/createFilm";
import { createSerie } from "./utils/createSerie";

import { MovieLibrary } from "./MovieLibrary";

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

const serie1 = createSerie(1, "Columbo", "Policier", [
  {
    seasonYear: 1989,
    seasonNumber: 9,
    episodes: [
      {
        title: "Meurte, un autoportrait",
        numberEpisode: 1,
        duration: 90,
        director: "James Frawley",
      },
      {
        title: "Columbo crie au Loup",
        numberEpisode: 2,
        duration: 90,
        director: "William Read Woodfield",
      },
      {
        title: "Votez pour moi",
        numberEpisode: 3,
        duration: 90,
        director: "Patrick McGoohan",
      },
    ],
  },
  {
    seasonYear: 1990,
    seasonNumber: 10,
    episodes: [
      {
        title: "Criminologie appliquée",
        numberEpisode: 1,
        duration: 90,
        director: "E.W. Swackhamer",
      },
      {
        title: "Le meurtre peut nuire à la santé",
        numberEpisode: 2,
        duration: 86,
        director: "Daryl Duke",
      },
      {
        title: "Jeux d'ombres",
        numberEpisode: 3,
        duration: 92,
        director: "Alan J Levi",
      },
    ],
  },
]);

movieLibrary.add(serie1);

console.log(movieLibrary);

console.log(serie1);
console.log(serie1.season[0] && serie1.season[1]);
serie1.play();
serie1.season[0].episodes[2].play();

console.log(movieLibrary);
