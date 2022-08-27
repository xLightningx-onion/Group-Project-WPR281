function ShowBugPage(BugIDinput){
    let BugIdToShow = BugIDinput;
    let ItsABug=[];
    let ItsAProject=[];
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
    document.getElementById("Board").className = "hide";
    document.getElementById("2").className = "";

    ItsABug = BugList();

    ItsAProject = ProjectList();

    //getting bug info
    for(i=0; i<ItsABug.length;i++)
    {
        currentOBJ = JSON.parse(localStorage.getItem(ItsABug[i]));
        if(currentOBJ.BugId == BugIdToShow){
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
            ResolutionSummaryToShow = currentOBJ.BugResolutionSummary
        }
    }
    //getting project info
    for(i=0; i<ItsAProject.length;i++){
        currentOBJ = JSON.parse(localStorage.getItem(ItsAProject[i]));
        if(currentOBJ.ProjectID == ProjectIdToShow){
            ProjectNameToShow = currentOBJ.ProjectName;
        }
    }
    //show info on page
    document.getElementById("BugProjectNameShow").innerHTML = ProjectNameToShow;
    document.getElementById("BugProjectIdShow").innerHTML = ProjectIdToShow;
    document.getElementById("BugNameShow").innerHTML = BugNameToShow;
    document.getElementById("BugnameDisplay").innerHTML = BugNameToShow;
    document.getElementById("BugIDShow").innerHTML = BugIdToShow;
    document.getElementById("BugShortDescriptionShow").innerHTML = ShortDescToShow;
    document.getElementById("BugLongDescriptionShow").innerHTML = LongDescToShow;
    document.getElementById("BugEmployeeAssignedShow").innerHTML = EmpAssignedToShow;
    document.getElementById("BugFoundByShow").innerHTML = FoundByToShow;
    document.getElementById("BugDateFoundShow").innerHTML = DateFoundToShow;
    document.getElementById("BugStatusShow").innerHTML = StatusToShow;
    document.getElementById("BugPriorityShow").innerHTML = PriorityToShow;
    document.getElementById("BugTargetDateShow").innerHTML = TargetDateToShow;
    document.getElementById("BugActualDateShow").innerHTML = ActualDateToShow;
    document.getElementById("BugResolutionSummaryShow").innerHTML = ResolutionSummaryToShow;

}
function BackToBoard(){
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("Board").className = "content";
    document.getElementById("2").className = "active";
}