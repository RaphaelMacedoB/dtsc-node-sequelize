import express from "express";
// import sequelize from "./config/database-connections.js"; SQLITE
import sequelize from "./config/database-connections-pg.js" // POSTGRES
const app = express();
app.listen(3333, () => console.log('Server rodando na porta 3333'));