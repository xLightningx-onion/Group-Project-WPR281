
function addProject()
{
  let NotInternalStorage=[];
  let ItsAProject=[];
  let highestkey = NewKey();

NotInternalStorage = NumbersKeyList();
  for(let i=0;i<NotInternalStorage.length;i++)
    {
        let currentOBJ=JSON.parse(localStorage.getItem(NotInternalStorage[i]));
        let currentType=currentOBJ.ProjectType;

        if( currentType  != "Employee" && currentType != "Bug"){
            ItsAProject.push(NotInternalStorage[i]);
        }
    }

    let ProjectNewID = highestkey;
    let ProjectNewName =document.getElementById("ProjectNameAdd").value;
    let ProjectNewDescription =document.getElementById("ProjectShortDescAdd").value;
    let ProjectNewType = "Project";

    let addProject = {ProjectID:ProjectNewID,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType};
 document.getElementById("ProjectList").innerHTML +="<div>" + addProject.ProjectID +"</div>" +  "<div>"+ addProject.ProjectName +"</div>"    +"<div>"+ addProject.ProjectDescription+"</div>"    ;

    localStorage.setItem(highestkey,JSON.stringify(addProject));
    console.log(localStorage)
    PopulatePage();

}



