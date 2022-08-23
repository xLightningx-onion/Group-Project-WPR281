
function addProject()
{
  
    let storageKey = (localStorage.length+1);

    let ProjectNewID =document.getElementById("ProjectIdAdd").value;
    let ProjectNewName =document.getElementById("ProjectNameAdd").value;
    let ProjectNewDescription =document.getElementById("ProjectShortDescAdd").value;
    let ProjectNewType = "Project";
    let highestkey = 0;
    let keyList =[];
    
      for( let key in localStorage)
      {
        keyList.push(key);
      }
 
    let addProject = {ProjectID:ProjectNewID,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType};
 document.getElementById("ProjectList").innerHTML +="<div>" + addProject.ProjectID +"</div>" +  "<div>"+ addProject.ProjectName +"</div>"    +"<div>"+ addProject.ProjectDescription+"</div>"    ;
  
//console.log(storageKey);
    localStorage.setItem(storageKey,JSON.stringify(addProject)); 

//console.log(JSON.stringify(addProject));


   // let GetProject = JSON.parse(localStorage.getItem("1"));
  // console.log(GetProject.ProjectName);
  // console.log(GetProject.ProjectID);
  // console.log(GetProject.ProjectDescription);
  // console.log(GetProject.ProjectType);



   // let proID = GetProject.ProjectID;
   // //let proName = GetProject.ProjectName;
   // let proDesc = GetProject.ProjectDescription;
   // console.log(proID);
   // console.log(proName);
   // console.log(proDesc);


                                                
                                               
                                        
   // console.log(document.getElementById("Projects").innerHTML);
}



