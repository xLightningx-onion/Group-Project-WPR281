function EditProject(ProjectID){
    document.getElementById("ProjectEdit").className = "content"; 
    document.getElementById("ProjectInfo").className = "hide";

    let ProjectIdToUpdate = ProjectID;
    let ProjectNameToUpdate;
    let ProjectShortDescToUpdate;
    let ProjectArr = [];

    ProjectArr = ProjectList();

    for (let i = 0; i < ProjectArr.length; i++) {
        currentOBJ = JSON.parse(localStorage.getItem(ProjectArr[i]));
        if(currentOBJ.ProjectID == ProjectIdToUpdate){
            ProjectNameToUpdate = currentOBJ.ProjectName;
            ProjectShortDescToUpdate = currentOBJ.ProjectDescription
        }
    }
    document.getElementById("ProjectIDToUpdate").innerHTML = ProjectShortDescToUpdate;
    document.getElementById("ProjectNameToUpdate").value = ProjectNameToUpdate;
    document.getElementById("ProjectShortDescToUpdate").innerHTML = ProjectShortDescToUpdate;


}
function BackToProjectInfo(){
    document.getElementById("ProjectEdit").className = "hide"; 
    document.getElementById("ProjectInfo").className = "content";
}
function UpdateProject(){

}