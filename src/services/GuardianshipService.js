import { Guardianship } from "../models/Guardianship.js"
import { Tutor } from "../models/Tutor.js";
/**
 * @author Raphael Macedo Bernardino
 */
import sequelize from '../config/database-connections.js';

class GuardianshipService {

  static async findAll() {
    const objs = await Guardianship.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Guardianship.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async findByTutor(req){
    const { tutor } = req.body;
    const objs = await Guardianship.findAll({ where: { tutorId: tutor.id}, include: { all: true, nested: true }})

    
    return objs;
  }

  static async verificarEspacoTotalTutor(req){ //regra 1
    const { tutor } = req.body;
    const currentTutor = await Tutor.findByPk(tutor.id, { include: { all: true, nested: true }});
    const guardas = await this.findByTutor(req);
    var soma = 0;
    guardas.forEach((guarda) => {
      soma = soma + guarda.dog.breed.dogSize.occupied_size
    })
    if(soma <= currentTutor.space_size){
      return true;  
    }else{
      return false;
    }
  }

  static async totalAdocoesPorTutor(req){
    //regra 2 
    // O tutor só poderá ter no máximo 3 adoções.
    const { tutor } = req.body;
    const totalAdocoesPorTudo = await sequelize.query(`SELECT COUNT(*) AS total_adoptions
    FROM guardianships
    WHERE tutor_id = ${tutor.id};`);

    return totalAdocoesPorTudo[0][0].total_adoptions;
  }

  
  static async create(req) {
    const { date, dog, employee, tutor } = req.body;
    if (date == null) throw 'A data deve ser preenchida!';
    if (dog == null) throw 'O Cachorro deve ser preenchido!';
    if (employee == null) throw 'O funcionário deve ser preenchido!';
    if (tutor == null) throw 'O Tutor deve ser preenchido!';
    const verificarEspacoTotalTutor = await this.verificarEspacoTotalTutor(req);
    const totalAdocoesPorTudo = await this.totalAdocoesPorTutor(req);
    if (!verificarEspacoTotalTutor) throw 'O Tutor não possui espaço suficiente para adotar o cachorro!'; 
    if (totalAdocoesPorTudo > 3) throw 'O Tutor pode ter no máximo três adoções !'
    return await Guardianship.create({date: date, dogId: dog.id, employeeId: employee.id, tutorId:tutor.id}, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { date, dog, employee, tutor } = req.body;
    if (dog == null) throw 'O Cachorro deve ser preenchido!';
    if (employee == null) throw 'O funcionário deve ser preenchido!';
    if (tutor == null) throw 'O Tutor deve ser preenchido!';
    const obj = await Guardianship.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Tutela não encontrada!';
    const t = await sequelize.transaction();
    Object.assign(obj, { date, dogId: dog.id, employeeId: employee.id, tutorId: tutor.id });
    await obj.save();
    return await Guardianship.findByPk(obj.id, { include: { all: true, nested: true}});
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Guardianship.findByPk(id);
    if (obj == null) throw 'Tutela não encontrada!';
    await obj.destroy();
    return obj;
  }
  

 
}
export { GuardianshipService };