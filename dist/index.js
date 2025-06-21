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
const selectedIdsFilms = ["F005", "F007", "F009", "F011", "F014", "F020"];
// Filtrage des films en fonction des identifiants sélectionnés
const selectedFilms = filmsData_1.filmsData.filter((film) => selectedIdsFilms.includes(film.id));
// Boucle sur les films sélectionnés et création d'instances de Film
// puis ajout à la vidéothèque
selectedFilms.forEach((selectedFilm) => {
    const film = (0, createFilm_1.createFilm)(selectedFilm);
    movieLibrary.add(film);
});
const getFilmById9 = movieLibrary.getById("F009");
console.log(getFilmById9 ? `Film trouvé : ${getFilmById9.title}` : `Aucun film trouvé.`);
const newTitleFilmF009 = movieLibrary.setTitle("F009", "Gladiotor, Special Edition");
const updatedFilmF009 = movieLibrary.getById("F009");
console.log(newTitleFilmF009
    ? `Titre du film avec l'ID F009 mis à jour : ${updatedFilmF009?.title}`
    : `Aucun film trouvé avec l'ID F009.`);
const newTitleFilmF007 = movieLibrary.setTitle("F007", "Les Diaboliques (The Devils)");
const updatedFilmF007 = movieLibrary.getById("F007");
console.log(newTitleFilmF007
    ? `Titre du film avec l'ID F007 mis à jour : ${updatedFilmF007?.title}`
    : `Aucun film trouvé avec l'ID F007.`);
const deleateFilmId5 = movieLibrary.delete("F005");
console.log(deleateFilmId5 ? `Film avec l'ID 5 supprimé` : `Vidéo non trouvée.`);
const searchFilm = movieLibrary.search("Tit");
searchFilm.length > 0
    ? console.log(`Résultat de la recherche :\n${searchFilm.map((film) => `${film.title}`).join("\n")}`)
    : console.log(`Film non trouvé`);
const searchFilm2 = movieLibrary.search("zazoux");
searchFilm2.length > 0
    ? console.log(`Résultat de la recherche : \n${searchFilm2.map((film) => `${film.title}`).join("\n")}`)
    : console.log(`Film non trouvé`);
seriesData_1.seriesData.forEach((serieData) => {
    const serie = (0, createSerie_1.createSerie)(serieData);
    movieLibrary.addSerie(serie);
});
const searchSerie = movieLibrary.searchSerie("Ro");
searchSerie.length > 0
    ? console.log(`Résultat de la recherche : \n${searchSerie.map((serie) => `${serie.title}`).join("\n")}`)
    : console.log(`Série non trouvée`);
const searchEpisodeSerie1 = movieLibrary.searchEpisodeSerie("peut nuire");
searchEpisodeSerie1.length > 0
    ? console.log(`Épisode(s) trouvé(s) : ${searchEpisodeSerie1.map((ep) => `${ep.episode.title} (saison ${ep.season.number} de ${ep.serie.title})`)}`)
    : console.log(`Aucun épisode trouvé`);
// Création d'un tableau d'identifiants de documentaires sélectionnés
const selectedIds = ["D001", "D002", "D003", "D004", "D014", "D020"];
// Filtrage des documentaires en fonction des identifiants sélectionnés
// puis création d'instances de Documentary pour chaque documentaire sélectionné
const selectedDocumentaries = documentariesData_1.documentariesData.filter((documentary) => selectedIds.includes(documentary.id));
// Ajout des documentaires sélectionnés à la vidéothèque
selectedDocumentaries.forEach((selectedData) => {
    const documentary = (0, createDocumentary_1.createDocumentary)(selectedData);
    movieLibrary.add(documentary);
});
const docById4 = movieLibrary.getById("D004");
console.log(docById4
    ? `Documentaire trouvé : ${docById4.title}`
    : `Aucun documentaire trouvé`);
const newTitleDocD002 = movieLibrary.setTitle("D002", "Cléopatre, Reine d'Égypte");
const updatedDocD002 = movieLibrary.getById("D002");
console.log(newTitleDocD002
    ? `Titre du documentaire avec l'ID D002 mis à jour : ${updatedDocD002?.title}`
    : `Aucun documentaire trouvé avec l'ID D002.`);
const newTitleDocD003 = movieLibrary.setTitle("D003", "Les Mystères de l'Empire Romain");
const updatedDocD003 = movieLibrary.getById("D003");
console.log(newTitleDocD003
    ? `Titre du documentaire avec l'ID D003 mis à jour : ${updatedDocD003?.title}`
    : `Aucun documentaire trouvé avec l'ID D003.`);
const deleateDocumentaryId1 = movieLibrary.delete("D001");
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
