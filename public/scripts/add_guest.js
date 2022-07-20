const formElement = document.getElementById("formGuestData");
// const btnSaveGuest = document.querySelector("btnSaveGuest");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  let formGuestData = new FormData(formElement);
  let guestDataArray = [];
  if (e.submitter.id === "erase") {
    console.log("press Cancel");
  } else {
    guestDataArray.push(formGuestData.get("dni"));
    guestDataArray.push(formGuestData.get("name"));
    guestDataArray.push(formGuestData.get("street"));
    guestDataArray.push(formGuestData.get("location"));
    guestDataArray.push(formGuestData.get("email"));
    guestDataArray.push(formGuestData.get("os"));

    insertRowInTable(guestDataArray);
  }
});

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
    console.log(e.target.parentNode.parentNode.remove());
  });

  formGuestData.reset();
}
