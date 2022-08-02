const formElement = document.getElementById("formGuestData");
const btnFindGuest = document.querySelector("#btnFindGuest");
const findBySurname = document.querySelector("#findBySurname");

let guestDataObject = new Object();
let datoArray = [];

//IF PRESS FIND BUTTON
//Trae todos los campos y los guarda en un array de arrays
btnFindGuest.addEventListener("click", (e) => {
  const showGuestInTable = async () => {
    try {
      let response = await fetch("http://localhost:4000/api/newGuestDatatoDB");

      let datos = await response.json();
      console.log(datos);
      datos.forEach((element, i) => {
        datoArray[i] = [
          element.dni,
          element.name,
          element.street,
          element.location,
          element.email,
          element.os,
        ];
      });
    } catch {
      console.log("error");
    }
    //TODO cada ves que busco algo tengo que limpiar la tabla
    //Filtra por nombre segun el input y lo que muestra en la tabla
    datoArray.forEach((element) => {
      if (element[1].includes(findBySurname.value.toUpperCase())) {
        insertRowInTable(element);
      }
    });
  };
  //Llama a la funcion con async
  showGuestInTable();
});

//LISTEN SAVE/CANCEL/ERASE BUTTONS
formElement.addEventListener("submit", (e) => {
  let formGuestData = new FormData(formElement);
  let guestDataArray = [];

  if (e.submitter.id === "btnSaveGuest") {
    //Save fields in an array
    guestDataArray.push(formGuestData.get("dni"));
    guestDataArray.push(formGuestData.get("name"));
    guestDataArray.push(formGuestData.get("street"));
    guestDataArray.push(formGuestData.get("location"));
    guestDataArray.push(formGuestData.get("email"));
    guestDataArray.push(formGuestData.get("os"));

    //Save fields in an object
    guestDataObject.dni = formGuestData.get("dni");
    guestDataObject.name = formGuestData.get("name");
    guestDataObject.street = formGuestData.get("street");
    guestDataObject.location = formGuestData.get("location");
    guestDataObject.email = formGuestData.get("email");
    guestDataObject.birthday = formGuestData.get("birthday");
    guestDataObject.os = formGuestData.get("os");

    //Si guardo un paciente, lo muestro al final de la tabla
    insertRowInTable(guestDataArray);

    e.preventDefault();
    //Mando el objeto via post al backend usando fecth
    sendDataToBackend();

    //---------------------------------------
  } else if (e.submitter.id === "btnFindGuest") {
    console.log("buscar...");
  } else if (e.submitter.id === "btnCleanData") {
    //llamar a funcion que haga input.value=""
  } else if (e.submitter.id === "btnDeleteGuest") {
    alert("btnDeleteGuestW");
    formGuestData.reset();
  }
});

//TODO cambiar el array por el object para cargar los datos en la tabla
function insertRowInTable(guestDataArray) {
  const dataGuestTable = document.getElementById("dataGuestTable");
  const dataGuestTableNewRow = dataGuestTable.insertRow(-1);
  const btnEditGuestData = document.createElement("button");
  const lengthArray = guestDataArray.length;

  for (i = 0; i < lengthArray; i++) {
    let dataGuestTableNewCell = dataGuestTableNewRow.insertCell(i);
    dataGuestTableNewCell.textContent = guestDataArray[i];
  }

  let dataGuestTableNewCell = dataGuestTableNewRow.insertCell(lengthArray);
  btnEditGuestData.textContent = "Editar";
  btnEditGuestData.className = "button is-success is-small";
  dataGuestTableNewCell.appendChild(btnEditGuestData);

  btnEditGuestData.addEventListener("click", (e) => {
    // e.target.parentNode.parentNode.remove();
    console.log(e.target.parentNode.parentNode);
  });

  formGuestData.reset();
}

//Envio los datos del paciente al backend usando async/await
async function sendDataToBackend() {
  //Guardo las opciones del fetch, defino la url y hago el POST
  const url = "http://localhost:4000/api/newGuestDatatoDB";
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(guestDataObject),
  };

  //Envio el nuevo paciente a la DB
  try {
    const resNewGuest = await fetch(url, postOptions);
    await resNewGuest;
    console.log(resNewGuest.status);
  } catch {
    console.log("ERROR POST");
  }
}

//FETCH POST CON PROMESAS
//const requestNewGuest = new Request(url, postOptions);
// const resNewGuest = fetch(requestNewGuest) //hago el post segun los datos de la request
//   .then((res) => res.json()) //si todo va bien...convierte a Json
//   .then((response) => console.log("Success:", response)) //y si sigue todo bien responde
//   .catch((error) => console.error("Error:", error)); //sino manda error
