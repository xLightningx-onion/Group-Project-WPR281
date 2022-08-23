let populateOnce;

let BugProjectNewID ;
    let BugNewName ;
    let BugNewShortDesc ;
    let BugNewLongDesc ;
    let BugNewAssignedEmployeeSelect ;
    let BugNewAssignedEmployee ;
    let BugNewFoundBy ;
    let BugNewDateFound ;
    let BugNewStatusSelect ;
    let BugNewStatusValue ;
    let BugNewPrioritySelect ;
    let BugNewPriorityValue ;
    let BugNewTargetDate ;
    let BugNewActualDate ;
    let BugNewResolutionSummary ;






let ProjectNewID;
let ProjectNewName;
let ProjectNewDescription ;
let ProjectNewStatus;
let ProjectNewType;
let addProjectLoad;


let EmployeeNewID;
let EmployeeNewFirstName;
let EmployeeNewLastName;
let EmployeeNewEmail;
let EmployeeNewUsername;
let EmployeeNewPhoto;
let addEmployeeLoad;


function Populate()
{

       populateOnce = localStorage.getItem("FirstLoad");
        if(populateOnce ==null)
       { 
  
             localStorage.clear();
        localStorage.setItem('FirstLoad','Done');
        

     BugProjectNewID = '20';
       BugNewName = 'ButtonBug';
      BugNewShortDesc = 'Button does funny stuff';
        BugNewLongDesc = 'Jumps around like a lunatic';
         BugNewAssignedEmployee = 'LlewS99';
       BugNewFoundBy ="Anon Caller";
        BugNewDateFound = "2022-08-12";
      BugNewStatusValue = "todo";
       BugNewPriorityValue ="High";
        BugNewTargetDate ="2022-09-15";
        BugNewActualDate ="2022-10-15";
      BugNewResolutionSummary ="This bug has been added as a test";
      ProjectNewType = "Bug";
      
       addBug = {BugId:BugProjectNewID,BugName:BugNewName,
        BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
        BugAssignedEmployee:BugNewAssignedEmployee,BugFoundBy:BugNewFoundBy,
        BugDateFound:BugNewDateFound,Status:BugNewStatusValue,
        Priority:BugNewPriorityValue,BugTargetDate:BugNewTargetDate,
        BugActualDate:BugNewActualDate,BugResolutionSummary:BugNewResolutionSummary,
      ProjectType:ProjectNewType};
        localStorage.setItem(BugProjectNewID,JSON.stringify(addBug));


























       EmployeeNewID = 11;
       EmployeeNewFirstName = "Llewelyn";
       EmployeeNewLastName = "Smit";
       EmployeeNewEmail ="llewelyn@gmail.com";
       EmployeeNewUsername="LlewS99";
       EmployeeNewPhoto ="";
       ProjectNewType ="Employee";
       addEmployeeLoad = {EmployeeID:EmployeeNewID,EmployeeFirstName:EmployeeNewFirstName,EmployeeLastName:EmployeeNewLastName,EmployeeEmail:EmployeeNewEmail,EmployeeUsername:EmployeeNewUsername,EmployeePhoto:EmployeeNewPhoto,ProjectType:ProjectNewType};
       localStorage.setItem(EmployeeNewID,JSON.stringify(addEmployeeLoad));
       

       EmployeeNewID = 13;
       EmployeeNewFirstName = "Karel";
       EmployeeNewLastName = "Nel";
       EmployeeNewEmail ="Karel@gmail.com";
       EmployeeNewUsername="KareN99";
       EmployeeNewPhoto ="";
       ProjectNewType ="Employee";
       addEmployeeLoad = {EmployeeID:EmployeeNewID,EmployeeFirstName:EmployeeNewFirstName,EmployeeLastName:EmployeeNewLastName,EmployeeEmail:EmployeeNewEmail,EmployeeUsername:EmployeeNewUsername,EmployeePhoto:EmployeeNewPhoto,ProjectType:ProjectNewType};
       localStorage.setItem(EmployeeNewID,JSON.stringify(addEmployeeLoad));

       EmployeeNewID = 15;
       EmployeeNewFirstName = "Johannes";
       EmployeeNewLastName = "Jordaan";
       EmployeeNewEmail ="Johannes@gmail.com";
       EmployeeNewUsername="JohanJ99";
       EmployeeNewPhoto ="";
       ProjectNewType ="Employee";
       addEmployeeLoad = {EmployeeID:EmployeeNewID,EmployeeFirstName:EmployeeNewFirstName,EmployeeLastName:EmployeeNewLastName,EmployeeEmail:EmployeeNewEmail,EmployeeUsername:EmployeeNewUsername,EmployeePhoto:EmployeeNewPhoto,ProjectType:ProjectNewType};
       localStorage.setItem(EmployeeNewID,JSON.stringify(addEmployeeLoad));

       EmployeeNewID = 16;
       EmployeeNewFirstName = "Kyle";
       EmployeeNewLastName = "van der Westhuizen";
       EmployeeNewEmail ="Kyle99@gmail.com";
       EmployeeNewUsername="KyleW99";
       EmployeeNewPhoto ="";
       ProjectNewType ="Employee";
       addEmployeeLoad = {EmployeeID:EmployeeNewID,EmployeeFirstName:EmployeeNewFirstName,EmployeeLastName:EmployeeNewLastName,EmployeeEmail:EmployeeNewEmail,EmployeeUsername:EmployeeNewUsername,EmployeePhoto:EmployeeNewPhoto,ProjectType:ProjectNewType};
       localStorage.setItem(EmployeeNewID,JSON.stringify(addEmployeeLoad));

   

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

location.reload();
   
        }





PopulatePage();


}


function PopulatePage()
{

    let populatekeyList =[];
    let lowestkey;
    let highestkey =0;
    for( key in localStorage)
    {
       
        populatekeyList.push(key);
    }
     populatekeyList.sort();

     lowestkey = populatekeyList[0];
   //  lowestkey = Object.keys(localStorage)[0];
   
    for( i = 0 ; i < populatekeyList.length;i++)
    {
         let lastNumber =0;
        if(isNaN(populatekeyList[i]))
        {
          lastnumber =populatekeyList[i-1];
          break;
        }
       
    }
 for(let i =0 ; i<populatekeyList.length;i++)
        {
          if(parseInt(populatekeyList[i])>highestkey)        
          {
               highestkey = populatekeyList[i];
          }
          console.log(highestkey)
        }

    for(i = lowestkey; i<=highestkey;i++)
    {

      
        try
        { 

            let currentOBJ = JSON.parse(localStorage.getItem(i));
      
            let currentType = currentOBJ.ProjectType;
     
        if(currentType == "Project")
        {
          document.getElementById("ProjectIdTicketAdd").innerHTML += "<option value='"+currentOBJ.ProjectID+"'>"+currentOBJ.ProjectID+"</div>";

             
             document.getElementById("ProjectList").innerHTML += "<div>" 
             + currentOBJ.ProjectID +"</div>" +  "<div>"+ currentOBJ.ProjectName +"</div>"    +"<div>"
             + currentOBJ.ProjectDescription+"</div>"; 
        }
        else if(currentType == "Employee")
        {
   
          document.getElementById("AssignedEmployeeAdd").innerHTML += "<option value='" +currentOBJ.EmployeeUsername+"'>"+currentOBJ.EmployeeUsername+"</option>";
        }
        else if(currentType == "Bug")
        {
          console.log("bug")
         // <div class="table-header">
          ///<h4>Project ID</h4>
     // </div>

     /*
           addBug = {BugId:BugProjectNewID,BugName:BugNewName,
        BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
        BugAssignedEmployee:BugNewAssignedEmployee,BugFoundBy:BugNewFoundBy,
        BugDateFound:BugNewDateFound,Status:BugNewStatusValue,
        Priority:BugNewPriorityValue,BugTargetDate:BugNewTargetDate,
        BugActualDate:BugNewActualDate,BugResolutionSummary:BugNewResolutionSummary};
        localStorage.setItem(BugProjectNewID,JSON.stringify(addBug));



     */
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugId+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugName+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugShortDesc+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugLongDesc+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugAssignedEmployee+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugFoundBy+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugDateFound+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.Status+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.Priority+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugTargetDate+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugActualDate+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugResolutionSummary+"</h4></div>";


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
  console.log(localStorage)
}
Populate();