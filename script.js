document.addEventListener("DOMContentLoaded", (event) => {
  const formElement = document.getElementById("form");
  const tableBody = document.querySelector("#dataTable tbody");
  const clearTableButton = document.getElementById("clearTable");
  const birthdateInput = document.getElementById("birthdate");

  const today = new Date().toISOString().split("T")[0];
  birthdateInput.setAttribute("max", today);

  formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const phoneNumber = document.getElementById("phone").value;
    const datebirth = birthdateInput.value;

    const entry = {
      firstName,
      lastName,
      phoneNumber,
      datebirth,
    };

    let entries = JSON.parse(localStorage.getItem("formData")) || [];
    entries.push(entry);
    localStorage.setItem("formData", JSON.stringify(entries));

    addRowToTable(entry);
    formElement.reset();
  });

  function addRowToTable(entry) {
    const row = tableBody.insertRow();
    row.insertCell(0).innerText = tableBody.rows.length;
    row.insertCell(1).innerText = entry.firstName;
    row.insertCell(2).innerText = entry.lastName;
    row.insertCell(3).innerText = entry.phoneNumber;
    row.insertCell(4).innerText = entry.datebirth;
  }

  function loadTableData() {
    const entries = JSON.parse(localStorage.getItem("formData")) || [];
    tableBody.innerHTML = "";
    entries.forEach((entry) => {
      addRowToTable(entry);
    });
  }

  clearTableButton.addEventListener("click", function () {
    localStorage.clear();
    tableBody.innerHTML = "";
  });

  loadTableData();
});
