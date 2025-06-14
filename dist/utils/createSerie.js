"use strict";
// Description: Utility function to create a Serie instance with nested Seasons and Episodes.
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSerie = createSerie;
// Imports des trois classes nécessaires depuis le fichier Serie.ts
const Serie_1 = require("../models/Serie");
// Déclaration de la fonction createSerie et la rend exportable pour l'utiliser ailleurs dans le projet.
function createSerie(
// Paramètres de la fonction pour créer une série.
// Chaque paramètre correspond à une propriété de la série.
data) {
    // Boucle sur chaque élément de seasonData. Pour chaque saison, on extrait le numéro de la saison et les épisodes.
    const season = data.seasonData.map(({ seasonYear, seasonNumber, episodes }) => {
        // Pour chaque épisode, on crée une instance de la classe Episode avec le titre, le numéro d'épisode et la durée.
        const episodesInstances = episodes.map((ep) => new Serie_1.Episode(ep.title, ep.numberEpisode, ep.duration, ep.director));
        // On retourne une instance de la classe Season avec le numéro de la saison et les épisodes créés précédemment.
        return new Serie_1.Season(seasonYear, seasonNumber, episodesInstances);
        //Fin de la méthode .map sur seasonData
    });
    // On retourne une nouvelle instance de la classe Serie avec les paramètres fournis et la saison créée.
    return new Serie_1.Serie(data.id, data.title, data.genre, season);
}
