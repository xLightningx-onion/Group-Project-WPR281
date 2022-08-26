function ShowBugPage(BugIDinput){
    let BugIdToShow = BugIDinput;
    let BugArr=[];
    let NotInternalStorage=[];
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
    //console.log("The bug id: " + BugIdToShow)

    //find bugs
    for (key in localStorage)
    {
        BugArr.push(key);
    }
    BugArr.sort();
    //console.log(BugArr);
    for(let i=0;i<=BugArr.length;i++)
    {
        if(isFinite(BugArr[i])){
            NotInternalStorage.push(BugArr[i]);
        }

    }
    for(let i=0;i<NotInternalStorage.length;i++)
    {
        let currentOBJ=JSON.parse(localStorage.getItem(NotInternalStorage[i]));
        let currentType=currentOBJ.ProjectType;

        if( currentType  != "Employee" && currentType != "Project"){
            ItsABug.push(NotInternalStorage[i]);
            //console.log(NotInternalStorage[i])
        }
    }
    //finding projects
    for(let i=0;i<NotInternalStorage.length;i++)
    {
        let currentOBJ=JSON.parse(localStorage.getItem(NotInternalStorage[i]));
        let currentType=currentOBJ.ProjectType;

        if( currentType  != "Employee" && currentType != "Bug"){
            ItsAProject.push(NotInternalStorage[i]);
            //console.log("Its a project" +NotInternalStorage[i])
        }
    }
    //getting bug info
    for(i=0; i<ItsABug.length;i++)
    {
        currentOBJ = JSON.parse(localStorage.getItem(ItsABug[i]));
        //console.log(currentOBJ);
        if(currentOBJ.BugId == BugIdToShow){
            ProjectIdToShow = currentOBJ.ProjectId;
            console.log("does this one work?");
            console.log("project id: " + ProjectIdToShow);
            BugNameToShow = currentOBJ.BugName;
            //console.log(BugNameToShow);
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
            console.log("project name: " + ProjectNameToShow);
        }
    }
    //show info on page
    document.getElementById("BugProjectNameShow").innerHTML = ProjectNameToShow;
    document.getElementById("BugProjectIdShow").innerHTML = ProjectIdToShow;
    document.getElementById("BugNameShow").innerHTML = BugNameToShow;
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