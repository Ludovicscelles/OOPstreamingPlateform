import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import videoRoutes from "./routes/videoRoutes";

const app = express();
const port = 3022;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Bievenue sur l'API StreamingPlateform");
});

app.use("/api/videos", videoRoutes);


app.listen(port, () => {
  console.log(`Le serveur est lancé sur http://localhost:${port}`);
});
