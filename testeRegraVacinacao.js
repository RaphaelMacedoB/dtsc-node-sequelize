
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

