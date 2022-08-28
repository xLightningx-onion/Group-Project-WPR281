function editEmployee(EmployeeID) {
  //console.log(EmployeeID);
  document.getElementById("EmployeeEdit").className = "content";
  document.getElementById("Employees").className = "hide";
  //console.log(document.getElementById("EmployeeEdit").className);
  document.getElementById("7").className = "";

  let EmployeeIdToUpdate = EmployeeID;
  let EmployeeNameToUpdate;
  let EmployeeLastNameToUpdate;
  let EmployeeEmailToUpdate;
  let EmployeeUserNameToUpdate;

  let EmployeeArray = EmployeeList();
  console.log(EmployeeArray);

  for (let i = 0; i < EmployeeArray.length; i++) {
    //console.log(EmployeeID);
    currentOBJ = JSON.parse(localStorage.getItem(EmployeeArray[i]));
    //console.log(currentOBJ);
    if (currentOBJ.EmployeeID == EmployeeIdToUpdate) {
      EmployeeNameToUpdate = currentOBJ.EmployeeFirstName;
      EmployeeLastNameToUpdate = currentOBJ.EmployeeLastName;
      EmployeeEmailToUpdate = currentOBJ.EmployeeEmail;
      EmployeeUserNameToUpdate = currentOBJ.EmployeeUsername;
    }
  }
  document.getElementById("EmployeeIdUpdate").innerHTML = EmployeeIdToUpdate;
  document.getElementById("EmployeeFirstNameToUpdate").value =
    EmployeeNameToUpdate;
  document.getElementById("EmployeeLastNameToUpdate").value =
    EmployeeLastNameToUpdate;
  document.getElementById("EmployeeEmailToUpdate").value =
    EmployeeEmailToUpdate;
  document.getElementById("EmployeeUserNameToUpdate").value =
    EmployeeUserNameToUpdate;
}

function BackToEmployees() {
  document.getElementById("EmployeeEdit").className = "hide";
  document.getElementById("Employees").className = "content";

  document.getElementById("7").className = "active";
}
function UpdateEmployee() {
  let EmpNumber = document.getElementById("EmployeeIdUpdate").innerHTML;

  currentOBJ = JSON.parse(localStorage.getItem(EmpNumber));

  currentOBJ.EmployeeFirstName = document.getElementById(
    "EmployeeFirstNameToUpdate"
  ).value;
  currentOBJ.EmployeeLastName = document.getElementById(
    "EmployeeLastNameToUpdate"
  ).value;
  currentOBJ.EmployeeEmail = document.getElementById(
    "EmployeeEmailToUpdate"
  ).value;
  currentOBJ.EmployeeUsername = document.getElementById(
    "EmployeeUserNameToUpdate"
  ).value;

  localStorage.removeItem(EmpNumber);

  localStorage.setItem(EmpNumber, JSON.stringify(currentOBJ));

  location.reload();
}
