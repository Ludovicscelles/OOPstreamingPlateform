import { Documentary } from "./Documentary";
import { Film } from "./Film";
import { MovieLibrary } from "./MovieLibrary";

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

movieLibrary.add(documentary1);
movieLibrary.add(film1);

console.log(movieLibrary);
documentary1.play();
console.log(film1);
