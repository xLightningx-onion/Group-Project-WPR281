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
                        
                       ProjectNewPriority="Medium";
                       BugID = 27;
                       BugProjectNewID = 2;
                         BugNewName = 'CSSBug';
                        BugNewShortDesc = 'CSS does not display correctly';
                          BugNewLongDesc = 'Hovers in the wrong places ';
                           BugNewAssignedEmployee = 'KareN99';
                         BugNewFoundBy ="Anon Caller";
                          BugNewDateFound = "2022-08-21";
                        BugNewStatusValue = "done";
                    
                          BugNewTargetDate ="2022-09-20";
                          BugNewActualDate ="2022-11-15";
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
                          BugID = 28;
                          BugProjectNewID = 3;
                            BugNewName = 'CSSBug';
                           BugNewShortDesc = 'CSS does not display correctly';
                             BugNewLongDesc = 'Hovers in the wrong places ';
                              BugNewAssignedEmployee = 'KareN99';
                            BugNewFoundBy ="Anon Caller";
                             BugNewDateFound = "2022-08-21";
                           BugNewStatusValue = "progress";
                       
                             BugNewTargetDate ="2022-09-20";
                             BugNewActualDate ="2022-11-15";
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
                             BugID = 29;
                             BugProjectNewID = 5;
                               BugNewName = 'CSSBug';
                              BugNewShortDesc = 'CSS does not display correctly';
                                BugNewLongDesc = 'Hovers in the wrong places ';
                                 BugNewAssignedEmployee = 'KareN99';
                               BugNewFoundBy ="Anon Caller";
                                BugNewDateFound = "2022-08-21";
                              BugNewStatusValue = "review";
                          
                                BugNewTargetDate ="2022-09-20";
                                BugNewActualDate ="2022-11-15";
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
                                BugID = 30;
                                BugProjectNewID = 4;
                                  BugNewName = 'CSSBug';
                                 BugNewShortDesc = 'CSS does not display correctly';
                                   BugNewLongDesc = 'Hovers in the wrong places ';
                                    BugNewAssignedEmployee = 'KareN99';
                                  BugNewFoundBy ="Anon Caller";
                                   BugNewDateFound = "2022-08-21";
                                 BugNewStatusValue = "done";
                             
                                   BugNewTargetDate ="2022-09-20";
                                   BugNewActualDate ="2022-11-15";
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
                                   BugID = 31;
                                   BugProjectNewID = 1;
                                     BugNewName = 'CSSBug';
                                    BugNewShortDesc = 'CSS does not display correctly';
                                      BugNewLongDesc = 'Hovers in the wrong places ';
                                       BugNewAssignedEmployee = 'JohanJ99';
                                     BugNewFoundBy ="Anon Caller";
                                      BugNewDateFound = "2022-08-30";
                                    BugNewStatusValue = "done";
                                
                                      BugNewTargetDate ="2022-10-17";
                                      BugNewActualDate ="2022-11-15";
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
                                   BugID = 32;
                                   BugProjectNewID = 1;
                                     BugNewName = 'CSSBug';
                                    BugNewShortDesc = 'CSS does not display correctly';
                                      BugNewLongDesc = 'Hovers in the wrong places ';
                                       BugNewAssignedEmployee = 'JohanJ99';
                                     BugNewFoundBy ="Anon Caller";
                                      BugNewDateFound = "2022-09-15";
                                    BugNewStatusValue = "todo";
                                
                                      BugNewTargetDate ="2022-10-17";
                                      BugNewActualDate ="2022-11-15";
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
                                   BugID = 33;
                                   BugProjectNewID = 4;
                                     BugNewName = 'CSSBug';
                                    BugNewShortDesc = 'CSS does not display correctly';
                                      BugNewLongDesc = 'Hovers in the wrong places ';
                                       BugNewAssignedEmployee = 'JohanJ99';
                                     BugNewFoundBy ="Anon Caller";
                                      BugNewDateFound = "2022-09-05";
                                    BugNewStatusValue = "progress";
                                
                                      BugNewTargetDate ="2022-10-25";
                                      BugNewActualDate ="2022-11-10";
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
                                   BugID = 34;
                                   BugProjectNewID = 2;
                                     BugNewName = 'CSSBug';
                                    BugNewShortDesc = 'CSS does not display correctly';
                                      BugNewLongDesc = 'Hovers in the wrong places ';
                                       BugNewAssignedEmployee = 'JohanJ99';
                                     BugNewFoundBy ="Anon Caller";
                                      BugNewDateFound = "2022-09-15";
                                    BugNewStatusValue = "review";
                                
                                      BugNewTargetDate ="2022-10-25";
                                      BugNewActualDate ="2022-11-15";
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
                                   BugID = 35;
                                   BugProjectNewID = 5;
                                     BugNewName = 'CSSBug';
                                    BugNewShortDesc = 'CSS does not display correctly';
                                      BugNewLongDesc = 'Hovers in the wrong places ';
                                       BugNewAssignedEmployee = 'JohanJ99';
                                     BugNewFoundBy ="Anon Caller";
                                      BugNewDateFound = "2022-09-15";
                                    BugNewStatusValue = "done";
                                
                                      BugNewTargetDate ="2022-10-25";
                                      BugNewActualDate ="2022-11-15";
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
                                   BugID = 36;
                                   BugProjectNewID = 3;
                                     BugNewName = 'CSSBug';
                                    BugNewShortDesc = 'CSS does not display correctly';
                                      BugNewLongDesc = 'Hovers in the wrong places ';
                                       BugNewAssignedEmployee = 'JohanJ99';
                                     BugNewFoundBy ="Anon Caller";
                                      BugNewDateFound = "2022-09-15";
                                    BugNewStatusValue = "progress";
                                
                                      BugNewTargetDate ="2022-10-25";
                                      BugNewActualDate ="2022-11-15";
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
                                   BugID = 37;
                                   BugProjectNewID = 4;
                                     BugNewName = 'CSSBug';
                                    BugNewShortDesc = 'CSS does not display correctly';
                                      BugNewLongDesc = 'Hovers in the wrong places ';
                                       BugNewAssignedEmployee = 'JohanJ99';
                                     BugNewFoundBy ="Anon Caller";
                                      BugNewDateFound = "2022-09-02";
                                    BugNewStatusValue = "review";
                                
                                      BugNewTargetDate ="2022-10-25";
                                      BugNewActualDate ="2022-11-10";
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
                                   BugID = 38;
                                   BugProjectNewID = 1;
                                     BugNewName = 'CSSBug';
                                    BugNewShortDesc = 'CSS does not display correctly';
                                      BugNewLongDesc = 'Hovers in the wrong places ';
                                       BugNewAssignedEmployee = 'JohanJ99';
                                     BugNewFoundBy ="Anon Caller";
                                      BugNewDateFound = "2022-09-15";
                                    BugNewStatusValue = "done";
                                
                                      BugNewTargetDate ="2022-10-25";
                                      BugNewActualDate ="2022-11-15";
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
                                   BugID = 39;
                                   BugProjectNewID = 5;
                                     BugNewName = 'CSSBug';
                                    BugNewShortDesc = 'CSS does not display correctly';
                                      BugNewLongDesc = 'Hovers in the wrong places ';
                                       BugNewAssignedEmployee = 'JohanJ99';
                                     BugNewFoundBy ="Anon Caller";
                                      BugNewDateFound = "2022-09-02";
                                    BugNewStatusValue = "progress";
                                
                                      BugNewTargetDate ="2022-10-17";
                                      BugNewActualDate ="2022-11-10";
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
                                      BugID = 40;
                                      BugProjectNewID = 1;
                                        BugNewName = 'CSSBug';
                                       BugNewShortDesc = 'CSS does not display correctly';
                                         BugNewLongDesc = 'Hovers in the wrong places ';
                                          BugNewAssignedEmployee = 'JohanJ99';
                                        BugNewFoundBy ="Anon Caller";
                                         BugNewDateFound = "2022-09-02";
                                       BugNewStatusValue = "review";
                                   
                                         BugNewTargetDate ="2022-10-17";
                                         BugNewActualDate ="2022-11-15";
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
                                         BugID = 41;
                                         BugProjectNewID = 1;
                                         BugNewName = 'LogicBug';
                                         BugNewShortDesc = 'Calculations are failing';
                                           BugNewLongDesc = 'Math rules are not followed';
                                            BugNewAssignedEmployee = 'KyleW99';
                                          BugNewFoundBy ="Anon Caller";
                                           BugNewDateFound = "2022-08-27";
                                         BugNewStatusValue = "progress";
                              
                                           BugNewTargetDate ="2022-09-23";
                                           BugNewActualDate ="2022-10-25";
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
                                            BugID = 42;
                                            BugProjectNewID = 1;
                                              BugNewName = 'CSSBug';
                                             BugNewShortDesc = 'CSS does not display correctly';
                                               BugNewLongDesc = 'Hovers in the wrong places ';
                                                BugNewAssignedEmployee = 'KareN99';
                                              BugNewFoundBy ="Anon Caller";
                                               BugNewDateFound = "2022-08-30";
                                             BugNewStatusValue = "review";
                                         
                                               BugNewTargetDate ="2022-10-17";
                                               BugNewActualDate ="2022-11-15";
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
                                               BugID = 43;
                                               BugProjectNewID = 1;
                                               BugNewName = 'LogicBug';
                                               BugNewShortDesc = 'Calculations are failing';
                                                 BugNewLongDesc = 'Math rules are not followed';
                                                  BugNewAssignedEmployee = 'KyleW99';
                                                BugNewFoundBy ="Anon Caller";
                                                 BugNewDateFound = "2022-08-27";
                                               BugNewStatusValue = "progress";
                                    
                                                 BugNewTargetDate ="2022-09-23";
                                                 BugNewActualDate ="2022-10-25";
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
                                                  BugID = 44;
                                                  BugProjectNewID = 1;
                                                  BugNewName = 'LogicBug';
                                                  BugNewShortDesc = 'Calculations are failing';
                                                    BugNewLongDesc = 'Math rules are not followed';
                                                     BugNewAssignedEmployee = 'KyleW99';
                                                   BugNewFoundBy ="Anon Caller";
                                                    BugNewDateFound = "2022-08-27";
                                                  BugNewStatusValue = "todo";
                                       
                                                    BugNewTargetDate ="2022-09-23";
                                                    BugNewActualDate ="2022-10-25";
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
                                                     BugID = 45;
                                                     BugProjectNewID = 1;
                                                       BugNewName = 'CSSBug';
                                                      BugNewShortDesc = 'CSS does not display correctly';
                                                        BugNewLongDesc = 'Hovers in the wrong places ';
                                                         BugNewAssignedEmployee = 'KareN99';
                                                       BugNewFoundBy ="Anon Caller";
                                                        BugNewDateFound = "2022-09-02";
                                                      BugNewStatusValue = "review";
                                                  
                                                        BugNewTargetDate ="2022-10-17";
                                                        BugNewActualDate ="2022-11-15";
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
                                                        BugID = 46;
                                                        BugProjectNewID = 1;
                                                        BugNewName = 'LogicBug';
                                                        BugNewShortDesc = 'Calculations are failing';
                                                          BugNewLongDesc = 'Math rules are not followed';
                                                           BugNewAssignedEmployee = 'KyleW99';
                                                         BugNewFoundBy ="Anon Caller";
                                                          BugNewDateFound = "2022-09-02";
                                                        BugNewStatusValue = "progress";
                                             
                                                          BugNewTargetDate ="2022-09-23";
                                                          BugNewActualDate ="2022-10-25";
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
                                                           BugID = 47;
                                                           BugProjectNewID = 1;
                                                             BugNewName = 'CSSBug';
                                                            BugNewShortDesc = 'CSS does not display correctly';
                                                              BugNewLongDesc = 'Hovers in the wrong places ';
                                                               BugNewAssignedEmployee = 'KareN99';
                                                             BugNewFoundBy ="Anon Caller";
                                                              BugNewDateFound = "2022-08-30";
                                                            BugNewStatusValue = "review";
                                                        
                                                              BugNewTargetDate ="2022-10-17";
                                                              BugNewActualDate ="2022-11-15";
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
                                                              BugID = 48;
                                                              BugProjectNewID = 1;
                                                              BugNewName = 'LogicBug';
                                                              BugNewShortDesc = 'Calculations are failing';
                                                                BugNewLongDesc = 'Math rules are not followed';
                                                                 BugNewAssignedEmployee = 'KyleW99';
                                                               BugNewFoundBy ="Anon Caller";
                                                                BugNewDateFound = "2022-09-02";
                                                              BugNewStatusValue = "review";
                                                   
                                                                BugNewTargetDate ="2022-09-23";
                                                                BugNewActualDate ="2022-10-25";
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
                                                                 BugID = 49;
                                                                 BugProjectNewID = 1;
                                                                 BugNewName = 'LogicBug';
                                                                 BugNewShortDesc = 'Calculations are failing';
                                                                   BugNewLongDesc = 'Math rules are not followed';
                                                                    BugNewAssignedEmployee = 'KyleW99';
                                                                  BugNewFoundBy ="Anon Caller";
                                                                   BugNewDateFound = "2022-08-27";
                                                                 BugNewStatusValue = "todo";
                                                      
                                                                   BugNewTargetDate ="2022-09-23";
                                                                   BugNewActualDate ="2022-10-25";
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
                                                                    BugID = 50;
                                                                    BugProjectNewID = 1;
                                                                      BugNewName = 'CSSBug';
                                                                     BugNewShortDesc = 'CSS does not display correctly';
                                                                       BugNewLongDesc = 'Hovers in the wrong places ';
                                                                        BugNewAssignedEmployee = 'KareN99';
                                                                      BugNewFoundBy ="Anon Caller";
                                                                       BugNewDateFound = "2022-08-27";
                                                                     BugNewStatusValue = "progress";
                                                                 
                                                                       BugNewTargetDate ="2022-10-25";
                                                                       BugNewActualDate ="2022-11-20";
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
                                                                       BugID = 51;
                                                                       BugProjectNewID = 1;
                                                                         BugNewName = 'CSSBug';
                                                                        BugNewShortDesc = 'CSS does not display correctly';
                                                                          BugNewLongDesc = 'Hovers in the wrong places ';
                                                                           BugNewAssignedEmployee = 'KareN99';
                                                                         BugNewFoundBy ="Anon Caller";
                                                                          BugNewDateFound = "2022-08-30";
                                                                        BugNewStatusValue = "review";
                                                                    
                                                                          BugNewTargetDate ="2022-10-17";
                                                                          BugNewActualDate ="2022-11-15";
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
                                                                          BugID = 52;
                                                                          BugProjectNewID = 1;
                                                                          BugNewName = 'LogicBug';
                                                                          BugNewShortDesc = 'Calculations are failing';
                                                                            BugNewLongDesc = 'Math rules are not followed';
                                                                             BugNewAssignedEmployee = 'KyleW99';
                                                                           BugNewFoundBy ="Anon Caller";
                                                                            BugNewDateFound = "2022-08-27";
                                                                          BugNewStatusValue = "review";
                                                               
                                                                            BugNewTargetDate ="2022-09-23";
                                                                            BugNewActualDate ="2022-10-25";
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
                                                                             BugID = 53;
                                                                             BugProjectNewID = 1;
                                                                             BugNewName = 'LogicBug';
                                                                             BugNewShortDesc = 'Calculations are failing';
                                                                               BugNewLongDesc = 'Math rules are not followed';
                                                                                BugNewAssignedEmployee = 'KyleW99';
                                                                              BugNewFoundBy ="Anon Caller";
                                                                               BugNewDateFound = "2022-08-27";
                                                                             BugNewStatusValue = "progress";
                                                                  
                                                                               BugNewTargetDate ="2022-09-23";
                                                                               BugNewActualDate ="2022-10-25";
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
                                                                                BugID = 54;
                                                                                BugProjectNewID = 1;
                                                                                  BugNewName = 'CSSBug';
                                                                                 BugNewShortDesc = 'CSS does not display correctly';
                                                                                   BugNewLongDesc = 'Hovers in the wrong places ';
                                                                                    BugNewAssignedEmployee = 'KareN99';
                                                                                  BugNewFoundBy ="Anon Caller";
                                                                                   BugNewDateFound = "2022-08-30";
                                                                                 BugNewStatusValue = "review";
                                                                             
                                                                                   BugNewTargetDate ="2022-10-17";
                                                                                   BugNewActualDate ="2022-11-15";
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
                                                                                   BugID = 55;
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

                                                                                      ProjectNewPriority="Medium";
                                                                                      BugID = 56;
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

                                                                                         ProjectNewPriority="Medium";
                                                                                         BugID = 57;
                                                                                         BugProjectNewID = 4;
                                                                                           BugNewName = 'ButtonBug';
                                                                                          BugNewShortDesc = 'Button does funny stuff';
                                                                                            BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                             BugNewAssignedEmployee = 'JohanJ99';
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

                                                                                            ProjectNewPriority="Medium";
                                                                                            BugID = 58;
                                                                                            BugProjectNewID = 4;
                                                                                              BugNewName = 'ButtonBug';
                                                                                             BugNewShortDesc = 'Button does funny stuff';
                                                                                               BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                BugNewAssignedEmployee = 'JohanJ99';
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

                                                                                               ProjectNewPriority="Medium";
                                                                                               BugID = 59;
                                                                                               BugProjectNewID = 4;
                                                                                                 BugNewName = 'ButtonBug';
                                                                                                BugNewShortDesc = 'Button does funny stuff';
                                                                                                  BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                   BugNewAssignedEmployee = 'KyleW99';
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

                                                                                                  ProjectNewPriority="Medium";
                                                                                                  BugID = 60;
                                                                                                  BugProjectNewID = 4;
                                                                                                    BugNewName = 'ButtonBug';
                                                                                                   BugNewShortDesc = 'Button does funny stuff';
                                                                                                     BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                      BugNewAssignedEmployee = 'JohanJ99';
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

                                                                                                     ProjectNewPriority="Medium";
                                                                                                     BugID = 61;
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

                                                                                                        ProjectNewPriority="Medium";
                                                                                                        BugID = 62;
                                                                                                        BugProjectNewID = 4;
                                                                                                          BugNewName = 'ButtonBug';
                                                                                                         BugNewShortDesc = 'Button does funny stuff';
                                                                                                           BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                            BugNewAssignedEmployee = 'KyleW99';
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

                                                                                                           ProjectNewPriority="Medium";
                                                                                                           BugID = 63;
                                                                                                           BugProjectNewID = 4;
                                                                                                           BugNewName = 'TextBug';
                                                                                                           BugNewShortDesc = 'Text does funny stuff';
                                                                                                             BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                              BugNewAssignedEmployee = 'KyleW99';
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

                                                                                                              ProjectNewPriority="Low";
                                                                                                              BugID = 64;
                                                                                                              BugProjectNewID = 4;
                                                                                                                BugNewName = 'ButtonBug';
                                                                                                               BugNewShortDesc = 'Button does funny stuff';
                                                                                                                 BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                  BugNewAssignedEmployee = 'LlewS99';
                                                                                                                BugNewFoundBy ="Anon Caller";
                                                                                                                 BugNewDateFound = "2022-08-21";
                                                                                                               BugNewStatusValue = "todo";
                                                                                                              
                                                                                                                 BugNewTargetDate ="2022-09-25";
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
                                                                                                                 BugID = 65;
                                                                                                                 BugProjectNewID = 4;
                                                                                                                   BugNewName = 'ButtonBug';
                                                                                                                  BugNewShortDesc = 'Button does funny stuff';
                                                                                                                    BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                     BugNewAssignedEmployee = 'JohanJ99';
                                                                                                                   BugNewFoundBy ="Anon Caller";
                                                                                                                    BugNewDateFound = "2022-08-21";
                                                                                                                  BugNewStatusValue = "review";
                                                                                                                 
                                                                                                                    BugNewTargetDate ="2022-09-25";
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
                                                                                                                    BugID = 66;
                                                                                                                    BugProjectNewID = 4;
                                                                                                                    BugNewName = 'TextBug';
                                                                                                                    BugNewShortDesc = 'Text does funny stuff';
                                                                                                                      BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                       BugNewAssignedEmployee = 'JohanJ99';
                                                                                                                     BugNewFoundBy ="Anon Caller";
                                                                                                                      BugNewDateFound = "2022-08-21";
                                                                                                                    BugNewStatusValue = "progress";
                                                                                                                   
                                                                                                                      BugNewTargetDate ="2022-09-25";
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
                                                                                                                       BugID = 67;
                                                                                                                       BugProjectNewID = 4;
                                                                                                                         BugNewName = 'ButtonBug';
                                                                                                                        BugNewShortDesc = 'Button does funny stuff';
                                                                                                                          BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                           BugNewAssignedEmployee = 'LlewS99';
                                                                                                                         BugNewFoundBy ="Anon Caller";
                                                                                                                          BugNewDateFound = "2022-08-01";
                                                                                                                        BugNewStatusValue = "done";
                                                                                                                       
                                                                                                                          BugNewTargetDate ="2022-09-12";
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
                                                                                                                          BugID = 68;
                                                                                                                          BugProjectNewID = 4;
                                                                                                                            BugNewName = 'ButtonBug';
                                                                                                                           BugNewShortDesc = 'Button does funny stuff';
                                                                                                                             BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                              BugNewAssignedEmployee = 'LlewS99';
                                                                                                                            BugNewFoundBy ="Anon Caller";
                                                                                                                             BugNewDateFound = "2022-08-01";
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
                                                                                                                             BugID = 69;
                                                                                                                             BugProjectNewID = 4;
                                                                                                                             BugNewName = 'TextBug';
                                                                                                                             BugNewShortDesc = 'Text does funny stuff';
                                                                                                                               BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                BugNewAssignedEmployee = 'KyleW99';
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

                                                                                                                                ProjectNewPriority="Medium";
                                                                                                                                BugID = 70;
                                                                                                                                BugProjectNewID = 4;
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

                                                                                                                                   ProjectNewPriority="High";
                                                                                                                                   BugID = 71;
                                                                                                                                   BugProjectNewID = 3;
                                                                                                                                     BugNewName = 'TextBug';
                                                                                                                                    BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                      BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                       BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                     BugNewFoundBy ="Anon Caller";
                                                                                                                                      BugNewDateFound = "2022-08-24";
                                                                                                                                    BugNewStatusValue = "progress";
                                                                                                                                   
                                                                                                                                      BugNewTargetDate ="2022-10-15";
                                                                                                                                      BugNewActualDate ="2022-11-15";
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
                                                                                                                                      BugID = 72;
                                                                                                                                      BugProjectNewID = 3;
                                                                                                                                        BugNewName = 'TextBug';
                                                                                                                                       BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                         BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                          BugNewAssignedEmployee = 'JohanJ99';
                                                                                                                                        BugNewFoundBy ="Anon Caller";
                                                                                                                                        BugNewDateFound = "2022-08-24";
                                                                                                                                        BugNewStatusValue = "done";
                                                                                                                                       
                                                                                                                                          BugNewTargetDate ="2022-10-15";
                                                                                                                                          BugNewActualDate ="2022-11-15";
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
                                                                                                                                         BugID = 73;
                                                                                                                                         BugProjectNewID = 3;
                                                                                                                                           BugNewName = 'TextBug';
                                                                                                                                          BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                            BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                             BugNewAssignedEmployee = 'KyleW99';
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

                                                                                                                                            ProjectNewPriority="High";
                                                                                                                                            BugID = 74;
                                                                                                                                            BugProjectNewID = 3;
                                                                                                                                            BugNewName = 'ButtonBug';
                                                                                                                                            BugNewShortDesc = 'Button does funny stuff';
                                                                                                                                              BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                               BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                             BugNewFoundBy ="Anon Caller";
                                                                                                                                             BugNewDateFound = "2022-08-24";
                                                                                                                                             BugNewStatusValue = "review";
                                                                                                                                            
                                                                                                                                               BugNewTargetDate ="2022-10-15";
                                                                                                                                               BugNewActualDate ="2022-11-15";
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
                                                                                                                                               BugID = 75;
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
                                                                                                                                                  BugID = 76;
                                                                                                                                                  BugProjectNewID = 3;
                                                                                                                                                    BugNewName = 'TextBug';
                                                                                                                                                   BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                     BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                      BugNewAssignedEmployee = 'JohanJ99';
                                                                                                                                                    BugNewFoundBy ="Anon Caller";
                                                                                                                                                    BugNewDateFound = "2022-08-24";
                                                                                                                                                    BugNewStatusValue = "todo";
                                                                                                                                                   
                                                                                                                                                      BugNewTargetDate ="2022-10-15";
                                                                                                                                                      BugNewActualDate ="2022-11-15";
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
                                                                                                                                                     BugID = 77;
                                                                                                                                                     BugProjectNewID = 3;
                                                                                                                                                     BugNewName = 'ButtonBug';
                                                                                                                                                     BugNewShortDesc = 'Button does funny stuff';
                                                                                                                                                       BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                        BugNewAssignedEmployee = 'KyleW99';
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

                                                                                                                                                        ProjectNewPriority="Low";
                                                                                                                                                        BugID = 78;
                                                                                                                                                        BugProjectNewID = 3;
                                                                                                                                                          BugNewName = 'TextBug';
                                                                                                                                                         BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                           BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                            BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                          BugNewFoundBy ="Anon Caller";
                                                                                                                                                          BugNewDateFound = "2022-08-24";
                                                                                                                                                          BugNewStatusValue = "progress";
                                                                                                                                                         
                                                                                                                                                            BugNewTargetDate ="2022-10-15";
                                                                                                                                                            BugNewActualDate ="2022-11-15";
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
                                                                                                                                                           BugID = 79;
                                                                                                                                                           BugProjectNewID = 3;
                                                                                                                                                             BugNewName = 'TextBug';
                                                                                                                                                             BugNewName = 'ButtonBug';
                                                                                                                                                             BugNewShortDesc = 'Button does funny stuff';
                                                                                                                                                               BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                BugNewAssignedEmployee = 'KyleW99';
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

                                                                                                                                                              ProjectNewPriority="High";
                                                                                                                                                              BugID = 80;
                                                                                                                                                              BugProjectNewID = 3;
                                                                                                                                                                BugNewName = 'TextBug';
                                                                                                                                                               BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                                 BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                  BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                BugNewFoundBy ="Anon Caller";
                                                                                                                                                                BugNewDateFound = "2022-08-24";
                                                                                                                                                                BugNewStatusValue = "progress";
                                                                                                                                                               
                                                                                                                                                                  BugNewTargetDate ="2022-10-15";
                                                                                                                                                                  BugNewActualDate ="2022-11-15";
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
                                                                                                                                                                 BugID = 81;
                                                                                                                                                                 BugProjectNewID = 3;
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

                                                                                                                                                                    ProjectNewPriority="Medium";
                                                                                                                                                                    BugID = 82;
                                                                                                                                                                    BugProjectNewID = 3;
                                                                                                                                                                      BugNewName = 'TextBug';
                                                                                                                                                                     BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                                       BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                        BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                      BugNewFoundBy ="Anon Caller";
                                                                                                                                                                      BugNewDateFound = "2022-08-24";
                                                                                                                                                                      BugNewStatusValue = "progress";
                                                                                                                                                                     
                                                                                                                                                                        BugNewTargetDate ="2022-10-15";
                                                                                                                                                                        BugNewActualDate ="2022-11-15";
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
                                                                                                                                                                       BugID = 83;
                                                                                                                                                                       BugProjectNewID = 3;
                                                                                                                                                                         BugNewName = 'TextBug';
                                                                                                                                                                        BugNewShortDesc = 'Text does funny stuff';
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
                                                                                                                                                                          BugID = 84;
                                                                                                                                                                          BugProjectNewID = 3;
                                                                                                                                                                          BugNewName = 'TextBug';
                                                                                                                                                                          BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                                            BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                             BugNewAssignedEmployee = 'JohanJ99';
                                                                                                                                                                           BugNewFoundBy ="Anon Caller";
                                                                                                                                                                           BugNewDateFound = "2022-08-24";
                                                                                                                                                                           BugNewStatusValue = "todo";
                                                                                                                                                                          
                                                                                                                                                                             BugNewTargetDate ="2022-10-15";
                                                                                                                                                                             BugNewActualDate ="2022-11-15";
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
                                                                                                                                                                             BugID = 85;
                                                                                                                                                                             BugProjectNewID = 3;
                                                                                                                                                                               BugNewName = 'TextBug';
                                                                                                                                                                              BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                                                BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                 BugNewAssignedEmployee = 'KyleW99';
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
                                                                                                                                                                                BugID = 86;
                                                                                                                                                                                BugProjectNewID = 3;
                                                                                                                                                                                  BugNewName = 'TextBug';
                                                                                                                                                                                 BugNewShortDesc = 'Text does funny stuff';
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

                                                                                                                                                                                   ProjectNewPriority="High";
                                                                                                                                                                                   BugID = 87;
                                                                                                                                                                                   BugProjectNewID = 3;
                                                                                                                                                                                     BugNewName = 'TextBug';
                                                                                                                                                                                    BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                                                      BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                       BugNewAssignedEmployee = 'JohanJ99';
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
                                                                                                                                                                                      BugID = 88;
                                                                                                                                                                                      BugProjectNewID = 2;
                                                                                                                                                                                        BugNewName = 'ButtonBug';
                                                                                                                                                                                       BugNewShortDesc = 'Button does funny stuff';
                                                                                                                                                                                         BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                          BugNewAssignedEmployee = 'JohanJ99';
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

                                                                                                                                                                                       ProjectNewPriority="Medium";
                                                                                                                                                                                       BugID = 89;
                                                                                                                                                                                       BugProjectNewID = 2;
                                                                                                                                                                                         BugNewName = 'ButtonBug';
                                                                                                                                                                                        BugNewShortDesc = 'Button does funny stuff';
                                                                                                                                                                                          BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                           BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                                         BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                          BugNewDateFound = "2022-08-05";
                                                                                                                                                                                        BugNewStatusValue = "done";
                                                                                                                                                                                    
                                                                                                                                                                                          BugNewTargetDate ="2022-09-25";
                                                                                                                                                                                          BugNewActualDate ="2022-10-05";
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
                                                                                                                                                                                        BugID = 90;
                                                                                                                                                                                        BugProjectNewID = 2;
                                                                                                                                                                                        BugNewName = 'TextBug';
                                                                                                                                                                                        BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                                                          BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                           BugNewAssignedEmployee = 'JohanJ99';
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

                                                                                                                                                                                         ProjectNewPriority="High";
                                                                                                                                                                                         BugID = 91;
                                                                                                                                                                                         BugProjectNewID = 2;
                                                                                                                                                                                           BugNewName = 'ButtonBug';
                                                                                                                                                                                          BugNewShortDesc = 'Button does funny stuff';
                                                                                                                                                                                            BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                            BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                                         BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                          BugNewDateFound = "2022-08-05";
                                                                                                                                                                                        BugNewStatusValue = "progress";
                                                                                                                                                                                    
                                                                                                                                                                                          BugNewTargetDate ="2022-09-25";
                                                                                                                                                                                          BugNewActualDate ="2022-10-05";
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
                                                                                                                                                                                          BugID = 92;
                                                                                                                                                                                          BugProjectNewID = 2;
                                                                                                                                                                                          BugNewName = 'TextBug';
                                                                                                                                                                                          BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                                                            BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                             BugNewAssignedEmployee = 'KyleW99';
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

                                                                                                                                                                                           ProjectNewPriority="Medium";
                                                                                                                                                                                           BugID = 93;
                                                                                                                                                                                           BugProjectNewID = 2;
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
                                                                                                                                                                                            BugID = 94;
                                                                                                                                                                                            BugProjectNewID = 2;
                                                                                                                                                                                              BugNewName = 'ButtonBug';
                                                                                                                                                                                             BugNewShortDesc = 'Button does funny stuff';
                                                                                                                                                                                               BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                               BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                                               BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                BugNewDateFound = "2022-08-05";
                                                                                                                                                                                              BugNewStatusValue = "progress";
                                                                                                                                                                                          
                                                                                                                                                                                                BugNewTargetDate ="2022-09-25";
                                                                                                                                                                                                BugNewActualDate ="2022-10-05";
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
                                                                                                                                                                                             BugID = 95;
                                                                                                                                                                                             BugProjectNewID = 2;
                                                                                                                                                                                             BugNewName = 'DisplayBug';
                                                                                                                                                                                             BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                               BugNewLongDesc = 'The word order is mixed up';
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

                                                                                                                                                                                              ProjectNewPriority="Medium";
                                                                                                                                                                                              BugID = 96;
                                                                                                                                                                                              BugProjectNewID = 2;
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

                                                                                                                                                                                               ProjectNewPriority="High";
                                                                                                                                                                                               BugID = 97;
                                                                                                                                                                                               BugProjectNewID = 2;
                                                                                                                                                                                               BugNewName = 'DisplayBug';
                                                                                                                                                                                               BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                 BugNewLongDesc = 'The word order is mixed up';
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
                                                                                                                                                                                                BugID = 98;
                                                                                                                                                                                                BugProjectNewID = 2;
                                                                                                                                                                                                  BugNewName = 'ButtonBug';
                                                                                                                                                                                                 BugNewShortDesc = 'Button does funny stuff';
                                                                                                                                                                                                   BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                                   BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                                                   BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                    BugNewDateFound = "2022-08-05";
                                                                                                                                                                                                  BugNewStatusValue = "done";
                                                                                                                                                                                              
                                                                                                                                                                                                    BugNewTargetDate ="2022-09-25";
                                                                                                                                                                                                    BugNewActualDate ="2022-10-05";
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
                                                                                                                                                                                                 BugID = 99;
                                                                                                                                                                                                 BugProjectNewID = 2;
                                                                                                                                                                                                 BugNewName = 'DisplayBug';
                                                                                                                                                                                                 BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                   BugNewLongDesc = 'The word order is mixed up';
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
                                                                                                                                                                                                  BugID = 100;
                                                                                                                                                                                                  BugProjectNewID = 2;
                                                                                                                                                                                                    BugNewName = 'DisplayBug';
                                                                                                                                                                                                   BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                     BugNewLongDesc = 'The word order is mixed up';
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

                                                                                                                                                                                                   ProjectNewPriority="High";
                                                                                                                                                                                                   BugID = 101;
                                                                                                                                                                                                   BugProjectNewID = 2;
                                                                                                                                                                                                     BugNewName = 'ButtonBug';
                                                                                                                                                                                                    BugNewShortDesc = 'Button does funny stuff';
                                                                                                                                                                                                      BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                                      BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                                                      BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                       BugNewDateFound = "2022-08-05";
                                                                                                                                                                                                     BugNewStatusValue = "done";
                                                                                                                                                                                                 
                                                                                                                                                                                                       BugNewTargetDate ="2022-09-25";
                                                                                                                                                                                                       BugNewActualDate ="2022-10-05";
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
                                                                                                                                                                                                     BugID = 102;
                                                                                                                                                                                                     BugProjectNewID = 2;
                                                                                                                                                                                                       BugNewName = 'ButtonBug';
                                                                                                                                                                                                      BugNewShortDesc = 'Button does funny stuff';
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

                                                                                                                                                                                                      ProjectNewPriority="Low";
                                                                                                                                                                                                      BugID = 103;
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

                                                                                                                                                                                                       ProjectNewPriority="High";
                                                                                                                                                                                                       BugID = 104;
                                                                                                                                                                                                       BugProjectNewID = 2;
                                                                                                                                                                                                       BugNewName = 'DisplayBug';
                                                                                                                                                                                                       BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                         BugNewLongDesc = 'The word order is mixed up';
                                                                                                                                                                                                          BugNewAssignedEmployee = 'KareN99';
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
                                                                                                                                                                                                          BugID = 105;
                                                                                                                                                                                                          BugProjectNewID = 5;
                                                                                                                                                                                                          BugNewName = 'DisplayBug';
                                                                                                                                                                                                          BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                            BugNewLongDesc = 'The word order is mixed up';
                                                                                                                                                                                                             BugNewAssignedEmployee = 'KareN99';
                                                                                                                                                                                                           BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                            BugNewDateFound = "2022-09-25";
                                                                                                                                                                                                          BugNewStatusValue = "progress";
                                                                                                                                                                                                      
                                                                                                                                                                                                            BugNewTargetDate ="2022-10-09";
                                                                                                                                                                                                            BugNewActualDate ="2022-11-19";
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
                                                                                                                                                                                                             BugID = 106;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'DisplayBug';
                                                                                                                                                                                                             BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                               BugNewLongDesc = 'The word order is mixed up';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KareN99';
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
                                                                                                                                                                                                             BugID = 107;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'LogicBug';
                                                                                                                                                                                                             BugNewShortDesc = 'Calculations are failing';
                                                                                                                                                                                                               BugNewLongDesc = 'Math rules are not followed';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                                                              BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                              BugNewDateFound = "2022-09-25";
                                                                                                                                                                                                              BugNewStatusValue = "done";
                                                                                                                                                                                                          
                                                                                                                                                                                                                BugNewTargetDate ="2022-10-09";
                                                                                                                                                                                                                BugNewActualDate ="2022-11-19";
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
                                                                                                                                                                                                             BugID = 108;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'DisplayBug';
                                                                                                                                                                                                             BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                               BugNewLongDesc = 'The word order is mixed up';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KareN99';
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

                                                                                                                                                                                                                ProjectNewPriority="High";
                                                                                                                                                                                                             BugID = 109;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'LogicBug';
                                                                                                                                                                                                             BugNewShortDesc = 'Calculations are failing';
                                                                                                                                                                                                               BugNewLongDesc = 'Math rules are not followed';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                                                              BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                              BugNewDateFound = "2022-09-25";
                                                                                                                                                                                                              BugNewStatusValue = "todo";
                                                                                                                                                                                                          
                                                                                                                                                                                                                BugNewTargetDate ="2022-10-09";
                                                                                                                                                                                                                BugNewActualDate ="2022-11-19";
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
                                                                                                                                                                                                             BugID = 110;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'DisplayBug';
                                                                                                                                                                                                             BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                               BugNewLongDesc = 'The word order is mixed up';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KareN99';
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

                                                                                                                                                                                                                ProjectNewPriority="High";
                                                                                                                                                                                                             BugID = 111;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'LogicBug';
                                                                                                                                                                                                             BugNewShortDesc = 'Calculations are failing';
                                                                                                                                                                                                               BugNewLongDesc = 'Math rules are not followed';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                                                              BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                              BugNewDateFound = "2022-09-25";
                                                                                                                                                                                                              BugNewStatusValue = "review";
                                                                                                                                                                                                          
                                                                                                                                                                                                                BugNewTargetDate ="2022-10-09";
                                                                                                                                                                                                                BugNewActualDate ="2022-11-19";
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
                                                                                                                                                                                                             BugID = 112;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'TextBug';
                                                                                                                                                                                                             BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                                                                               BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KyleW99';
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

                                                                                                                                                                                                                ProjectNewPriority="Low";
                                                                                                                                                                                                             BugID = 113;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'DisplayBug';
                                                                                                                                                                                                             BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                               BugNewLongDesc = 'The word order is mixed up';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KareN99';
                                                                                                                                                                                                              BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                              BugNewDateFound = "2022-09-25";
                                                                                                                                                                                                              BugNewStatusValue = "done";
                                                                                                                                                                                                          
                                                                                                                                                                                                                BugNewTargetDate ="2022-10-09";
                                                                                                                                                                                                                BugNewActualDate ="2022-11-19";
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
                                                                                                                                                                                                             BugID = 114;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'CSSBug';
                                                                                                                                                                                                              BugNewShortDesc = 'CSS does not display correctly';
                                                                                                                                                                                                                BugNewLongDesc = 'Hovers in the wrong places ';
                                                                                                                                                                                                                  BugNewAssignedEmployee = 'KareN99';
                                                                                                                                                                                                                BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                                BugNewDateFound = "2022-08-30";
                                                                                                                                                                                                              BugNewStatusValue = "review";
                                                                                                                                                                                                          
                                                                                                                                                                                                                BugNewTargetDate ="2022-10-17";
                                                                                                                                                                                                                BugNewActualDate ="2022-11-15";
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
                                                                                                                                                                                                             BugID = 115;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'DisplayBug';
                                                                                                                                                                                                             BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                               BugNewLongDesc = 'The word order is mixed up';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KareN99';
                                                                                                                                                                                                              BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                              BugNewDateFound = "2022-09-25";
                                                                                                                                                                                                              BugNewStatusValue = "progress";
                                                                                                                                                                                                          
                                                                                                                                                                                                                BugNewTargetDate ="2022-10-09";
                                                                                                                                                                                                                BugNewActualDate ="2022-11-19";
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
                                                                                                                                                                                                             BugID = 116;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'CSSBug';
                                                                                                                                                                                                              BugNewShortDesc = 'CSS does not display correctly';
                                                                                                                                                                                                                BugNewLongDesc = 'Hovers in the wrong places ';
                                                                                                                                                                                                                  BugNewAssignedEmployee = 'KareN99';
                                                                                                                                                                                                                BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                                BugNewDateFound = "2022-08-30";
                                                                                                                                                                                                              BugNewStatusValue = "todo";
                                                                                                                                                                                                          
                                                                                                                                                                                                                BugNewTargetDate ="2022-10-17";
                                                                                                                                                                                                                BugNewActualDate ="2022-11-15";
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
                                                                                                                                                                                                             BugID = 117;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'TextBug';
                                                                                                                                                                                                             BugNewShortDesc = 'Text does funny stuff';
                                                                                                                                                                                                               BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                                                              BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                              BugNewDateFound = "2022-09-25";
                                                                                                                                                                                                              BugNewStatusValue = "review";
                                                                                                                                                                                                          
                                                                                                                                                                                                                BugNewTargetDate ="2022-10-09";
                                                                                                                                                                                                                BugNewActualDate ="2022-11-19";
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
                                                                                                                                                                                                             BugID = 118;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'DisplayBug';
                                                                                                                                                                                                             BugNewShortDesc = 'User is seeing incorrect output';
                                                                                                                                                                                                               BugNewLongDesc = 'The word order is mixed up';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KareN99';
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

                                                                                                                                                                                                                ProjectNewPriority="Low";
                                                                                                                                                                                                             BugID = 119;
                                                                                                                                                                                                             BugProjectNewID = 5;
                                                                                                                                                                                                             BugNewName = 'ButtonBug';
                                                                                                                                                                                                             BugNewShortDesc = 'Button does funny stuff';
                                                                                                                                                                                                               BugNewLongDesc = 'Jumps around like a lunatic';
                                                                                                                                                                                                                BugNewAssignedEmployee = 'KyleW99';
                                                                                                                                                                                                              BugNewFoundBy ="Anon Caller";
                                                                                                                                                                                                              BugNewDateFound = "2022-09-25";
                                                                                                                                                                                                              BugNewStatusValue = "todo";
                                                                                                                                                                                                          
                                                                                                                                                                                                                BugNewTargetDate ="2022-10-09";
                                                                                                                                                                                                                BugNewActualDate ="2022-11-19";
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
             + currentOBJ.ProjectDescription+"</div><div> <button onclick='DeleteProject("+currentOBJ.ProjectID+")'>Delete Project "+ currentOBJ.ProjectID+" </button> </div>" ; 
        }
        else if(currentType == "Employee")
        {
   
          document.getElementById("AssignedEmployeeAdd").innerHTML += "<option value='" +currentOBJ.EmployeeUsername+"'>"+currentOBJ.EmployeeUsername+"</option>";

          document.getElementById("EmployeeList").innerHTML += "<div class='table-header projectIDhover' onclick='editEmployee("+currentOBJ.EmployeeID+")'><h4>"+currentOBJ.EmployeeID+"</h4></div>";
          document.getElementById("EmployeeList").innerHTML += "<div class='table-header'><h4>"+currentOBJ.EmployeeFirstName+"</h4></div>";
          document.getElementById("EmployeeList").innerHTML += "<div class='table-header'><h4>"+currentOBJ.EmployeeLastName+"</h4></div>";
          document.getElementById("EmployeeList").innerHTML += "<div class='table-header'><h4>"+currentOBJ.EmployeeEmail+"</h4></div>";
          document.getElementById("EmployeeList").innerHTML += "<div class='table-header'><h4>"+currentOBJ.EmployeeUsername+"</h4></div>";
          document.getElementById("EmployeeList").innerHTML += "<div class='table-header'><h4></h4></div>";
          
          
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
let ProjectsChart = new Chart(document.getElementById('ProjectsChart'),projectsAVGChart());
document.getElementById('ProjectsChart').style.backgroundColor ="#838888";
let ThisProjectChart = new Chart(document.getElementById('ThisProjectChart'),projectsAVGChart());
document.getElementById('ThisProjectChart').style.backgroundColor="#838888";