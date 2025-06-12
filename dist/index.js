"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documentariesData_1 = require("./data/documentariesData");
const Film_1 = require("./models/Film");
const createDocumentary_1 = require("./utils/createDocumentary");
const createSerie_1 = require("./utils/createSerie");
const MovieLibrary_1 = require("./MovieLibrary");
const movieLibrary = new MovieLibrary_1.MovieLibrary();
const film1 = new Film_1.Film(1, "Le Cinq", "Science-Fiction", 120, "1997", "Luc Besson");
const selectedIds = [1, 2, 3, 4, 5];
const selectedDocumentaries = documentariesData_1.documentariesData.filter((documentary) => selectedIds.includes(documentary.id));
selectedDocumentaries.forEach((selectedData) => {
    const documentaries = (0, createDocumentary_1.createDocumentary)(selectedData);
    movieLibrary.add(documentaries);
});
documentariesData_1.documentariesData.forEach((docData) => {
    const doc = (0, createDocumentary_1.createDocumentary)(docData);
    movieLibrary.add(doc);
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
movieLibrary.add(film1);
movieLibrary.add(serie1);
console.log(movieLibrary);
console.log(film1);
console.log(serie1);
console.log(serie1.season[0] && serie1.season[1]);
serie1.play();
serie1.season[0].episodes[2].play();
console.log(movieLibrary);
