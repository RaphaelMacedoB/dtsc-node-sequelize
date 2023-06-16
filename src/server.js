import express from "express";
import sequelize from "./config/database-connections.js"; 
import routes from "./routes.js";
import errorHandler from '../src/_middleware/error-handler.js';
const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333);