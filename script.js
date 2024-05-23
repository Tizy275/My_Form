const form = document.getElementById("form");

function onSubmit(e) {
  e.preventDefault();
  
  const labelInputfname = document.getElementById("firstname").value;
  const labelInputlname = document.getElementById("lastname").value;
  const labelInputphone = document.getElementById("phone").value;
  const labelInputbirthdate = document.getElementById("birthdate").value;
  const buttons = document.getElementById("submit");
  
  console.log(
    labelInputfname,
    labelInputlname,
    labelInputphone,
    labelInputbirthdate
  );
}
form.addEventListener("submit", onSubmit);