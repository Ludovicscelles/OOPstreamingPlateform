import { Documentary } from "./Documentary";
import { Film } from "./Film";
import { Episode, Season, Serie } from "./Serie";
import { MovieLibrary } from "./MovieLibrary";
import { title } from "process";

const movieLibrary = new MovieLibrary();

const film1 = new Film(
  1,
  "Le Cinquième Élément",
  120,
  "Science-Fiction",
  "1997",
  "Luc Besson"
);
const documentary1 = new Documentary(
  1,
  "La Vie Secrète des Pharaons",
  90,
  "Histoire",
  "2014",
  "L'Égypte Ancienne"
);

const episode1 = new Episode("Meurtre, un autoportrait", 1, 90);
const episode2 = new Episode("Columbo crie au Loup", 2, 90);
const episode3 = new Episode("Votez pour moi", 3, 90);

const season9 = new Season(9, [episode1, episode2, episode3]);

const serie1 = new Serie(1, "Columbo", 90, "Policier", "1990", "Dary Duke", [
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
