// Importation de la classe Film depuis le fichier Film.ts
import { Film } from "../models/Film";

// Fonction utilitaire pour créer une instance de Film
export function createFilm(
  // Paramètre data : un objet contenant les propriétés nécessaires pour créer un film
  data: {
    id: number;
    title: string;
    genre: string;
    duration: number;
    realiseDate: string;
    director: string;

    // Chaque propriété de l'objet data correspond à une propriété de la classe Film
  }
): Film {
  
  // Création et retour d'une nouvelle instance de Film avec les propriétés fournies
  return new Film(
    data.id,
    data.title,
    data.genre,
    data.duration,
    data.realiseDate,
    data.director
  );
}
