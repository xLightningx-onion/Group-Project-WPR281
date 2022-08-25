function addEmployee()
{
      let storageKey = (localStorage.length+1); 
      let EmployeeNewID =document.getElementById("EmployeeIDAdd").value;
      let EmployeeNewFirstName=document.getElementById("EmployeeFirstNameAdd").value;
      let EmployeeNewLastName =document.getElementById("EmployeeLastNameAdd").value;
      let EmployeeNewEmail = document.getElementById("EmployeeEmailAdd").value;
      let EmployeeNewUsername= document.getElementById("EmployeeUsernameAdd").value;
      let EmployeeNewPhoto= document.getElementById("EmployeeNewPhoto").value;
      let ProjectNewType= "Employee";
      let highestkey = 0;
      let keyList =[];
      
        for( let key in localStorage)
        {
          keyList.push(key);
        }
  
      let addEmployee = {EmployeeID:EmployeeNewID,EmployeeFirstName:EmployeeNewFirstName,EmployeeLastName:EmployeeNewLastName,EmployeeEmail:EmployeeNewEmail,EmployeeUsername:EmployeeNewUsername,EmployeePhoto: EmployeeNewPhoto, ProjectType:ProjectNewType };
  document.getElementById("Employee List").innerHTML +="<div>" + addEmployee.EmployeeID +"</div>" +  "<div>"+ addEmployee.EmployeeFirstName +"</div>"    +"<div>"+ addEmployee.EmployeeLastName+"</div>"   +"</div>"+ addEmployee.EmployeeEmail+"</div>" +"</div>"+ addEmployee.EmployeeUsername +"</div>"  +"</div>"+ addEmployee.EmployeePhoto;
    
  
      localStorage.setItem(storageKey,JSON.stringify(addEmployee)); 
}