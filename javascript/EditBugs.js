function editbugs(bugID){
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
    console.log(bugIDToUpdate);
    let bugArray = BugList();
    console.log(bugArray);
    
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
    
    

    for (let i = 0; i < bugArray.length; i++) {
        currentOBJ = JSON.parse(localStorage.getItem(bugArray[i]));
        console.log(currentOBJ)
        if (bugArray.BugId == bugIDToUpdate) {
            ProjectIdToUpdate = currentOBJ.ProjectId;
            console.log(ProjectIdToUpdate)
            BugNameToUpdate = currentOBJ.BugName;
            ShortDescToUpdate = currentOBJ.BugShortDesc;
            LongDescToUpdate = currentOBJ.BugLongDesc;
            EmpAssignedToUpdate = currentOBJ.BugAssignedEmployee;
            FoundByToUpdate = currentOBJ.BugFoundBy;
            DateFoundToUpdate = currentOBJ.BugDateFound;
            StatusToUpdate = currentOBJ.ProjectStatus;
            PriorityToUpdate = currentOBJ.ProjectPriority;
            TargetDateToUpdate = currentOBJ.BugTargetDate;
            ActualDateToUpdate = currentOBJ.BugActualDate;
            ResolutionSummaryToUpdate = currentOBJ.BugResolutionSummary
        }
        
    }
    

    document.getElementById("ProjectIdTicketUpdate").innerHTML = ProjectIdToUpdate;
    document.getElementById("BugIdTicketUpdate").innerHTML = bugIDToUpdate;
    document.getElementById("BugNameUpdate").innerHTML = BugNameToUpdate;
    document.getElementById("BugShortDescUpdate").innerHTML = ShortDescToUpdate;
    document.getElementById("BugLongDescUpdate").innerHTML = LongDescToUpdate;
    document.getElementById("AssignedEmployeeUpdate").innerHTML = EmpAssignedToUpdate;
    document.getElementById("FoundByUpdate").innerHTML = FoundByToUpdate;
    document.getElementById("DateFoundUpdate").innerHTML = DateFoundToUpdate;
    document.getElementById("StatusUpdate").innerHTML = StatusToUpdate;
    document.getElementById("PriorityUpdate").innerHTML = PriorityToUpdate;
    document.getElementById("TargetDateUpdate").innerHTML = TargetDateToUpdate;
    document.getElementById("ActualDateUpdate").innerHTML = ActualDateToUpdate;
    document.getElementById("ResolutionSummaryUpdate").innerHTML = ResolutionSummaryToUpdate;
    
}