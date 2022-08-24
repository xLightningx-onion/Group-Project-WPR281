function BoardSorting(){
    let todo=[];
    let progress=[];
    let review=[];
    let done=[];
    let HighPriority=[];
    let LowPriority=[];
    let MediumPriority=[];
    let NotInternalStorage=[];
    let NotEmployee=[];
    let BoardArr=[];
    let PassVallue;


    for (key in localStorage)
    {
        BoardArr.push(key);
    }

    BoardArr.sort();

    //console.log("BoardArray "+BoardArr)

    for(let i=0;i<=BoardArr.length;i++)
    {
        if(isFinite(BoardArr[i])){
            NotInternalStorage.push(BoardArr[i]);
        }

    }

    //console.log("Not Internal Storage    ..  "+NotInternalStorage)

    for(let i=0;i<NotInternalStorage.length;i++)
    {
        //console.log(typeof(NotInternalStorage[0]));
        //console.log(localStorage.getItem(1));

        let currentOBJ=JSON.parse(localStorage.getItem(NotInternalStorage[i]));
        let currentType=currentOBJ.ProjectType;
        //console.log("Object"+currentOBJ);
        if( currentType  !="Employee"){
            NotEmployee.push(NotInternalStorage[i]);
        }
    }

    //console.log("Not employee "+NotEmployee)
    
    for(let i=0;i<NotEmployee.length;i++){

        let currentOBJ=JSON.parse(localStorage.getItem(NotEmployee[i]));
        let currentType=currentOBJ.ProjectPriority;
        
        if(currentType=="High"){
            HighPriority.push(NotEmployee[i]);
        }
        else if(currentType=="Medium"){
            MediumPriority.push(NotEmployee[i]);
        }
        else if(currentType=="Low"){
            LowPriority.push(NotEmployee[i]);
        }

    }

    
    //console.log("High Priority "+HighPriority)
    //console.log("Medium Priority "+MediumPriority)
    //console.log("Low Priority "+LowPriority)

    for(let i=0;i<HighPriority.length;i++)
    {
        let currentOBJ=JSON.parse(localStorage.getItem(HighPriority[i]));
        let currentType=currentOBJ.ProjectStatus;

        PassVallue=HighPriority[i]

        if(currentType=="todo"){
            todo.push(HighPriority[i]);
            continue;
        }
        else if(currentType=="progress"){
            progress.push(HighPriority[i]);
            PassVallue=HighPriority[i];
        }
        else if(currentType=="review"){
            review.push(HighPriority[i]);
            PassVallue=HighPriority[i];
        }
        else if(currentType=="done"){
            done.push(HighPriority[i]);
            PassVallue=HighPriority[i];
        }
        
        console.log("High "+PassVallue);
        //console.log("Prior not pass val "+HighPriority[i]);
        
    }

    for(let i=0;i<MediumPriority.length;i++)
    {
        let currentOBJ=JSON.parse(localStorage.getItem(MediumPriority[i]));
        let currentType=currentOBJ.ProjectStatus;

        if(currentType=="todo"){
            todo.push(MediumPriority[i]);
            PassVallue=MediumPriority[i];
            
        }
        else if(currentType=="progress"){
            progress.push(MediumPriority[i]);
            PassVallue=MediumPriority[i];
        }
        else if(currentType=="review"){
            review.push(MediumPriority[i]);
            PassVallue=MediumPriority[i];
        }
        else if(currentType=="done"){
            done.push(MediumPriority[i]);
            PassVallue=MediumPriority[i];
        }
        console.log("Med "+PassVallue);
        //console.log("Prior not pass val "+MediumPriority[i])
    }

    for(let i=0;i<LowPriority.length;i++)
    {
        let currentOBJ=JSON.parse(localStorage.getItem(LowPriority[i]));
        let currentType=currentOBJ.ProjectStatus;

        if(currentType=="todo"){
            todo.push(LowPriority[i]);
            PassVallue=LowPriority[i];
        }
        else if(currentType=="progress"){
            progress.push(LowPriority[i]);
            PassVallue=LowPriority[i];
        }
        else if(currentType=="review"){
            review.push(LowPriority[i]);
            PassVallue=LowPriority[i];
        }
        else if(currentType=="done"){
            done.push(LowPriority[i]);
            PassVallue=LowPriority[i];
        }

        console.log("Low "+PassVallue);
        //console.log("Prior not pass val "+LowPriority[i]);
    }
        //console.log("todo "+todo);
        //console.log("Progress "+progress);
        //console.log("review "+review);
        //console.log("done "+done);
    
    

}

function PaintColumn (PassVallue , Priority, Status){
    if (Priority=="High"&&Status=="todo"){

    }
    else if(Priority=="High"&& Status =="progress"){
        
    }
    else if(Priority=="High"&& Status =="review"){
        
    }
    else if(Priority=="High"&& Status =="done"){
        
    }
    if (Priority=="Medium"&&Status=="todo"){

    }
    else if(Priority=="Medium"&& Status =="progress"){
        
    }
    else if(Priority=="Medium"&& Status =="review"){
        
    }
    else if(Priority=="Medium"&& Status =="done"){
        
    }
    if (Priority=="Low"&&Status=="todo"){

    }
    else if(Priority=="Low"&& Status =="progress"){
        
    }
    else if(Priority=="Low"&& Status =="review"){
        
    }
    else if(Priority=="Low"&& Status =="done"){
        
    }

}


// function DispTodo(PassVallue){

//     let currentOBJ=JSON.parse(localStorage.getItem(PassVallue));

//     console.log("In function "+PassVallue)
//     //document.getElementById("projectHeader").innerHTML+="<h3 id='ProjectName'>""</h3>"

// }
// function DispProgress(PassVallue){
//     let currentOBJ=JSON.parse(localStorage.getItem(PassVallue));

// }
// function DispReview(PassVallue){
//     let currentOBJ=JSON.parse(localStorage.getItem(PassVallue));

// }