function showProject(projectID){
    let projectIdToDisplay = projectID;
    let BugArray = [];
    document.getElementById("ProjectInfo").className = "content";
    document.getElementById("Projects").className = "hide";
    document.getElementById("1").className = "";

    document.getElementById("ProjectInfoWrapper").innerHTML = "";

            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4>Bug Id</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>Bug Name</div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>Short Description</div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>long Description</div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>Employee Assigned</div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>Found By</div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>Date Found</div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>Status</div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>Priority</div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>Target Date</div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>Actual Date</div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='table-header Border'><h4></h4>Resolution Summary</div>";


    BugArray = BugList();
    for(i=0; i<BugArray.length;i++)
    {
        currentOBJ = JSON.parse(localStorage.getItem(BugArray[i]));
        if(currentOBJ.ProjectId == projectIdToDisplay){
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding projectIDhover' onclick='ShowBugPage("+currentOBJ.BugId+")'><h4>"+currentOBJ.BugId+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.BugName+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.BugShortDesc+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.BugLongDesc+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.BugAssignedEmployee+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.BugFoundBy+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.BugDateFound+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.ProjectStatus+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.ProjectPriority+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.BugTargetDate+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.BugActualDate+"</h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='Border padding'><h4>"+currentOBJ.BugResolutionSummary+"</h4></div>"; 
        }   
    }
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><h4></h4></div>";
            document.getElementById("ProjectInfoWrapper").innerHTML += "<div class='noBorder'><button class='backToBoard' type='button' id='backToBoard' onclick='BackToProject()'>Back</button></div>"; 
        
}
function BackToProject(){
    document.getElementById("ProjectInfo").className = "hide";
    document.getElementById("Projects").className = "content";
    document.getElementById("1").className = "active";
}