
function addDays(date, days) {
  const dateCopy = new Date(date);
  //se o dia for 
  dateCopy.setDate(date.getDate()+1 + days);
  return dateCopy;
}
const vacina = {
 'interval' : 1,
 'name': 'AF4@'
}

const dateVaccination = new Date("2023-05-25");

const datePlusInterval = addDays(dateVaccination, vacina['interval']);
const todayDate = new Date(); 
console.log((`Poderá ser vacinado: ${datePlusInterval.toLocaleDateString()}` )); // 2022-05-20T00:00:00.000Z
const teste = todayDate.toLocaleDateString();
if (todayDate > datePlusInterval){
  console.log('\nO cachorro pode ser vacinado');
}else{
  console.log('\nO cachorro não pode receber vacina !!');
}



// static async findVaccinationByVaccineAndDog(req) {
//     const { dog, vaccine } = req.params;
//     const vaccineId = vaccine.id;
//     const dogId = dog.id;
//     const objs = await sequelize.query("SELECT vc.id, vc.date, v.dosage_interval_days FROM Vaccinations vc JOIN Vaccines v ON vc.vaccine_id = v.id WHERE vc.dog_id = :dogId AND vc.vaccine_id = :vaccineId ORDER BY vc.id DESC LIMIT 1", { replacements: { dog_id: dogId, vaccine_id: vaccineId }, type: QueryTypes.SELECT });
//     return objs;
//   }
                                                  //SELECT * FROM Vaccinations, Vaccines WHERE dog_id = :dogId AND vaccine_id = :vaccineId"
                                                  //SELECT vc.id, vc.date, v.dosage_interval_days FROM Vaccinations vc JOIN Vaccines v ON vc.vaccine_id = v.id WHERE vc.dog_id = 1 AND vc.vaccine_id = 1 ORDER BY vc.id DESC LIMIT 1



    //                                               // Regra de Negócio 1: Para vacinar é necessário respeitar os intervalos de dose de cada vacina.
    // const vaccination = await vaccinationService.findVaccinationByVaccineAndDog(req);
    // const vaccinationData = vaccination.date;
    // const vaccineIntervalDays = vaccinationLast.dosage_interval_days;
    // const todayDate = new Date();