function ShowBugPage(BugIDinput) {
  let BugIdToShow = BugIDinput;
  let ItsABug = [];
  let ItsAProject = [];
  let ProjectIdToShow = 0;
  let BugNameToShow;
  let ShortDescToShow;
  let LongDescToShow;
  let EmpAssignedToShow;
  let FoundByToShow;
  let DateFoundToShow;
  let StatusToShow;
  let PriorityToShow;
  let TargetDateToShow;
  let ActualDateToShow;
  let ResolutionSummaryToShow;
  let ProjectNameToShow;

  //show bug info page
  document.getElementById("ShowBugPage").className = "content";
  document.getElementById("Bugs").className = "hide";
  document.getElementById("ProjectInfo").className = "hide";
  document.getElementById("Board").className = "hide";

  document.getElementById("1").className = "";
  document.getElementById("2").className = "";
  document.getElementById("3").className = "";
  document.getElementById("4").className = "";
  document.getElementById("5").className = "";
  document.getElementById("6").className = "";

  ItsABug = BugList();

  ItsAProject = ProjectList();

  currentOBJ = JSON.parse(localStorage.getItem(BugIDinput));
  ProjectIdToShow = currentOBJ.ProjectId;
  BugNameToShow = currentOBJ.BugName;
  ShortDescToShow = currentOBJ.BugShortDesc;
  LongDescToShow = currentOBJ.BugLongDesc;
  EmpAssignedToShow = currentOBJ.BugAssignedEmployee;
  FoundByToShow = currentOBJ.BugFoundBy;
  DateFoundToShow = currentOBJ.BugDateFound;
  StatusToShow = currentOBJ.ProjectStatus;
  PriorityToShow = currentOBJ.ProjectPriority;
  TargetDateToShow = currentOBJ.BugTargetDate;
  ActualDateToShow = currentOBJ.BugActualDate;
  ResolutionSummaryToShow = currentOBJ.BugResolutionSummary;

  currentProject = JSON.parse(localStorage.getItem(currentOBJ.ProjectId));
  ProjectNameToShow = currentProject.ProjectName;

  //clearButtons
  document.getElementById("bug-button-wrapper").innerHTML = "";
  //show info on page

  document.getElementById("BugProjectNameShow").innerHTML = ProjectNameToShow;
  document.getElementById("BugProjectIdShow").innerHTML = ProjectIdToShow;
  document.getElementById("BugNameShow").innerHTML = BugNameToShow;
  document.getElementById("BugnameDisplay").innerHTML = BugNameToShow;
  document.getElementById("BugIDShow").innerHTML = BugIdToShow;
  document.getElementById("BugShortDescriptionShow").innerHTML =
    ShortDescToShow;
  document.getElementById("BugLongDescriptionShow").innerHTML = LongDescToShow;
  document.getElementById("BugEmployeeAssignedShow").innerHTML =
    EmpAssignedToShow;
  document.getElementById("BugFoundByShow").innerHTML = FoundByToShow;
  document.getElementById("BugDateFoundShow").innerHTML = DateFoundToShow;
  document.getElementById("BugStatusShow").innerHTML = StatusToShow;
  document.getElementById("BugPriorityShow").innerHTML = PriorityToShow;
  document.getElementById("BugTargetDateShow").innerHTML = TargetDateToShow;
  document.getElementById("BugActualDateShow").innerHTML = ActualDateToShow;
  document.getElementById("BugResolutionSummaryShow").innerHTML =
    ResolutionSummaryToShow;

  document.getElementById("bug-button-wrapper").innerHTML +=
    "<button class='backToBoard' type='button' id='backToBoard' onclick='editbugs(" +
    BugIdToShow +
    ")'>Update</button>" +
    "<button class='backToBoard' type='button' id='backToBoard' onclick='BackToBoard()'>Back</button>";
}
function BackToBoard() {
  document.getElementById("ShowBugPage").className = "hide";
  document.getElementById("Board").className = "content";
  document.getElementById("2").className = "active";
}
