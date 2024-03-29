function BoardSorting() {
  let HighPriority = [];
  let LowPriority = [];
  let MediumPriority = [];
  let NotInternalStorage = [];
  let NotEmployee = [];

  document.getElementById("col1").innerHTML =
    "<div class='col-header'><h4>TO DO</h4></div>";
  document.getElementById("col2").innerHTML =
    "<div class='col-header'><h4>IN PROGRESS</h4></div>";
  document.getElementById("col3").innerHTML =
    "<div class='col-header'><h4>IN REVIEW</h4></div>";
  document.getElementById("col4").innerHTML =
    "<div class='col-header'><h4>DONE</h4></div>";

  NotInternalStorage = NumbersKeyList();

  for (let i = 0; i < NotInternalStorage.length; i++) {
    let currentOBJ = JSON.parse(localStorage.getItem(NotInternalStorage[i]));
    let currentType = currentOBJ.ProjectType;
    if (currentType != "Employee") {
      NotEmployee.push(NotInternalStorage[i]);
    }
  }

  for (let i = 0; i < NotEmployee.length; i++) {
    let currentOBJ = JSON.parse(localStorage.getItem(NotEmployee[i]));
    let currentType = currentOBJ.ProjectPriority;

    if (currentType == "High") {
      HighPriority.push(NotEmployee[i]);
    } else if (currentType == "Medium") {
      MediumPriority.push(NotEmployee[i]);
    } else if (currentType == "Low") {
      LowPriority.push(NotEmployee[i]);
    }
  }
  PaintColumn(HighPriority);
  PaintColumn(MediumPriority);
  PaintColumn(LowPriority);
}

function PaintColumn(ArrObjects) {
  let currStatus;
  let currentType;

  for (i = 0; i < ArrObjects.length; i++) {
    currentOBJ = JSON.parse(localStorage.getItem(ArrObjects[i]));

    currStatus = currentOBJ.ProjectStatus;
    currentType = currentOBJ.ProjectType;
    if (currStatus == "todo" && currentType != "Project") {
      let currentColumn = document.getElementById("col1");
      currentColumn.innerHTML +=
        "<div class='projects-wrapper' id='projectsWrapper' name='projectsWrapper' >" +
        "<div class='on_bug_move'>" +
        "<button class='move' id='delete-bug' onclick='delete_project(" +
        currentOBJ.BugId +
        ")'> Delete </button>" +
        "<button class='delete' id='move-bug' onclick='move_project(" +
        currentOBJ.BugId +
        ")'> Approve </button>" +
        "</div>" +
        "<div class='project-info' id='projectInfo' name='projectInfo' onclick='ShowBugPage(" +
        currentOBJ.BugId +
        ")'>" +
        "<div class='project-header' id='projectHeader' name='projectHeader'>" +
        "<h3 id='ProjectName'>" +
        currentOBJ.BugName +
        "</h3></div><div class='project-body' id='ProjectBody' name='ProjectBody'>" +
        "<p class='projectDesc' id='projectDesc'>" +
        currentOBJ.BugLongDesc +
        "</p></div><div class='four-col-grid status-bar'><div class='Status'>" +
        "<img src='./images/reported.png' alt=''></div><div class='Error'>" +
        "<img src='./images/buglogo.png' alt=''></div><div class='Ticket'><p id='TicketID'>" +
        currentOBJ.BugId +
        "</p>" +
        "</div><div class='employee'><img src='./images/employee2.jpg' alt=''></div>" +
        "<div class='clear'></div>" +
        "</div></div></div>";
    } else if (currStatus == "progress" && currentType != "Project") {
      let currentColumn = document.getElementById("col2");
      currentColumn.innerHTML +=
        "<div class='projects-wrapper' id='projectsWrapper' name='projectsWrapper'>" +
        "<div class='on_bug_move'>" +
        "<button class='move' id='send-back-bug' onclick='send_back_project(" +
        currentOBJ.BugId +
        ")'>Send back</button>" +
        "<button class='move' id='delete-bug' onclick='delete_project(" +
        currentOBJ.BugId +
        ")'> Delete </button>" +
        "<button class='delete' id='move-bug' onclick='move_project(" +
        currentOBJ.BugId +
        ")'> Approve </button>" +
        "</div>" +
        "<div class='project-info' id='projectInfo' name='projectInfo' onclick='ShowBugPage(" +
        currentOBJ.BugId +
        ")'>" +
        "<div class='project-header' id='projectHeader' name='projectHeader'>" +
        "<h3 id='ProjectName'>" +
        currentOBJ.BugName +
        "</h3></div><div class='project-body' id='ProjectBody' name='ProjectBody'>" +
        "<p class='projectDesc' id='projectDesc'>" +
        currentOBJ.BugLongDesc +
        "</p></div><div class='four-col-grid status-bar'><div class='Status'>" +
        "<img src='./images/reported.png' alt=''></div><div class='Error'>" +
        "<img src='./images/buglogo.png' alt=''></div><div class='Ticket'><p id='TicketID'>" +
        currentOBJ.BugId +
        "</p>" +
        "</div><div class='employee'><img src='./images/employee2.jpg' alt=''></div>" +
        "<div class='clear'></div>" +
        "</div></div></div>";
    } else if (currStatus == "review" && currentType != "Project") {
      let currentColumn = document.getElementById("col3");
      currentColumn.innerHTML +=
        "<div class='projects-wrapper' id='projectsWrapper' name='projectsWrapper'>" +
        "<div class='on_bug_move'>" +
        "<button class='move' id='send-back-bug' onclick='send_back_project(" +
        currentOBJ.BugId +
        ")'>Send back</button>" +
        "<button class='move' id='delete-bug' onclick='delete_project(" +
        currentOBJ.BugId +
        ")'> Delete </button>" +
        "<button class='delete' id='move-bug' onclick='move_project(" +
        currentOBJ.BugId +
        ")'> Approve </button>" +
        "</div>" +
        "<div class='project-info' id='projectInfo' name='projectInfo' onclick='ShowBugPage(" +
        currentOBJ.BugId +
        ")'>" +
        "<div class='project-header' id='projectHeader' name='projectHeader'>" +
        "<h3 id='ProjectName'>" +
        currentOBJ.BugName +
        "</h3></div><div class='project-body' id='ProjectBody' name='ProjectBody'>" +
        "<p class='projectDesc' id='projectDesc'>" +
        currentOBJ.BugLongDesc +
        "</p></div><div class='four-col-grid status-bar'><div class='Status'>" +
        "<img src='./images/reported.png' alt=''></div><div class='Error'>" +
        "<img src='./images/buglogo.png' alt=''></div><div class='Ticket'><p id='TicketID'>" +
        currentOBJ.BugId +
        "</p>" +
        "</div><div class='employee'><img src='./images/employee2.jpg' alt=''></div>" +
        "<div class='clear'></div>" +
        "</div></div></div>";
    } else if (currStatus == "done" && currentType != "Project") {
      let currentColumn = document.getElementById("col4");
      currentColumn.innerHTML +=
        "<div class='projects-wrapper' id='projectsWrapper' name='projectsWrapper'>" +
        "<div class='on_bug_move'>" +
        "<button class='move' id='send-back-bug' onclick='send_back_project(" +
        currentOBJ.BugId +
        ")'>Send back</button>" +
        "<button class='move' id='delete-bug' onclick='delete_project(" +
        currentOBJ.BugId +
        ")'> Delete </button>" +
        "</div>" +
        "<div class='project-info' id='projectInfo' name='projectInfo' onclick='ShowBugPage(" +
        currentOBJ.BugId +
        ")'>" +
        "<div class='project-header' id='projectHeader' name='projectHeader'>" +
        "<h3 id='ProjectName'>" +
        currentOBJ.BugName +
        "</h3></div><div class='project-body' id='ProjectBody' name='ProjectBody'>" +
        "<p class='projectDesc' id='projectDesc'>" +
        currentOBJ.BugLongDesc +
        "</p></div><div class='four-col-grid status-bar'><div class='Status'>" +
        "<img src='./images/reported.png' alt=''></div><div class='Error'>" +
        "<img src='./images/buglogo.png' alt=''></div><div class='Ticket'><p id='TicketID'>" +
        currentOBJ.BugId +
        "</p>" +
        "</div><div class='employee'><img src='./images/employee2.jpg' alt=''></div>" +
        "<div class='clear'></div>" +
        "</div></div></div>";
    }
  }
}
