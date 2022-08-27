
function DeleteProject(ProjectID){
let ProjArr=ProjectList();
let BugArr=BugList();
 let ProjectDeleteID=ProjectID;
  for(i=0; i<ProjArr.length;i++)
 {
 currentOBJ = JSON.parse(localStorage.getItem(ProjArr[i]));
 if(currentOBJ.ProjectId == ProjectDeleteID)
 {
localStorage.removeItem(currentOBJ.ProjectID);
} 
 }
 
 for(i=0; i<BugArr.length;i++){
 currentOBJ = JSON.parse(localStorage.getItem(BugArr[i]));
 if(currentOBJ.ProjectID == ProjectDeleteID)
 {
 localStorage.removeItem(currentOBJ.BugID);
 }
 }

}

