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
import { OccurrenceController } from "./controllers/OccurrenceController.js"

const routes = express.Router();

routes.get('/ufs', UfController.findAll);
routes.get('/ufs/:id', UfController.findByPk);
routes.post('/ufs', UfController.create);
routes.put('/ufs/:id', UfController.update);
routes.delete('/ufs/:id', UfController.delete);

routes.get('/cities', CityController.findAll);
routes.get('/cities/:id', CityController.findByPk);
routes.post('/cities', CityController.create);
routes.put('/cities/:id', CityController.update);
routes.delete('/cities/:id', CityController.delete);

routes.get('/district', DistrictController.findAll);
routes.get('/district/:id', DistrictController.findByPk);
routes.post('/district', DistrictController.create);
routes.put('/district/:id', DistrictController.update);
routes.delete('/district/:id', DistrictController.delete);

routes.get('/tutors', TutorController.findAll);
routes.get('/tutors/:id', TutorController.findByPk);
routes.post('/tutors', TutorController.create);
routes.put('/tutors/:id', TutorController.update);
routes.delete('/tutors/:id', TutorController.delete);
routes.get('/tutors/report/findAllTutorsByCityWithAmountDogs', TutorController.findAllTutorsByCityWithAmountDogs);
routes.get('/tutors/report/findByPkCityTutorsByCityWithAmountDogs/:cityId', TutorController.findByPkCityTutorsByCityWithAmountDogs);

routes.get('/breeds', BreedController.findAll);
routes.get('/breeds/:id', BreedController.findByPk);
routes.post('/breeds', BreedController.create);
routes.put('/breeds/:id', BreedController.update);
routes.delete('/breeds/:id', BreedController.delete);
routes.get('/breeds/report/findAllBreedWithVaccineRestriction', BreedController.findAllBreedWithVaccineRestriction);
routes.get('/breeds/report/findByPkBreedWithVaccineRestriction/:breedId', BreedController.findByPkBreedWithVaccineRestriction)

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

routes.get('/dogs', DogController.findAll);
routes.get('/dogs/:id', DogController.findByPk);
routes.get('/dogs/report/findAllDogsByAggresionScoreAndAmountOfOccurrencesByDog', DogController.findAllDogsByAggresionScoreAndAmountOfOccurrencesByDog);
routes.get('/dogs/report/findAllDogsByHealthState', DogController.findAllDogsByHealthState);
routes.post('/dogs', DogController.create);
routes.put('/dogs/:id', DogController.update);
routes.delete('/dogs/:id', DogController.delete);

routes.get('/veterinarians', VeterinarianController.findAll);
routes.get('/veterinarians/:id', VeterinarianController.findByPk);
routes.post('/veterinarians', VeterinarianController.create);
routes.put('/veterinarians/:id', VeterinarianController.update);
routes.delete('/veterinarians/:id', VeterinarianController.delete);

routes.get('/guardianships', GuardianshipController.findAll);
routes.get('/guardianships/:id', GuardianshipController.findByPk);
routes.post('/guardianships', GuardianshipController.create);
routes.put('/guardianships/:id', GuardianshipController.update);
routes.delete('/guardianships/:id', GuardianshipController.delete);

routes.get('/occurrences', OccurrenceController.findAll);
routes.get('/occurrences/:id', OccurrenceController.findByPk);
routes.post('/occurrences', OccurrenceController.create);
routes.put('/occurrences/:id', OccurrenceController.update);
routes.delete('/occurrences/:id', OccurrenceController.delete);
routes.get('/occurrences/report/findAllOccurrenceThatDayByVet', OccurrenceController.findAllOccurrenceThatDayByVet);
routes.get('/occurrences/report/findAllOccurrenceThatDayByVet/:date', OccurrenceController.findAllOccurrenceThatDayByVet);
routes.get('/occurrences/report/findAllOccurrenceByDogAndOwner', OccurrenceController.findAllOccurrenceByDogAndOwner);
routes.get('/occurrences/report/findAllOccurrenceByDogAndOwner/:tutorId/:dogId', OccurrenceController.findAllOccurrenceByDogAndOwner);


export default routes;