//Funcion que setea la fecha actual con formato "{dia} de {mes en letras} de {año}"

function getCurrentDate() {
  //To show dates in nice form
  const meses = new Array(
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  );
  let date = new Date();
  let currentDate = `${date.getDate()} de ${
    meses[date.getMonth()]
  } de ${date.getFullYear()}`;
  return currentDate;
}

module.exports = { getCurrentDate };
