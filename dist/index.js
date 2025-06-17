"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documentariesData_1 = require("./data/documentariesData");
const filmsData_1 = require("./data/filmsData");
const seriesData_1 = require("./data/seriesData");
const createDocumentary_1 = require("./utils/createDocumentary");
const createFilm_1 = require("./utils/createFilm");
const createSerie_1 = require("./utils/createSerie");
const MovieLibrary_1 = require("./MovieLibrary");
const Serie_1 = require("./models/Serie");
const Film_1 = require("./models/Film");
const Documentary_1 = require("./models/Documentary");
const movieLibrary = new MovieLibrary_1.MovieLibrary();
// Création d'un tableau d'identifiants de films sélectionnés
const selectedIdsFilms = [5, 9, 11, 14, 20];
// Filtrage des films en fonction des identifiants sélectionnés
const selectedFilms = filmsData_1.filmsData.filter((film) => selectedIdsFilms.includes(film.id));
// Boucle sur les films sélectionnés et création d'instances de Film
// puis ajout à la vidéothèque
selectedFilms.forEach((selectedFilm) => {
    const film = (0, createFilm_1.createFilm)(selectedFilm);
    movieLibrary.add(film);
});
const deleateFilmId5 = movieLibrary.delete(5);
console.log(deleateFilmId5 ? `Film avec l'ID 5 supprimé` : `Vidéo non trouvée.`);
const searchFilm = movieLibrary.search("Tit");
searchFilm.length > 0
    ? console.log(`Résultat de la recherche :\n${searchFilm.map((film) => `${film.title}`).join("\n")}`)
    : console.log(`Film non trouvé`);
const searchFilm2 = movieLibrary.search("zazoux");
searchFilm2.length > 0
    ? console.log(`Résultat de la recherche: \n${searchFilm2.map((film) => `${film.title}`).join("\n")}`)
    : console.log(`Film non trouvé`);
seriesData_1.seriesData.forEach((serieData) => {
    const serie = (0, createSerie_1.createSerie)(serieData);
    movieLibrary.addSerie(serie);
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
const deleateDocumentaryId1 = movieLibrary.delete(1);
console.log(deleateDocumentaryId1
    ? `Documentaire avec l'ID 1 supprimé`
    : `Vidéo non trouvée.`);
const searchDocumentary = movieLibrary.search("cléo");
searchDocumentary.length > 0
    ? console.log(`Documentaire(s) trouvé(s) : ${searchDocumentary.map((doc) => `${doc.title}`)}`)
    : console.log(`Aucun documentaire trouvé`);
const searchDocumentary2 = movieLibrary.search("zozozozo");
searchDocumentary2.length > 0
    ? console.log(`Documentaire(s) trouvé(s) : ${searchDocumentary2.map((doc) => `${doc.title}`)}`)
    : console.log(`Aucun documentaire trouvé`);
console.log(MovieLibrary_1.MovieLibrary);
console.log(movieLibrary.getAll().filter((video) => video instanceof Serie_1.Serie));
console.log(movieLibrary
    .getAll()
    .filter((video) => video instanceof Serie_1.Serie)
    .forEach((serie) => {
    console.log(`Vous regardez la série ${serie.title}`);
}));
console.log(movieLibrary.getAll().filter((video) => video instanceof Film_1.Film));
console.log(movieLibrary
    .getAll()
    .filter((video) => video instanceof Film_1.Film)
    .forEach((film) => film.play()));
console.log(movieLibrary.getAll().filter((video) => video instanceof Documentary_1.Documentary));
console.log(movieLibrary
    .getAll()
    .filter((video) => video instanceof Documentary_1.Documentary)
    .forEach((documentary) => documentary.play()));
console.log(movieLibrary);
const searchEpisodeSerie1 = movieLibrary.searchEpisodeSerie("peut nuire");
searchEpisodeSerie1.length > 0
    ? console.log(`Épisode(s) trouvé(s) : ${searchEpisodeSerie1.map((ep) => `${ep.title}`)}`)
    : console.log(`Aucun épisode trouvé`);
