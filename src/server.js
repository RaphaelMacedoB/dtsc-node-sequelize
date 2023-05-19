import express from "express";
import sequelize from "./config/database-connections.js"; //SQLITE
import routes from "./routes.js";
//import sequelize from "./config/database-connections-pg.js" // POSTGRES
import errorHandler from '../src/_middleware/error-handler.js';
const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333);