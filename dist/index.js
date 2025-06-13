"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documentariesData_1 = require("./data/documentariesData");
const filmsData_1 = require("./data/filmsData");
const createDocumentary_1 = require("./utils/createDocumentary");
const createFilm_1 = require("./utils/createFilm");
const createSerie_1 = require("./utils/createSerie");
const MovieLibrary_1 = require("./MovieLibrary");
const movieLibrary = new MovieLibrary_1.MovieLibrary();
const selectedIdsFilms = [5, 9, 11, 14, 20];
const selectedFilms = filmsData_1.filmsData.filter((film) => selectedIdsFilms.includes(film.id));
selectedFilms.forEach((selectedFilm) => {
    const film = (0, createFilm_1.createFilm)(selectedFilm);
    movieLibrary.add(film);
});
// Création d'un tableau d'identifiants de documentaires sélectionnés
const selectedIds = [1, 2, 3, 4, 5];
// Filtrage des documentaires en fonction des identifiants sélectionnés
// puis création d'instances de Documentary pour chaque documentaire sélectionné
const selectedDocumentaries = documentariesData_1.documentariesData.filter((documentary) => selectedIds.includes(documentary.id));
// Ajout des documentaires sélectionnés à la vidéothèque
selectedDocumentaries.forEach((selectedData) => {
    const documentary = (0, createDocumentary_1.createDocumentary)(selectedData);
    movieLibrary.add(documentary);
});
const serie1 = (0, createSerie_1.createSerie)(1, "Columbo", "Policier", [
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
