"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documentary = void 0;
const Video_1 = require("./Video");
class Documentary extends Video_1.Video {
    constructor(id, title, genre, duration, realiseDate, subject) {
        super(id, title, genre, duration, realiseDate);
        this.subject = subject;
    }
    play() {
        console.log(`Lecture du documentaire ${this.title} sur le sujet : ${this.subject}`);
    }
}
exports.Documentary = Documentary;
