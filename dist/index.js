"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Documentary_1 = require("./models/Documentary");
const Film_1 = require("./models/Film");
const createSerie_1 = require("./utils/createSerie");
const MovieLibrary_1 = require("./MovieLibrary");
const movieLibrary = new MovieLibrary_1.MovieLibrary();
const film1 = new Film_1.Film(1, "Le Cinquième Élément", 120, "Science-Fiction", "1997", "Luc Besson");
const documentary1 = new Documentary_1.Documentary(1, "La Vie Secrète des Pharaons", 90, "Histoire", "2014", "L'Égypte Ancienne");
const documentary2 = new Documentary_1.Documentary(2, "Cléopatre", 88, "Histoire", "2016", "L'Égype Ancienne");
// const episode1 = new Episode("Meurtre, un autoportrait", 1, 90);
// const episode2 = new Episode("Columbo crie au Loup", 2, 90);
// const episode3 = new Episode("Votez pour moi", 3, 90);
// const season9 = new Season(9, [episode1, episode2, episode3]);
// const serie1 = new Serie(1, "Columbo", 90, "Policier", "1990", "Dary Duke", [
//   season9,
// ]);
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
                director: "E.W. Swackhamer"
            },
            {
                title: "Le meurtre peut nuire à la santé",
                numberEpisode: 2,
                duration: 86,
                director: "Daryl Duke"
            },
            {
                title: "Jeux d'ombres",
                numberEpisode: 3,
                duration: 92,
                director: "Alan J Levi"
            },
        ],
    },
]);
movieLibrary.add(documentary1);
movieLibrary.add(documentary2);
movieLibrary.add(film1);
movieLibrary.add(serie1);
console.log(movieLibrary);
documentary1.play();
console.log(film1);
console.log(serie1);
console.log(serie1.season[0] && serie1.season[1]);
serie1.play();
serie1.season[0].episodes[2].play();
console.log(movieLibrary);
