import express from "express";

import { UfController } from './controllers/UfController.js';
import { CityController } from "./controllers/CityController.js";
import { DistrictController } from "./controllers/DistrictController.js"
import { TutorController } from "./controllers/TutorController.js"
import { VaccineController } from "./controllers/VaccineController.js"
import { BreedController } from "./controllers/BreedController.js"
import { EmployeeController } from "./controllers/EmployeeController.js"
import { TypeOfOccurrenceController } from "./controllers/TypeOfOccurrenceController.js"
import { DogSizeController } from "./controllers/DogSizeController.js"
import { DogController } from "./controllers/DogController.js"
import { VeterinarianController } from "./controllers/VeterinarianController.js"
import { GuardianshipController } from "./controllers/GuardianshipController.js"
import { VaccinationController } from "./controllers/VaccinationController.js";

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

routes.get('/bairros', DistrictController.findAll);
routes.get('/bairros/:id', DistrictController.findByPk);
routes.post('/bairros', DistrictController.create);
routes.put('/bairros/:id', DistrictController.update);
routes.delete('/bairros/:id', DistrictController.delete);

routes.get('/tutores', TutorController.findAll);
routes.get('/tutores/:id', TutorController.findByPk);
routes.post('/tutores', TutorController.create);
routes.put('/tutores/:id', TutorController.update);
routes.delete('/tutores/:id', TutorController.delete);

routes.get('/racas', BreedController.findAll);
routes.get('/racas/:id', BreedController.findByPk);
routes.post('/racas', BreedController.create);
routes.put('/racas/:id', BreedController.update);
routes.delete('/racas/:id', BreedController.delete);

routes.get('/vacinas', VaccineController.findAll);
routes.get('/vacinas/:id', VaccineController.findByPk);
routes.post('/vacinas', VaccineController.create);
routes.put('/vacinas/:id', VaccineController.update);
routes.delete('/vacinas/:id', VaccineController.delete);

routes.get('/funcionarios', EmployeeController.findAll);
routes.get('/funcionarios/:id', EmployeeController.findByPk);
routes.post('/funcionarios', EmployeeController.create);
routes.put('/funcionarios/:id', EmployeeController.update);
routes.delete('/funcionarios/:id', EmployeeController.delete);

routes.get('/tipos', TypeOfOccurrenceController.findAll);
routes.get('/tipos/:id', TypeOfOccurrenceController.findByPk);
routes.post('/tipos', TypeOfOccurrenceController.create);
routes.put('/tipos/:id', TypeOfOccurrenceController.update);
routes.delete('/tipos/:id', TypeOfOccurrenceController.delete);

routes.get('/portes', DogSizeController.findAll);
routes.get('/portes/:id', DogSizeController.findByPk);
routes.post('/portes', DogSizeController.create);
routes.put('/portes/:id', DogSizeController.update);
routes.delete('/portes/:id', DogSizeController.delete);

routes.get('/caes', DogController.findAll);
routes.get('/caes/:id', DogController.findByPk);
routes.post('/caes', DogController.create);
routes.put('/caes/:id', DogController.update);
routes.delete('/caes/:id', DogController.delete);

routes.get('/veterinarios', VeterinarianController.findAll);
routes.get('/veterinarios/:id', VeterinarianController.findByPk);
routes.post('/veterinarios', VeterinarianController.create);
routes.put('/veterinarios/:id', VeterinarianController.update);
routes.delete('/veterinarios/:id', VeterinarianController.delete);

routes.get('/tutelas', GuardianshipController.findAll);
routes.get('/tutelas/:id', GuardianshipController.findByPk);
routes.post('/tutelas', GuardianshipController.create);
routes.put('/tutelas/:id', GuardianshipController.update);
routes.delete('/tutelas/:id', GuardianshipController.delete);

routes.get('/vaccinations', VaccinationController.findAll);
routes.get('/vaccinations/:id', VaccinationController.findByPk);
routes.post('/vaccinations', VaccinationController.create);
routes.put('/vaccinations/:id', VaccinationController.update);
routes.delete('/vaccinations/:id', VaccinationController.delete);



export default routes;