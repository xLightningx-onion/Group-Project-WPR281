function addEmployeeDetails()
{
//let EmpArr=[];
//let NotInternalStorage=[];
let ItsAnEmployee=EmployeeList();
 let highestkey =NewKey();
/*
//find employees
for (key in localStorage)
{
  EmpArr.push(key);
}
EmpArr.sort();
//console.log(BugArr);
for(let i=0;i<=EmpArr.length;i++)
{
    if(isFinite(EmpArr[i])){
        NotInternalStorage.push(EmpArr[i]);
    }

}


for(let i=0;i<NotInternalStorage.length;i++)
{
    let currentOBJ=JSON.parse(localStorage.getItem(NotInternalStorage[i]));
    let currentType=currentOBJ.ProjectType;

    if( currentType  == "Employee"){
      ItsAnEmployee.push(NotInternalStorage[i]);
     // console.log(NotInternalStorage[i])
    }
}

/*
for(i=0; i<ItsAnEmployee.length;i++)
    {
        currentOBJ = JSON.parse(localStorage.getItem(ItsAnEmployee[i]));
        console.log(currentOBJ);
        if(currentOBJ.EmployeeID >= HigestIdNum){
          HigestIdNum = currentOBJ.EmployeeID + 1
          //console.log("New Id:" + HigestIdNum)
        }
    }
*/
      let EmployeeNewID = highestkey;
      let EmployeeNewFirstName=document.getElementById("EmployeeFirstNameAdd").value;
      let EmployeeNewLastName =document.getElementById("EmployeeLastNameAdd").value;
      let EmployeeNewEmail = document.getElementById("EmployeeEmailAdd").value;
      let EmployeeNewUsername= document.getElementById("EmployeeUserNameAdd").value;
      let EmployeeNewPhoto= document.getElementById("EmployeeProfilePicAdd").value;
      let ProjectNewType= "Employee";
/*
      let keyList =[];
      let numberOnlyKeyList =[];
    
   for( let key in localStorage)
     {
       keyList.push(key);
     }
    keyList.sort();
  
    for(i =0 ;i <keyList.length;i++)
    {
       if(isNaN(keyList[i]) == false)
     {
       numberOnlyKeyList.push(keyList[i])
     }
    }
   for(i=0;i<numberOnlyKeyList.length;i++)
   {
     if(parseInt(numberOnlyKeyList[i])>highestkey)
     {
       highestkey = parseInt(numberOnlyKeyList[i]);
     }
   }
  
   highestkey +=1;

   */
      let addEmployee = {EmployeeID:EmployeeNewID,EmployeeFirstName:EmployeeNewFirstName,EmployeeLastName:EmployeeNewLastName,EmployeeEmail:EmployeeNewEmail,EmployeeUsername:EmployeeNewUsername,EmployeePhoto: EmployeeNewPhoto, ProjectType:ProjectNewType };
  
    
  
      localStorage.setItem(highestkey,JSON.stringify(addEmployee)); 
     PopulatePage();
      //console.log(localStorage)
}