function board(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "active";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "";
    document.getElementById("7").className = "";
    //show
    document.getElementById("Board").className = "content";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("ProjectInfo").className = "hide";
    document.getElementById("TicketUpdate").className = "hide";
    document.getElementById("Employees").className = "hide";
    document.getElementById("EmployeeEdit").className = "hide"; 
    document.getElementById("ProjectEdit").className = "hide"; 
  
}
function addEmployee(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "active";
    document.getElementById("7").className = "";
    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "content";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("ProjectInfo").className = "hide";
    document.getElementById("TicketUpdate").className = "hide";
    document.getElementById("Employees").className = "hide";
    document.getElementById("EmployeeEdit").className = "hide"; 
    document.getElementById("ProjectEdit").className = "hide"; 
}
function projects(){
    //nav status
    document.getElementById("1").className = "active";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "";
    document.getElementById("7").className = "";

    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "content";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("ProjectInfo").className = "hide";
    document.getElementById("TicketUpdate").className = "hide";
    document.getElementById("Employees").className = "hide";
    document.getElementById("EmployeeEdit").className = "hide"; 
    document.getElementById("ProjectEdit").className = "hide"; 
  

}
function ticket(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "active";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "";
    document.getElementById("7").className = "";
    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "content";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("ProjectInfo").className = "hide";
    document.getElementById("TicketUpdate").className = "hide";
    document.getElementById("Employees").className = "hide";
    document.getElementById("EmployeeEdit").className = "hide"; 
    document.getElementById("ProjectEdit").className = "hide"; 
}
function projectAdd(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "active";
    document.getElementById("6").className = "";
    document.getElementById("7").className = "";
    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "content";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("ProjectInfo").className = "hide";
    document.getElementById("TicketUpdate").className = "hide";
    document.getElementById("Employees").className = "hide";
    document.getElementById("EmployeeEdit").className = "hide";
    document.getElementById("ProjectEdit").className = "hide";  
}
function bugs(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "active";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "";
    document.getElementById("7").className = "";
    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "content";
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("ProjectInfo").className = "hide";
    document.getElementById("TicketUpdate").className = "hide";
    document.getElementById("Employees").className = "hide";
    document.getElementById("EmployeeEdit").className = "hide"; 
    document.getElementById("ProjectEdit").className = "hide"; 
    ProjectsChart.destroy();
     ProjectsChart = new Chart(document.getElementById('ProjectsChart'),projectsAVGChart());

}
function Employee(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "";
    document.getElementById("7").className = "active";
    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("ProjectInfo").className = "hide";
    document.getElementById("TicketUpdate").className = "hide";
    document.getElementById("Employees").className = "content";  
    document.getElementById("EmployeeEdit").className = "hide"; 
    document.getElementById("ProjectEdit").className = "hide"; 
}
function send_back_project(BugId){
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("Board").className = "content";
    document.getElementById("2").className = "active";

    let ItsABug=BugList();

    let currStatus;

    for(i=0; i<ItsABug.length;i++)
        {
            currentOBJ = JSON.parse(localStorage.getItem(ItsABug[i]));
            currStatus = currentOBJ.ProjectStatus;
            
            if(currentOBJ.BugId == BugId){
       
          
                if(currStatus == "progress"){
                    currentOBJ.ProjectStatus = "todo";
                    localStorage.removeItem(ItsABug[i]);
                    localStorage.setItem(ItsABug[i],JSON.stringify(currentOBJ));
                    BoardSorting();
                    break;
                }
                else if(currStatus == "review"){
                    currentOBJ.ProjectStatus = "progress";
                    localStorage.removeItem(ItsABug[i]);
                    localStorage.setItem(ItsABug[i],JSON.stringify(currentOBJ));
                    BoardSorting();
                    break;
                }
                else if(currStatus == "done"){
                    currentOBJ.ProjectStatus = "review";
                    localStorage.removeItem(ItsABug[i]);
                    localStorage.setItem(ItsABug[i],JSON.stringify(currentOBJ));
                    BoardSorting();
                    break;
                }
            }
        }

}

function move_project(BugId){
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("Board").className = "content";
    document.getElementById("2").className = "active";
    let ItsABug=BugList();

    let currStatus;
  
    for(i=0; i<ItsABug.length;i++)
        {
            currentOBJ = JSON.parse(localStorage.getItem(ItsABug[i]));
            currStatus = currentOBJ.ProjectStatus;
            if(currentOBJ.BugId == BugId){

                if(currStatus == "todo"){
                    currentOBJ.ProjectStatus = "progress";
                    let ID = currentOBJ.BugId;
                    localStorage.removeItem(ID);
                    localStorage.setItem(ID,JSON.stringify(currentOBJ));
                    BoardSorting();
                    break;
                }
                else if(currStatus == "progress"){
                    currentOBJ.ProjectStatus = "review";
                    let ID = currentOBJ.BugId;
                    localStorage.removeItem(ID);
                    localStorage.setItem(ID,JSON.stringify(currentOBJ));
                    BoardSorting();
                    break;
                }
                else if(currStatus == "review"){
                    currentOBJ.ProjectStatus = "done";
                    let ID = currentOBJ.BugId;
                    localStorage.removeItem(ID);
                    localStorage.setItem(ID,JSON.stringify(currentOBJ));
                    BoardSorting();
                    break;
                }
            }
        }
        
}


function delete_project(BugId){
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("Board").className = "content";
    document.getElementById("2").className = "active";
    let BugIdDelete = BugId;
    let ItsABug=BugList();

    for(i=0; i<ItsABug.length;i++)
        {
            currentOBJ = JSON.parse(localStorage.getItem(ItsABug[i]));
            
  
            if(currentOBJ.BugId == BugIdDelete){
              localStorage.removeItem(ItsABug[i]);
    
              BoardSorting();
            }
        }
}