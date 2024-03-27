import { Router } from "express";
import placeOrder from "../controller/order.controller.js";
const orderRouter= Router();


orderRouter.post('/placeorder',placeOrder);

export default orderRouter;