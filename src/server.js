import express from "express";
import sequelize from "./config/database-connections.js";
const app = express();
app.listen(3333, () => console.log('Server rodando na porta 3333'));