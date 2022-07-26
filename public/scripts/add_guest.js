const formElement = document.getElementById("formGuestData");
let guestDataObject = new Object();
// const btnSaveGuest = document.querySelector("btnSaveGuest");

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

    insertRowInTable(guestDataArray, guestDataObject);

    e.preventDefault();
    //Mando el objeto via post al backend usando fecth
    console.log(JSON.stringify(guestDataObject));
<<<<<<< HEAD
    fetch("http://localhost:3000/newGuestDatatoDB", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(guestDataObject), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
=======

    sendDataToBackend();

    //---------------------------------------
>>>>>>> ff8d20e (created backend and frontend folders and i beginded with comunication betwen it to save data in db)
  } else if (e.submitter.id === "btnCleanData") {
    formGuestData.reset();
  } else if (e.submitter.id === "btnDeleteGuest") {
    alert("btnDeleteGuestW");
    formGuestData.reset();
  }
});

//TODO cambiar el array por el object para cargar los datos en la tabla
function insertRowInTable(guestDataArray, guestDataObject) {
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
    e.target.parentNode.parentNode.remove();
  });
  console.log(guestDataObject);
  formGuestData.reset();
}

//Envio los datos del paciente al backend
function sendDataToBackend() {
  //Guardo las opciones del fetch, defino la url luego las opciones y armo la request para el fetch
  const url = "http://localhost:4000/api/newGuestDatatoDB";
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(guestDataObject),
  };
  const requestNewGuest = new Request(url, postOptions);
  //
  const resNewGuest = fetch(requestNewGuest)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
}
