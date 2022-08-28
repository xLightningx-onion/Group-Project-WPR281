function editbugs(bugID) {
  //console.log(bugID)
  document.getElementById("TicketUpdate").className = "content";
  document.getElementById("ShowBugPage").className = "hide";
  document.getElementById("Bugs").className = "hide";
  document.getElementById("ProjectInfo").className = "hide";
  document.getElementById("Board").className = "hide";

  document.getElementById("1").className = "";
  document.getElementById("2").className = "";
  document.getElementById("3").className = "";
  document.getElementById("4").className = "";
  document.getElementById("5").className = "";
  document.getElementById("6").className = "";

  let bugIDToUpdate = bugID;
  //console.log(bugIDToUpdate);
  let bugArray = BugList();
  //console.log(bugArray);

  let ProjectIdToUpdate = 0;
  let BugNameToUpdate;
  let ShortDescToUpdate;
  let LongDescToUpdate;
  let EmpAssignedToUpdate;
  let FoundByToUpdate;
  let DateFoundToUpdate;
  let StatusToUpdate;
  let PriorityToUpdate;
  let TargetDateToUpdate;
  let ActualDateToUpdate;
  let ResolutionSummaryToUpdate;

  numbersOnlykeyList = NumbersKeyList();

  for (number in numbersOnlykeyList) {
    let currentOBJ = JSON.parse(
      localStorage.getItem(parseInt(numbersOnlykeyList[number]))
    );
    let currentType = currentOBJ.ProjectType;
    if (currentType == "Employee") {
      document.getElementById("AssignedEmployeeUpdate").innerHTML +=
        "<option value='" +
        currentOBJ.EmployeeUsername +
        "'>" +
        currentOBJ.EmployeeUsername +
        "</option>";
    }
  }

  for (let i = 0; i < bugArray.length; i++) {
    currentOBJ = JSON.parse(localStorage.getItem(bugArray[i]));
    //console.log(currentOBJ)
    if (currentOBJ.BugId == bugIDToUpdate) {
      ProjectIdToUpdate = currentOBJ.ProjectId;
      //console.log(ProjectIdToUpdate);
      BugNameToUpdate = currentOBJ.BugName;
      //console.log(BugNameToUpdate);
      ShortDescToUpdate = currentOBJ.BugShortDesc;
      //console.log(ShortDescToUpdate);
      LongDescToUpdate = currentOBJ.BugLongDesc;
      //console.log(LongDescToUpdate);
      EmpAssignedToUpdate = currentOBJ.BugAssignedEmployee;
      //console.log(EmpAssignedToUpdate);
      FoundByToUpdate = currentOBJ.BugFoundBy;
      //console.log(FoundByToUpdate);
      DateFoundToUpdate = currentOBJ.BugDateFound;
      //console.log(DateFoundToUpdate);
      StatusToUpdate = currentOBJ.ProjectStatus;
      //console.log(StatusToUpdate);
      PriorityToUpdate = currentOBJ.ProjectPriority;
      //console.log(PriorityToUpdate);
      TargetDateToUpdate = currentOBJ.BugTargetDate;
      //console.log(TargetDateToUpdate);
      ActualDateToUpdate = currentOBJ.BugActualDate;
      //console.log(ActualDateToUpdate);
      ResolutionSummaryToUpdate = currentOBJ.BugResolutionSummary;
      //console.log(ResolutionSummaryToUpdate);
    }
  }

  document.getElementById("ProjectIdTicketUpdate").innerHTML =
    ProjectIdToUpdate;
  document.getElementById("BugIdTicketUpdate").innerHTML = bugIDToUpdate;
  document.getElementById("BugNameUpdate").value = BugNameToUpdate;
  document.getElementById("BugShortDescUpdate").innerHTML = ShortDescToUpdate;
  document.getElementById("BugLongDescUpdate").innerHTML = LongDescToUpdate;
  document.getElementById("AssignedEmployeeUpdate").value = EmpAssignedToUpdate;
  document.getElementById("FoundByUpdate").value = FoundByToUpdate;
  document.getElementById("DateFoundUpdate").value = DateFoundToUpdate;
  document.getElementById("StatusUpdate").value = StatusToUpdate;
  document.getElementById("PriorityUpdate").value = PriorityToUpdate;
  document.getElementById("TargetDateUpdate").value = TargetDateToUpdate;
  document.getElementById("ActualDateUpdate").value = ActualDateToUpdate;
  document.getElementById("ResolutionSummaryUpdate").innerHTML =
    ResolutionSummaryToUpdate;
}
function UpdateBugs() {
  let BugNumber = document.getElementById("BugIdTicketUpdate").innerHTML;

  currentOBJ = JSON.parse(localStorage.getItem(BugNumber));
  currentOBJ.ProjectId;

  currentOBJ.BugName = document.getElementById("BugNameUpdate").value;
  currentOBJ.BugShortDesc = document.getElementById("BugShortDescUpdate").value;
  currentOBJ.BugLongDesc = document.getElementById("BugLongDescUpdate").value;
  currentOBJ.BugAssignedEmployee = document.getElementById(
    "AssignedEmployeeUpdate"
  ).value;
  currentOBJ.BugFoundBy = document.getElementById("FoundByUpdate").value;
  currentOBJ.BugDateFound = document.getElementById("DateFoundUpdate").value;
  currentOBJ.ProjectStatus = document.getElementById("StatusUpdate").value;
  currentOBJ.ProjectPriority = document.getElementById("PriorityUpdate").value;
  currentOBJ.BugTargetDate = document.getElementById("TargetDateUpdate").value;
  currentOBJ.BugActualDate = document.getElementById("ActualDateUpdate").value;
  currentOBJ.BugResolutionSummary = document.getElementById(
    "ResolutionSummaryUpdate"
  ).value;
  //console.log(BugNumber)
  localStorage.removeItem(BugNumber);
  //console.log(localStorage)
  localStorage.setItem(BugNumber, JSON.stringify(currentOBJ));
  //console.log(localStorage)
  location.reload();
}
