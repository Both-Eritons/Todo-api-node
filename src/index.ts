import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import router from "./routes/routes" 
const app = express();
dotenv.config();

const port = process.env.PORT || 7878;

app.use(cors());

app.use(express.json());

app.use(router);


app.listen(port, () => console.log("server started..."));
