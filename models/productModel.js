import mongoose from "mongoose";

export const Product = mongoose.model("Product", {
    category: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: String
    },
   
});