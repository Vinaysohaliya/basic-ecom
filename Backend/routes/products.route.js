import { Router } from "express";
import fetchProducts from "../controller/products.controller.js";

const productRouter= Router();


productRouter.get('/allproducts',fetchProducts);

export default productRouter;