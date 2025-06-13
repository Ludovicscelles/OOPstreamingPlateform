"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocumentary = createDocumentary;
// Importation de la classe Documentary depuis le fichier Documentary.ts
const Documentary_1 = require("../models/Documentary");
// Fonction utilitaire pour créer une instance de Documentary
function createDocumentary(
// Paramètre data : un objet contenant les propriétés nécessaires pour créer un documentaire
data) {
    // Création et retour d'une nouvelle instance de Documentary avec les propriétés fournies
    return new Documentary_1.Documentary(data.id, data.title, data.genre, data.duration, data.realiseDate, data.subject);
}
