import { MovieLibrary } from "./MovieLibrary";
import { Film } from "./models/Film";
import { filmsData } from "./data/filmsData";

const movieLibrary = new MovieLibrary();

function initiateData() {
  filmsData.forEach((film) => {
    const newFilm = new Film(
      film.id,
      film.title,
      film.genre,
      film.duration,
      film.realiseDate,
      film.director
    );
    movieLibrary.add(newFilm);
  });
  return movieLibrary;
}

export default initiateData();
