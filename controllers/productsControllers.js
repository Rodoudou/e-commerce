import { Product } from "../models/productModel.js";


// Afficher les articles de la BDD
export const showProduct = async (req, res) => {
    const body = req.query;
    // console.log("body in findProduct", body);
    console.log(body);
    try {
      const myProduct = await Product.find({
        
      });
      console.log("myProduct", myProduct);
      if(!myProduct||myProduct===null){
          return res.send(" Aucuns produits enregistré !");
      }else{
          return res.json(myProduct);
      }
    } catch (error) {
      return res.status(400).json({
        message: "An error occurred",
      });
    }
  };


// Ajouter un produit
export const addProduct = async (req, res) => {
  const body = req.body;
  console.log("body products =>", body);

  try {
      const newProduct = new Product({
        category: "merde",
        name: "MOMO",
        price: "3milliards"
    });
     await newProduct.save();


    return res.json({
      _id: newProduct._id,
      category: newProduct.category,
      name: newProduct.name,
      price: newProduct.price,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occurred",
    });
  }
};

// Chercher un article dans la BDD
export const findProduct = async (req, res) => {
  const body = req.query;
  // console.log("body in findProduct", body);
  console.log(body);
  try {
    const myProduct = await Product.findOne({
      _id: body._id,
    });
    console.log("myProduct", myProduct);
    if(!myProduct||myProduct===null){
        return res.send(" Produit non trouvé !");
    }else{
        return res.json(myProduct);
    }
  } catch (error) {
    return res.status(400).json({
      message: "An error occurred",
    });
  }
};

