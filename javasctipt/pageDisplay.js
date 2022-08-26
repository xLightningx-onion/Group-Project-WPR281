function board(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "active";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "";
    //show
    document.getElementById("Board").className = "content";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
}
function addEmployee(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "active";
    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "content";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
}
function projects(){
    //nav status
    document.getElementById("1").className = "active";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "";
    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "content";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
}
function ticket(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "active";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "";
    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "content";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
}
function projectAdd(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "";
    document.getElementById("5").className = "active";
    document.getElementById("6").className = "";
    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "content";
    document.getElementById("Bugs").className = "hide";
    document.getElementById("ShowBugPage").className = "hide";
}
function bugs(){
    //nav status
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
    document.getElementById("4").className = "active";
    document.getElementById("5").className = "";
    document.getElementById("6").className = "";
    //show
    document.getElementById("Board").className = "hide";
    document.getElementById("AddEmployee").className = "hide";
    document.getElementById("Projects").className = "hide";
    document.getElementById("Ticket").className = "hide";
    document.getElementById("ProjectAdd").className = "hide";
    document.getElementById("Bugs").className = "content";
    document.getElementById("ShowBugPage").className = "hide";
}
function move_project(BugId){
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("Board").className = "content";
    document.getElementById("2").className = "active";
    //console.log(BugId)
    //prompt("project is moving")
    let BugIDMove = BugId
    let BugArr=[];
    let NotInternalStorage=[];
    let ItsABug=[];
    let HigestIdNum = 0;
    let currStatus;
    
    //find bugs
    for (key in localStorage)
    {
        BugArr.push(key);
    }
    BugArr.sort();
    //console.log(BugArr);
    for(let i=0;i<=BugArr.length;i++)
    {
        if(isFinite(BugArr[i])){
            NotInternalStorage.push(BugArr[i]);
        }
    
    }
    for(let i=0;i<NotInternalStorage.length;i++)
    {
        let currentOBJ=JSON.parse(localStorage.getItem(NotInternalStorage[i]));
        let currentType=currentOBJ.ProjectType;
    
        if( currentType  != "Employee" && currentType != "Project"){
            ItsABug.push(NotInternalStorage[i]);
            //console.log(NotInternalStorage[i])
        }
    }
    for(i=0; i<ItsABug.length;i++)
        {
            currentOBJ = JSON.parse(localStorage.getItem(ItsABug[i]));
            currStatus = currentOBJ.ProjectStatus;
            
            if(currentOBJ.BugId == BugIDMove){
                console.log(currentOBJ);
                console.log(currentOBJ.ProjectStatus);
                if(currStatus === "todo"){
                    currentOBJ.ProjectStatus = "progress";
                    BoardSorting();
                }
                else if(currStatus === "progress"){
                    currentOBJ.ProjectStatus = "review";
                    BoardSorting();
                }
                else if(currStatus === "review"){
                    currentOBJ.ProjectStatus = "done";
                    BoardSorting();
                }
            }
        }
        
    
        //for(i=0; i<ItsABug.length;i++)
        //{
           // currentOBJ = JSON.parse(localStorage.getItem(ItsABug[i]));
           // if(currentOBJ.BugId == BugIDMove){
            //    if(cur)
           // }
        //}




        
}
function delete_project(bugid){
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("Board").className = "content";
    document.getElementById("2").className = "active";
    let BugIDDelete = BugId
    let BugArr=[];
    let NotInternalStorage=[];
    let ItsABug=[];
    let HigestIdNum = 0;
    
    //find bugs
    for (key in localStorage)
    {
        BugArr.push(key);
    }
    BugArr.sort();
    //console.log(BugArr);
    for(let i=0;i<=BugArr.length;i++)
    {
        if(isFinite(BugArr[i])){
            NotInternalStorage.push(BugArr[i]);
        }
    
    }
    for(let i=0;i<NotInternalStorage.length;i++)
    {
        let currentOBJ=JSON.parse(localStorage.getItem(NotInternalStorage[i]));
        let currentType=currentOBJ.ProjectType;
    
        if( currentType  != "Employee" && currentType != "Project"){
            ItsABug.push(NotInternalStorage[i]);
            //console.log(NotInternalStorage[i])
        }
    }
    for(i=0; i<ItsABug.length;i++)
        {
            currentOBJ = JSON.parse(localStorage.getItem(ItsABug[i]));
            
            //console.log(currentOBJ);
            if(currentOBJ.BugId == BugIDDelete){
              console.log(currentOBJ);
              
              
            }
        }
}