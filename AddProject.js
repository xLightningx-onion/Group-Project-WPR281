
function addProject()
{
  let ProjectArr=[];
  let NotInternalStorage=[];
  let ItsAProject=[];
  let HigestIdNum = 0;
  
  //find employees
  for (key in localStorage)
  {
    ProjectArr.push(key);
  }
  ProjectArr.sort();
  //console.log(BugArr);
  for(let i=0;i<=ProjectArr.length;i++)
  {
      if(isFinite(ProjectArr[i])){
          NotInternalStorage.push(ProjectArr[i]);
      }
  
  }
  for(let i=0;i<NotInternalStorage.length;i++)
    {
        let currentOBJ=JSON.parse(localStorage.getItem(NotInternalStorage[i]));
        let currentType=currentOBJ.ProjectType;

        if( currentType  != "Employee" && currentType != "Bug"){
            ItsAProject.push(NotInternalStorage[i]);
            console.log("Its a project" +NotInternalStorage[i])
        }
    }
  for(i=0; i<ItsAProject.length;i++)
      {
          currentOBJ = JSON.parse(localStorage.getItem(ItsAProject[i]));
          console.log(currentOBJ);
          if(currentOBJ.ProjectID >= HigestIdNum){
            HigestIdNum = currentOBJ.ProjectID + 1
            console.log("New Id:" + HigestIdNum)
          }
      }
      
    let storageKey = (localStorage.length+1);
    
    let ProjectNewID = HigestIdNum;
    let ProjectNewName =document.getElementById("ProjectNameAdd").value;
    let ProjectNewDescription =document.getElementById("ProjectShortDescAdd").value;
    let ProjectNewType = "Project";
    let ProjectIDToSort = [];

    let keyList =[];
    
      for( let key in localStorage)
      {
        keyList.push(key);
      }
 
    let addProject = {ProjectID:ProjectNewID,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType};
 document.getElementById("ProjectList").innerHTML +="<div>" + addProject.ProjectID +"</div>" +  "<div>"+ addProject.ProjectName +"</div>"    +"<div>"+ addProject.ProjectDescription+"</div>"    ;

      
//console.log(storageKey);
    localStorage.setItem(storageKey,JSON.stringify(addProject));
    PopulatePage();
   
//console.log(JSON.stringify(addProject));


   // let GetProject = JSON.parse(localStorage.getItem("1"));
  // console.log(GetProject.ProjectName);
  // console.log(GetProject.ProjectID);
  // console.log(GetProject.ProjectDescription);
  // console.log(GetProject.ProjectType);

   // console.log(proID);
   // console.log(proName);
   // console.log(proDesc);
                             
   // console.log(document.getElementById("Projects").innerHTML);
}



