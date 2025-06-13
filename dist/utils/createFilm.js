"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilm = createFilm;
// Importation de la classe Film depuis le fichier Film.ts
const Film_1 = require("../models/Film");
// Fonction utilitaire pour créer une instance de Film
function createFilm(
// Paramètre data : un objet contenant les propriétés nécessaires pour créer un film
data) {
    // Création et retour d'une nouvelle instance de Film avec les propriétés fournies
    return new Film_1.Film(data.id, data.title, data.genre, data.duration, data.realiseDate, data.director);
}
