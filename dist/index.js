"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Documentary_1 = require("./Documentary");
const Film_1 = require("./Film");
const Serie_1 = require("./Serie");
const MovieLibrary_1 = require("./MovieLibrary");
const movieLibrary = new MovieLibrary_1.MovieLibrary();
const film1 = new Film_1.Film(1, "Le Cinquième Élément", 120, "Science-Fiction", "1997", "Luc Besson");
const documentary1 = new Documentary_1.Documentary(1, "La Vie Secrète des Pharaons", 90, "Histoire", "2014", "L'Égypte Ancienne");
const episode1 = new Serie_1.Episode("Meurtre, un autoportrait", 1, 90);
const episode2 = new Serie_1.Episode("Columbo crie au Loup", 2, 90);
const episode3 = new Serie_1.Episode("Votez pour moi", 3, 90);
const season9 = new Serie_1.Season(9, [episode1, episode2, episode3]);
const serie1 = new Serie_1.Serie(1, "Columbo", 90, "Policier", "1990", "Dary Duke", [
    season9,
]);
movieLibrary.add(documentary1);
movieLibrary.add(film1);
console.log(movieLibrary);
documentary1.play();
console.log(film1);
console.log(serie1);
serie1.play();
episode2.play();
