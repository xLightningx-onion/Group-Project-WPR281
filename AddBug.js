


function addBug(){

    let BugProjectNewID = document.getElementById("ProjectIdTicketAdd").value;
    let BugNewName = document.getElementById("BugNameAdd").value;
    let BugNewShortDesc = document.getElementById("BugShortDescAdd").value;
    let BugNewLongDesc = document.getElementById("BugLongDescAdd").value;
    let BugNewAssignedEmployee = document.getElementById("AssignedEmployeeAdd").value;
    let BugNewFoundBy = document.getElementById("FoundByAdd").value;
    let BugNewDateFound = document.getElementById("DateFoundAdd").value;
    let BugNewStatusValue = document.getElementById("StatusAdd").value;
    let BugNewPriorityValue = document.getElementById("PriorityAdd").value;
    let BugNewTargetDate = document.getElementById("TargetDateAdd").value;
    let BugNewActualDate = document.getElementById("ActualDateAdd").value;
    let BugNewResolutionSummary = document.getElementById("ResolutionSummaryAdd").value;
       ProjectNewType = "Bug";

       let highestkey =NewKey();

    let addBug = {BugId:highestkey,ProjectId:BugProjectNewID,BugName:BugNewName,
      BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
      BugAssignedEmployee:BugNewAssignedEmployee,BugFoundBy:BugNewFoundBy,
      BugDateFound:BugNewDateFound,ProjectStatus:BugNewStatusValue,
      ProjectPriority:BugNewPriorityValue,BugTargetDate:BugNewTargetDate,
      BugActualDate:BugNewActualDate,BugResolutionSummary:BugNewResolutionSummary,
      ProjectType:ProjectNewType};

     currentOBJ = addBug;
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugId+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugName+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugShortDesc+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugLongDesc+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugAssignedEmployee+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugFoundBy+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugDateFound+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.ProjectStatus+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.Priority+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugTargetDate+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugActualDate+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugResolutionSummary+"</h4></div>";
    localStorage.setItem(highestkey,JSON.stringify(addBug));

    BoardSorting();
}