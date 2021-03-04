import express from "express";
import { catchErrors } from "../helpers.js";
import { addProduct, findProduct, showProduct } from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Redouane Amrani");
});

// Afficher les articles de la BDD
router.get("/show_product", catchErrors(showProduct));

// Ajouter un article dans la BDD
router.post("/add_product", catchErrors(addProduct));

// Chercher un article dans la BDD
router.get("/search_product", catchErrors(findProduct));


export default router;
