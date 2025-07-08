import { Router } from "express";
import movieLibrary from "../initiateData";

const router = Router();

router.get("/", (req, res) => {
  res.json(movieLibrary.getAll());
});

router.get("/films", (req, res) => {
  const films = movieLibrary
    .getAll()
    .filter((v) => v.constructor.name === "Film");
  res.json(films);
});

export default router;
