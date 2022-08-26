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

function send_back_project(BugId){
    document.getElementById("ShowBugPage").className = "hide";
    document.getElementById("Board").className = "content";
    document.getElementById("2").className = "active";
    //console.log(BugId)
    //prompt("project is moving")
    let BugIDMove = BugId
    let BugArr=[];
    let NotInternalStorage=[];
    let ItsABug=[];

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
       
          
                if(currStatus == "progress"){
                    console.log("I am in progress")
                    currentOBJ.ProjectStatus = "todo";
                    localStorage.removeItem(ItsABug[i]);
                    localStorage.setItem(ItsABug[i],JSON.stringify(currentOBJ));
                    console.log("I am changed to"+currentOBJ.ProjectStatus)
                    BoardSorting();
                }
                else if(currStatus == "review"){
                    console.log("I am in review")
                    currentOBJ.ProjectStatus = "progress";
                    localStorage.removeItem(ItsABug[i]);
                    localStorage.setItem(ItsABug[i],JSON.stringify(currentOBJ));
                    console.log("I am changed to"+currentOBJ.ProjectStatus)
                    BoardSorting();
                }
                else if(currStatus == "done"){
                    console.log("I am in review")
                    currentOBJ.ProjectStatus = "review";
                    localStorage.removeItem(ItsABug[i]);
                    localStorage.setItem(ItsABug[i],JSON.stringify(currentOBJ));
                    console.log("I am changed to"+currentOBJ.ProjectStatus)
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
       
          
                if(currStatus == "todo"){
                    console.log("I am in todo")
                    currentOBJ.ProjectStatus = "progress";
                    localStorage.removeItem(ItsABug[i]);
                    localStorage.setItem(ItsABug[i],JSON.stringify(currentOBJ));
                    console.log("I am changed to"+currentOBJ.ProjectStatus)
                    BoardSorting();
                }
                else if(currStatus == "progress"){
                    console.log("I am in progress")
                    currentOBJ.ProjectStatus = "review";
                    localStorage.removeItem(ItsABug[i]);
                    localStorage.setItem(ItsABug[i],JSON.stringify(currentOBJ));
                    console.log("I am changed to"+currentOBJ.ProjectStatus)
                    BoardSorting();
                }
                else if(currStatus == "review"){
                    console.log("I am in review")
                    currentOBJ.ProjectStatus = "done";
                    localStorage.removeItem(ItsABug[i]);
                    localStorage.setItem(ItsABug[i],JSON.stringify(currentOBJ));
                    console.log("I am changed to"+currentOBJ.ProjectStatus)
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
    let BugIDDelete = bugid;
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
              localStorage.removeItem(ItsABug[i]);
              BoardSorting();
            }
        }
}