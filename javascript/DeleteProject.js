
function DeleteProject(ProjectID){
<<<<<<< HEAD:javasctipt/DeleteProject.js
   let ProjArr=ProjectList();
=======
    let ProjArr=ProjectList();
>>>>>>> a3c14c4a8a4a65ede2195cc1335e8740f29c83ab:javascript/DeleteProject.js
    let BugArr=BugList();
    let ProjectDeleteID=ProjectID;
    for(i=0; i<ProjArr.length;i++)
    {
        currentOBJ = JSON.parse(localStorage.getItem(ProjArr[i]));
        if(currentOBJ.ProjectId == ProjectDeleteID)
        {
<<<<<<< HEAD:javasctipt/DeleteProject.js
           localStorage.removeItem(currentOBJ.ProjectID);
        }  
    }
        
        for(i=0; i<BugArr.length;i++){
            currentOBJ = JSON.parse(localStorage.getItem(BugArr[i]));
            if(currentOBJ.ProjectID == ProjectDeleteID)
            {
                localStorage.removeItem(currentOBJ.BugID);
            }
        }

}
=======
            localStorage.removeItem(currentOBJ.ProjectID);
        } 
    }
 
    for(i=0; i<BugArr.length;i++){
        currentOBJ = JSON.parse(localStorage.getItem(BugArr[i]));
        if(currentOBJ.ProjectID == ProjectDeleteID)
        {
            localStorage.removeItem(currentOBJ.BugID);
        }
    }
 PopulatePage();
}

>>>>>>> a3c14c4a8a4a65ede2195cc1335e8740f29c83ab:javascript/DeleteProject.js
