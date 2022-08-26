
function addProject()
{
  let ProjectArr=[];
  let NotInternalStorage=[];
  let ItsAProject=[];
  let highestkey = 0;
  
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
  for(i=0;i<NotInternalStorage.length;i++)
{
  if(parseInt(NotInternalStorage[i])>highestkey)
  {
    highestkey = parseInt(NotInternalStorage[i]);
  }
}
  for(let i=0;i<NotInternalStorage.length;i++)
    {
        let currentOBJ=JSON.parse(localStorage.getItem(NotInternalStorage[i]));
        let currentType=currentOBJ.ProjectType;

        if( currentType  != "Employee" && currentType != "Bug"){
            ItsAProject.push(NotInternalStorage[i]);
          //  console.log("Its a project" +NotInternalStorage[i])
        }
    }
 /* for(i=0; i<ItsAProject.length;i++)
      {
          currentOBJ = JSON.parse(localStorage.getItem(ItsAProject[i]));
       //   console.log(currentOBJ);
          if(currentOBJ.ProjectID >= highestkey){
            highestkey = currentOBJ.ProjectID + 1
          //  console.log("New Id:" + HigestIdNum)
          }
      }*/
      
  //  let storageKey = (localStorage.length+1);
    highestkey++;
    let ProjectNewID = highestkey;
    let ProjectNewName =document.getElementById("ProjectNameAdd").value;
    let ProjectNewDescription =document.getElementById("ProjectShortDescAdd").value;
    let ProjectNewType = "Project";
 

    let keyList =[];
    
      for( let key in localStorage)
      {
        keyList.push(key);
      }
      keyList.sort();
      console.log(keyList)
    let addProject = {ProjectID:ProjectNewID,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType};
 document.getElementById("ProjectList").innerHTML +="<div>" + addProject.ProjectID +"</div>" +  "<div>"+ addProject.ProjectName +"</div>"    +"<div>"+ addProject.ProjectDescription+"</div>"    ;

      
//console.log(storageKey);
    localStorage.setItem(highestkey,JSON.stringify(addProject));
    console.log(localStorage)
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



