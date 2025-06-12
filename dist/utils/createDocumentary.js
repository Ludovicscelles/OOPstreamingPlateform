"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocumentary = createDocumentary;
const Documentary_1 = require("../models/Documentary");
function createDocumentary(data) {
    return new Documentary_1.Documentary(data.id, data.title, data.genre, data.duration, data.realiseDate, data.subject);
}
