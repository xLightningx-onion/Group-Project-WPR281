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
    document.getElementById("ProjectIDToUpdate").innerHTML = ProjectIdToUpdate;
    document.getElementById("ProjectNameToUpdate").value = ProjectNameToUpdate;
    document.getElementById("ProjectShortDescToUpdate").innerHTML = ProjectShortDescToUpdate;


}
function BackToProjectInfo(){
    document.getElementById("ProjectEdit").className = "hide"; 
    document.getElementById("ProjectInfo").className = "content";
}
function UpdateProject(){
    let ProjectNumber = document.getElementById('ProjectIDToUpdate').innerHTML;

    currentOBJ = JSON.parse(localStorage.getItem(ProjectNumber));

    currentOBJ.ProjectName = document.getElementById("ProjectNameToUpdate").value;
    currentOBJ.ProjectDescription = document.getElementById("ProjectShortDescToUpdate").value;
    

    localStorage.removeItem(ProjectNumber);

    localStorage.setItem(ProjectNumber,JSON.stringify(currentOBJ));

    location.reload();
}