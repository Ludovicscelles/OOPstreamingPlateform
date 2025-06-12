// Importation de la classe Documentary depuis le fichier Documentary.ts
import { Documentary } from "../models/Documentary";

// Fonction utilitaire pour créer une instance de Documentary
export function createDocumentary(

// Paramètre data : un objet contenant les propriétés nécessaires pour créer un documentaire
  data: {
  id: number;
  title: string;
  genre: string;
  duration: number;
  realiseDate: string;
  subject: string;

// Chaque propriété de l'objet data correspond à une propriété de la classe Documentary
}): Documentary {

// Création et retour d'une nouvelle instance de Documentary avec les propriétés fournies
  return new Documentary(
    data.id,
    data.title,
    data.genre,
    data.duration,
    data.realiseDate,
    data.subject
  );
}
