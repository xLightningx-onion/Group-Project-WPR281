function addEmployeeDetails()
{

      let EmployeeNewID =document.getElementById("EmployeeIdAdd").value;
      let EmployeeNewFirstName=document.getElementById("EmployeeFirstNameAdd").value;
      let EmployeeNewLastName =document.getElementById("EmployeeLastNameAdd").value;
      let EmployeeNewEmail = document.getElementById("EmployeeEmailAdd").value;
      let EmployeeNewUsername= document.getElementById("EmployeeUserNameAdd").value;
      let EmployeeNewPhoto= document.getElementById("EmployeeProfilePicAdd").value;
      let ProjectNewType= "Employee";

      let keyList =[];
      let numberOnlyKeyList =[];
      let highestkey =0;
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
      let addEmployee = {EmployeeID:EmployeeNewID,EmployeeFirstName:EmployeeNewFirstName,EmployeeLastName:EmployeeNewLastName,EmployeeEmail:EmployeeNewEmail,EmployeeUsername:EmployeeNewUsername,EmployeePhoto: EmployeeNewPhoto, ProjectType:ProjectNewType };
  
    
  
      localStorage.setItem(highestkey,JSON.stringify(addEmployee)); 
      console.log(localStorage)
}