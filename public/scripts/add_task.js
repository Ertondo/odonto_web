//omo los datos de los inputs

const formTasktElement = document.querySelector("#formTasktData");
let newEvent = {};

formTasktElement.addEventListener("submit", (e) => {
  const formTaskData = new FormData(formTasktElement);
  e.preventDefault();
  if (e.submitter.id === "btnSaveTask") {
    newEvent.type = formTaskData.get("event_type");
    newEvent.hour = formTaskData.get("hour");
    newEvent.detail = formTaskData.get("detail");
    newEvent.extra = formTaskData.get("extra_detail");
    console.log(newEvent);
  } else if (e.submitter.id === "btnCleanData") {
    console.log(formTaskData.get("detail"));
    formTaskData.reset();
  } else if (e.submitter.id === "btnDeleteTask") {
    alert("btnDeleteGuestW");
    formTaskData.reset();
  }
});

//TODO los muestro en la tabla

//TODO los cargo en un array

//TODO le paso el array al post para tomarlo en la pagina inicial y mostrarlos
