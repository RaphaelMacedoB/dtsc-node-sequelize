import { DogService } from "../services/DogService.js";
/**
 * @author Jefferson Abreu
 */
class DogController {

    static async findAll(req, res, next) {
        DogService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        DogService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        DogService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        DogService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        DogService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async findAllDogsByAggresionScoreAndAmountOfOccurrencesByDog(req, res, next){
      DogService.findAllDogsByAggresionScoreAndAmountOfOccurrencesByDog(req)
      .then(obj => res.json(obj))
      .catch(next);
    }
  /*Dogs by Aggresion Score and Amount of Occurrences by Dog*/ 


  static async findAllDogsByHealthState(req, res, next){
    DogService.findAllDogsByHealthState(req)
      .then(obj => res.json(obj))
      .catch(next);
  }
}
  
  

export { DogController };