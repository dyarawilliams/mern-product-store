import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"

import productRoutes from "./routes/product.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept json data in the req.body

app.use("/api/products",  productRoutes)

app.listen(8000, () => {
    connectDB();
    console.log("Server started at http://localhost:8000");
});