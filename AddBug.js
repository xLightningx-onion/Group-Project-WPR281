function addBug(){

    let storageKey = (localStorage.length+1);

    let BugProjectNewID = document.getElementById("ProjectIdTicketAdd").value;
    let BugNewName = document.getElementById("BugNameAdd").value;
    let BugNewShortDesc = document.getElementById("BugShortDescAdd").value;
    let BugNewLongDesc = document.getElementById("BugLongDescAdd").value;
    let BugNewAssignedEmployeeSelect = document.getElementById("AssignedEmployeeAdd");
    let BugNewAssignedEmployee = BugNewAssignedEmployeeSelect.option[BugNewAssignedEmployeeSelect.SelectedIndex].value;
    let BugNewFoundBy = document.getElementById("FoundByAdd").value;
    let BugNewDateFound = document.getElementById("DateFoundAdd").value;
    let BugNewStatusSelect = document.getElementById("StatusAdd");
    let BugNewStatusValue = BugNewStatusSelect.option[BugNewStatusSelect.SelectedIndex].value;
    let BugNewPrioritySelect = document.getElementById("PriorityAdd");
    let BugNewPriorityValue = BugNewPrioritySelect.option[BugNewPrioritySelect.SelectedIndex].value;
    let BugNewTargetDate = document.getElementById("TargetDateAdd");
    let BugNewActualDate = document.getElementById("ActualDateAdd");
    let BugNewResolutionSummary = document.getElementById("ResolutionSummaryAdd");
    let keyList =[];

    for( let key in localStorage)
      {
        keyList.push(key);
      }
    
    let addBug = {ProjectIdTicket:BugProjectNewID,BugName:BugNewName,
      BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
      AssignedEmployee:BugNewAssignedEmployee,FoundBy:BugNewFoundBy,
      DateFound:BugNewDateFound,Status:BugNewStatusValue,
      Priority:BugNewPriorityValue,TargetDate:BugNewTargetDate,
      ActualDate:BugNewActualDate,ResolutionSummary:BugNewResolutionSummary}
    document.getElementById("BugList").innerHTML += "<div>" + addBug.ProjectIdTicket + "</div>" + 
      "<div>" + addBug.BugName + "</div>" + "<div>" + addBug.BugShortDesc + "</div>" + "<div>" + addBug.BugLongDesc + "</div>" + 
      "<div>" + addBug.AssignedEmployee + "</div>" + "<div>" + addBug.FoundBy + "</div>" + "<div>" + addBug.DateFound + "</div>" + 
      "<div>" + addBug.Status + "</div>" + "<div>" + addBug.Priority + "</div>" + "<div>" + addBug.TargetDate + "</div>" + 
      "<div>" + addBug.ActualDate + "</div>" + "<div>" + addBug.ResolutionSummary + "</div>";
    
    localStorage.setItem(storageKey,JSON.stringify(addBug));

}