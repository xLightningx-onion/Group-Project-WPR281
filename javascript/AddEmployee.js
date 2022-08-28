function addEmployeeDetails() {
  let highestkey = NewKey();

  let EmployeeNewID = highestkey;
  let EmployeeNewFirstName = document.getElementById(
    "EmployeeFirstNameAdd"
  ).value;
  let EmployeeNewLastName = document.getElementById(
    "EmployeeLastNameAdd"
  ).value;
  let EmployeeNewEmail = document.getElementById("EmployeeEmailAdd").value;
  let EmployeeNewUsername = document.getElementById(
    "EmployeeUserNameAdd"
  ).value;
  let EmployeeNewPhoto = document.getElementById("EmployeeProfilePicAdd").value;
  let ProjectNewType = "Employee";

  let addEmployee = {
    EmployeeID: EmployeeNewID,
    EmployeeFirstName: EmployeeNewFirstName,
    EmployeeLastName: EmployeeNewLastName,
    EmployeeEmail: EmployeeNewEmail,
    EmployeeUsername: EmployeeNewUsername,
    EmployeePhoto: EmployeeNewPhoto,
    ProjectType: ProjectNewType,
  };

  localStorage.setItem(highestkey, JSON.stringify(addEmployee));
  PopulatePage();
}
