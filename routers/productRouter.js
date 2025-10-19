import express from 'express';
import { createProduct, deleteProduct, getProductInfo, getProducts, searchProducts, updateProduct } from '../controllers/productController.js';


const productRouter = express.Router();
productRouter.post("/",createProduct)
productRouter.get("/",getProducts)
productRouter.get("/:productId", getProductInfo) 
productRouter.delete("/:productId", deleteProduct)
productRouter.put("/:productId", updateProduct)
productRouter.get("/search/:query", searchProducts) // Example: /products/search/laptop
export default productRouter;
