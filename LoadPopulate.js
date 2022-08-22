
let ProjectNewID;
let ProjectNewName;
let ProjectNewDescription ;
let ProjectNewStatus;
let ProjectNewType;
let addProjectLoad;
let populateOnce;
function Populate()
{
      
       populateOnce = localStorage.getItem("FirstLoad");
        if(populateOnce ==null)
       { 
  
             localStorage.clear();
        localStorage.setItem('FirstLoad','Done');

   

ProjectNewStatus = "todo";
ProjectNewID = 1;
ProjectNewName = "Button";
ProjectNewDescription="Ensure Alignment of all buttons" ;
ProjectNewType = "Project";
addProjectLoad = {ProjectID:ProjectNewID,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType,ProjectStatus:ProjectNewStatus};
localStorage.setItem(ProjectNewID,JSON.stringify(addProjectLoad));



ProjectNewStatus = "todo";
ProjectNewID = 2;
ProjectNewName = "Color";
ProjectNewDescription="Ensure All Colors are Complimentary" ;
ProjectNewType = "Project";
addProjectLoad = {ProjectID:ProjectNewID,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType,ProjectStatus:ProjectNewStatus};
localStorage.setItem(ProjectNewID,JSON.stringify(addProjectLoad));

ProjectNewStatus = "todo";
ProjectNewID = 3;
ProjectNewName = "TextBoxes";
ProjectNewDescription="Ensure Alignement of TextBox text" ;
ProjectNewType = "Project";
addProjectLoad = {ProjectID:ProjectNewID,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType,ProjectStatus:ProjectNewStatus};
localStorage.setItem(ProjectNewID,JSON.stringify(addProjectLoad));

ProjectNewStatus = "todo";
ProjectNewID =4;
ProjectNewName = "Text";
ProjectNewDescription="Ensure Alignement of Text" ;
ProjectNewType = "Project";
addProjectLoad = {ProjectID:ProjectNewID,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType,ProjectStatus:ProjectNewStatus};
localStorage.setItem(ProjectNewID,JSON.stringify(addProjectLoad));

ProjectNewStatus = "todo";
ProjectNewID =5;
ProjectNewName = "functions";
ProjectNewDescription="Ensure all functions are accessible by button onclicks" ;
ProjectNewType = "Project";
addProjectLoad = {ProjectID:ProjectNewID,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType,ProjectStatus:ProjectNewStatus};
localStorage.setItem(ProjectNewID,JSON.stringify(addProjectLoad));


      
        }





PopulatePage();


}

console.log("Storage Length:" +localStorage.length);
function PopulatePage()
{

    let populatekeyList =[];
    let lowestkey;
    let highestkey;
    for( key in localStorage)
    {
       
        populatekeyList.push(key);
    }
     populatekeyList.sort();
     
     lowestkey = populatekeyList[0];
   //  lowestkey = Object.keys(localStorage)[0];
        console.log("keyList =" +populatekeyList);
    for( i = 0 ; i < populatekeyList.length;i++)
    {

        if(isNaN(populatekeyList[i]))
        {
          highestkey =populatekeyList[i-1];
          break;
        }
    }
    console.log("Lowest Key:"+lowestkey);
    console.log("Highest Key:"+highestkey);
    for(i = lowestkey; i<=highestkey;i++)
    {

      
        try
        { 
            console.log("In the try 1");
            let currentOBJ = JSON.parse(localStorage.getItem(i));
            console.log("In the try 2");
            let currentType = currentOBJ.ProjectType;
            console.log("type is:" + currentType)
        if(currentType == "Project")
        {
          

             
             document.getElementById("ProjectList").innerHTML += "<div>" 
             + currentOBJ.ProjectID +"</div>" +  "<div>"+ currentOBJ.ProjectName +"</div>"    +"<div>"
             + currentOBJ.ProjectDescription+"</div>"; 
        }
        }
        catch
        {
          console.log(i +" key doesnt register");
        }
      
    }
  //  for(let storagekey = 2; storagekey <=localStorage.length+1 ; storagekey++)
  //  {
      //  console.log(typeof storagekey);
       // console.log(storagekey);
       // console.log(localStorage);
  //     let KeyToString = toString(storagekey);
//  let currentOBJ = JSON.parse(localStorage.getItem(item));
    //    console.log(JSON.parse(localStorage.getItem(storagekey)));
    //        document.getElementById("ProjectList").innerHTML += "<div>" 
  //  + currentOBJ.ProjectID +"</div>" +  "<div>"+ currentOBJ.ProjectName +"</div>"    +"<div>"
  //  + currentOBJ.ProjectDescription+"</div>"; 
  //  }

}
Populate();