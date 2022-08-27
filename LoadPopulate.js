let populateOnce;

    let BugProjectNewID ;
    let BugID
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





let ProjectNewPriority;
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
        
        ProjectNewPriority="High";
        BugID = 20;
        BugProjectNewID = 1;
       BugNewName = 'ButtonBug';
      BugNewShortDesc = 'Button does funny stuff';
        BugNewLongDesc = 'Jumps around like a lunatic';
         BugNewAssignedEmployee = 'LlewS99';
       BugNewFoundBy ="Anon Caller";
        BugNewDateFound = "2022-08-12";
      BugNewStatusValue = "todo";

        BugNewTargetDate ="2022-09-15";
        BugNewActualDate ="2022-10-15";
      BugNewResolutionSummary ="This bug has been added as a test";
      ProjectNewType = "Bug";
      
       addBug = {BugId:BugID,ProjectId:BugProjectNewID,BugName:BugNewName,
        BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
        BugAssignedEmployee:BugNewAssignedEmployee,BugFoundBy:BugNewFoundBy,
        BugDateFound:BugNewDateFound,ProjectStatus:BugNewStatusValue,
        ProjectPriority:ProjectNewPriority,BugTargetDate:BugNewTargetDate,
        BugActualDate:BugNewActualDate,BugResolutionSummary:BugNewResolutionSummary,
      ProjectType:ProjectNewType};
        localStorage.setItem(BugID,JSON.stringify(addBug));

        ProjectNewPriority="Low";
        BugID = 21;
        BugProjectNewID = 3;
          BugNewName = 'TextBug';
         BugNewShortDesc = 'Text does funny stuff';
           BugNewLongDesc = 'Jumps around like a lunatic';
            BugNewAssignedEmployee = 'LlewS99';
          BugNewFoundBy ="Anon Caller";
           BugNewDateFound = "2022-08-12";
         BugNewStatusValue = "progress";
        
           BugNewTargetDate ="2022-09-15";
           BugNewActualDate ="2022-10-15";
         BugNewResolutionSummary ="This bug has been added as a test";
         ProjectNewType = "Bug";
         
          addBug = {BugId:BugID,ProjectId:BugProjectNewID,BugName:BugNewName,
           BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
           BugAssignedEmployee:BugNewAssignedEmployee,BugFoundBy:BugNewFoundBy,
           BugDateFound:BugNewDateFound,ProjectStatus:BugNewStatusValue,
           ProjectPriority:ProjectNewPriority,BugTargetDate:BugNewTargetDate,
           BugActualDate:BugNewActualDate,BugResolutionSummary:BugNewResolutionSummary,
         ProjectType:ProjectNewType};
           localStorage.setItem(BugID,JSON.stringify(addBug));


           ProjectNewPriority="Medium";
           BugID = 22;
           BugProjectNewID = 4;
             BugNewName = 'ButtonBug';
            BugNewShortDesc = 'Button does funny stuff';
              BugNewLongDesc = 'Jumps around like a lunatic';
               BugNewAssignedEmployee = 'LlewS99';
             BugNewFoundBy ="Anon Caller";
              BugNewDateFound = "2022-08-12";
            BugNewStatusValue = "review";
           
              BugNewTargetDate ="2022-09-15";
              BugNewActualDate ="2022-10-15";
            BugNewResolutionSummary ="This bug has been added as a test";
            ProjectNewType = "Bug";
            
             addBug = {BugId:BugID,ProjectId:BugProjectNewID,BugName:BugNewName,
              BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
              BugAssignedEmployee:BugNewAssignedEmployee,BugFoundBy:BugNewFoundBy,
              BugDateFound:BugNewDateFound,ProjectStatus:BugNewStatusValue,
              ProjectPriority:ProjectNewPriority,BugTargetDate:BugNewTargetDate,
              BugActualDate:BugNewActualDate,BugResolutionSummary:BugNewResolutionSummary,
            ProjectType:ProjectNewType};
              localStorage.setItem(BugID,JSON.stringify(addBug));


              ProjectNewPriority="Low";
              BugID = 23;
              BugProjectNewID = 1;
                BugNewName = 'ButtonBug';
               BugNewShortDesc = 'Button does funny stuff';
                 BugNewLongDesc = 'Jumps around like a lunatic';
                  BugNewAssignedEmployee = 'LlewS99';
                BugNewFoundBy ="Anon Caller";
                 BugNewDateFound = "2022-08-12";
               BugNewStatusValue = "done";
             
                 BugNewTargetDate ="2022-09-15";
                 BugNewActualDate ="2022-10-15";
               BugNewResolutionSummary ="This bug has been added as a test";
               ProjectNewType = "Bug";
               
                addBug = {BugId:BugID,ProjectId:BugProjectNewID,BugName:BugNewName,
                 BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
                 BugAssignedEmployee:BugNewAssignedEmployee,BugFoundBy:BugNewFoundBy,
                 BugDateFound:BugNewDateFound,ProjectStatus:BugNewStatusValue,
                 ProjectPriority:ProjectNewPriority,BugTargetDate:BugNewTargetDate,
                 BugActualDate:BugNewActualDate,BugResolutionSummary:BugNewResolutionSummary,
               ProjectType:ProjectNewType};
                 localStorage.setItem(BugID,JSON.stringify(addBug));


                 ProjectNewPriority="High";
                 BugID = 24;
                 BugProjectNewID = 5;
                   BugNewName = 'ButtonBug';
                  BugNewShortDesc = 'Button does funny stuff';
                    BugNewLongDesc = 'Jumps around like a lunatic';
                     BugNewAssignedEmployee = 'LlewS99';
                   BugNewFoundBy ="Anon Caller";
                    BugNewDateFound = "2022-08-12";
                  BugNewStatusValue = "done";
       
                    BugNewTargetDate ="2022-09-15";
                    BugNewActualDate ="2022-10-15";
                  BugNewResolutionSummary ="This bug has been added as a test";
                  ProjectNewType = "Bug";
                  
                   addBug = {BugId:BugID,ProjectId:BugProjectNewID,BugName:BugNewName,
                    BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
                    BugAssignedEmployee:BugNewAssignedEmployee,BugFoundBy:BugNewFoundBy,
                    BugDateFound:BugNewDateFound,ProjectStatus:BugNewStatusValue,
                    ProjectPriority:ProjectNewPriority,BugTargetDate:BugNewTargetDate,
                    BugActualDate:BugNewActualDate,BugResolutionSummary:BugNewResolutionSummary,
                  ProjectType:ProjectNewType};
                    localStorage.setItem(BugID,JSON.stringify(addBug));


                    ProjectNewPriority="High";
                    BugID = 26;
                    BugProjectNewID = 2;
                      BugNewName = 'ButtonBug';
                     BugNewShortDesc = 'Button does funny stuff';
                       BugNewLongDesc = 'Jumps around like a lunatic';
                        BugNewAssignedEmployee = 'LlewS99';
                      BugNewFoundBy ="Anon Caller";
                       BugNewDateFound = "2022-08-12";
                     BugNewStatusValue = "review";
                 
                       BugNewTargetDate ="2022-09-15";
                       BugNewActualDate ="2022-10-15";
                     BugNewResolutionSummary ="This bug has been added as a test";
                     ProjectNewType = "Bug";
                     
                      addBug = {BugId:BugID,ProjectId:BugProjectNewID,BugName:BugNewName,
                       BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
                       BugAssignedEmployee:BugNewAssignedEmployee,BugFoundBy:BugNewFoundBy,
                       BugDateFound:BugNewDateFound,ProjectStatus:BugNewStatusValue,
                       ProjectPriority:ProjectNewPriority,BugTargetDate:BugNewTargetDate,
                       BugActualDate:BugNewActualDate,BugResolutionSummary:BugNewResolutionSummary,
                     ProjectType:ProjectNewType};
                       localStorage.setItem(BugID,JSON.stringify(addBug));


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

   
ProjectNewPriority="Low";
ProjectNewStatus = "todo";
ProjectNewID = 1;
ProjectNewName = "Button";
ProjectNewDescription="Ensure Alignment of all buttons" ;
ProjectNewType = "Project";
addProjectLoad = {ProjectID:ProjectNewID,ProjectPriority:ProjectNewPriority,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType,ProjectStatus:ProjectNewStatus};
localStorage.setItem(ProjectNewID,JSON.stringify(addProjectLoad));


ProjectNewPriority="Medium";
ProjectNewStatus = "todo";
ProjectNewID = 2;
ProjectNewName = "Color";
ProjectNewDescription="Ensure All Colors are Complimentary" ;
ProjectNewType = "Project";
addProjectLoad = {ProjectID:ProjectNewID,ProjectPriority:ProjectNewPriority,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType,ProjectStatus:ProjectNewStatus};
localStorage.setItem(ProjectNewID,JSON.stringify(addProjectLoad));

ProjectNewPriority="Low";
ProjectNewStatus = "done";
ProjectNewID = 3;
ProjectNewName = "TextBoxes";
ProjectNewDescription="Ensure Alignement of TextBox text" ;
ProjectNewType = "Project";
addProjectLoad = {ProjectID:ProjectNewID,ProjectPriority:ProjectNewPriority,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType,ProjectStatus:ProjectNewStatus};
localStorage.setItem(ProjectNewID,JSON.stringify(addProjectLoad));

ProjectNewPriority="Medium";
ProjectNewStatus = "review";
ProjectNewID =4;
ProjectNewName = "Text";
ProjectNewDescription="Ensure Alignement of Text" ;
ProjectNewType = "Project";
addProjectLoad = {ProjectID:ProjectNewID,ProjectPriority:ProjectNewPriority,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType,ProjectStatus:ProjectNewStatus};
localStorage.setItem(ProjectNewID,JSON.stringify(addProjectLoad));

ProjectNewPriority="High";
ProjectNewStatus = "progress";
ProjectNewID =5;
ProjectNewName = "functions";
ProjectNewDescription="Ensure all functions are accessible by button onclicks" ;
ProjectNewType = "Project";
addProjectLoad = {ProjectID:ProjectNewID,ProjectPriority:ProjectNewPriority,ProjectName:ProjectNewName,ProjectDescription:ProjectNewDescription,ProjectType:ProjectNewType,ProjectStatus:ProjectNewStatus};
localStorage.setItem(ProjectNewID,JSON.stringify(addProjectLoad));

location.reload();
   
        }


PopulatePage();


}


function PopulatePage()
{
    document.getElementById("ProjectIdTicketAdd").innerHTML = "";
    document.getElementById("AssignedEmployeeAdd").innerHTML = "";
    let now = new Date();
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let today = now.getFullYear()+"-"+(month)+"-"+(day) ;
  

    document.getElementById("DateFoundAdd").value = today;


 document.getElementById("TargetDateAdd").value = today;

 document.getElementById("ActualDateAdd").value = today;

 numbersOnlykeyList = NumbersKeyList();

   for(number in numbersOnlykeyList)
    {
    
      
        try
        { 

        
          let currentOBJ = JSON.parse(localStorage.getItem(parseInt(numbersOnlykeyList[number])));
            let currentType = currentOBJ.ProjectType;

        if(currentType == "Project")
        {
          document.getElementById("ProjectIdTicketAdd").innerHTML += "<option value='"+currentOBJ.ProjectID+"'>"+currentOBJ.ProjectID+"</div>";

             
             document.getElementById("ProjectList").innerHTML += "<div class='projectIDhover' onclick='showProject("+currentOBJ.ProjectID+")'>" 
             + currentOBJ.ProjectID +"</div>" +  "<div>"+ currentOBJ.ProjectName +"</div>"    +"<div>"
             + currentOBJ.ProjectDescription+"</div> <div> <button onclick='DeleteProject("+currentOBJ.ProjectID+")'> </button> </div>" ; 
        }
        else if(currentType == "Employee")
        {
   
          document.getElementById("AssignedEmployeeAdd").innerHTML += "<option value='" +currentOBJ.EmployeeUsername+"'>"+currentOBJ.EmployeeUsername+"</option>";
        }
        else if(currentType == "Bug")
        {

          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header projectIDhover' onclick='ShowBugPage("+currentOBJ.BugId+")'><h4>"+currentOBJ.BugId+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugName+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugShortDesc+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugLongDesc+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugAssignedEmployee+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugFoundBy+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugDateFound+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.ProjectStatus+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.ProjectPriority+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugTargetDate+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugActualDate+"</h4></div>";
          document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugResolutionSummary+"</h4></div>";


        }

        }
        catch
        {
          console.log(number +" key doesnt register");
        }
      
    }
   BoardSorting();

}
Populate();