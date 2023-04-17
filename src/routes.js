import express from "express";

import { UfController } from './controllers/UfController.js';
import { CityController } from "./controllers/CityController.js";

const routes = express.Router();

routes.get('/ufs', UfController.findAll);
routes.get('/ufs/:id', UfController.findByPk);
routes.post('/ufs', UfController.create);
routes.put('/ufs/:id', UfController.update);
routes.delete('/ufs/:id', UfController.delete);

routes.get('/cidades', CityController.findAll);
routes.get('/cidades/:id', CityController.findByPk);
routes.post('/cidades', CityController.create);
routes.put('/cidades/:id', CityController.update);
routes.delete('/cidades/:id', CityController.delete);
routes.get('/cidades/findByUf/:id', CityController.findByUf);

export default routes;