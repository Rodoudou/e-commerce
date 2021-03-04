import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
//cors
app.use(cors());

dotenv.config();

export const Bdd = mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection etabli avec MongoDB");
  })
  .catch((error) => console.error(error.message));

app.use(routes);

const PORT = process.env.PORT || 5000;


//Gestion des erreurs
app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le PORT: ${PORT}`);
});
