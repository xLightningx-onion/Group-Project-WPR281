


function addBug(){

//Structure was double so I changed it, and tweaked naming and types 
//Also now save new bugs over sessions, and displays Llewelyn
  /*


  Old Structure

 let BugProjectNewID = document.getElementById("ProjectIdTicketAdd").value;
    let BugNewName = document.getElementById("BugNameAdd").value;
    let BugNewShortDesc = document.getElementById("BugShortDescAdd").value;
    let BugNewLongDesc = document.getElementById("BugLongDescAdd").value;
    let BugNewAssignedEmployeeSelect = document.getElementById("AssignedEmployeeAdd");
    let BugNewAssignedEmployee = BugNewAssignedEmployeeSelect.option[BugNewAssignedEmployeeSelect.SelectedIndex].value;
    let BugNewFoundBy = document.getElementById("FoundByAdd").value;
    let BugNewDateFound = document.getElementById("DateFoundAdd").value;
    let BugNewStatusSelect = document.getElementById("StatusAdd");
    let BugNewStatusValue = BugNewStatusSelect.option[BugNewStatusSelect.SelectedIndex].value;
    let BugNewPrioritySelect = document.getElementById("PriorityAdd");
    let BugNewPriorityValue = BugNewPrioritySelect.option[BugNewPrioritySelect.SelectedIndex].value;
    let BugNewTargetDate = document.getElementById("TargetDateAdd");
    let BugNewActualDate = document.getElementById("ActualDateAdd");
    let BugNewResolutionSummary = document.getElementById("ResolutionSummaryAdd");



  New Structure

     let BugProjectNewID = document.getElementById("ProjectIdTicketAdd").value;
    let BugNewName = document.getElementById("BugNameAdd").value;
    let BugNewShortDesc = document.getElementById("BugShortDescAdd").value;
    let BugNewLongDesc = document.getElementById("BugLongDescAdd").value;
    let BugNewAssignedEmployee = document.getElementById("AssignedEmployeeAdd").value;
    let BugNewFoundBy = document.getElementById("FoundByAdd").value;
    let BugNewDateFound = document.getElementById("DateFoundAdd").value;
    let BugNewStatusValue = document.getElementById("StatusAdd").value;
    let BugNewPriorityValue = document.getElementById("PriorityAdd").value;
    let BugNewTargetDate = document.getElementById("TargetDateAdd").value;
    let BugNewActualDate = document.getElementById("ActualDateAdd").value;
    let BugNewResolutionSummary = document.getElementById("ResolutionSummaryAdd").value;

   ProjectNewType = "Bug";
  */


    let BugProjectNewID = document.getElementById("ProjectIdTicketAdd").value;
    let BugNewName = document.getElementById("BugNameAdd").value;
    let BugNewShortDesc = document.getElementById("BugShortDescAdd").value;
    let BugNewLongDesc = document.getElementById("BugLongDescAdd").value;
    let BugNewAssignedEmployee = document.getElementById("AssignedEmployeeAdd").value;
    let BugNewFoundBy = document.getElementById("FoundByAdd").value;
    let BugNewDateFound = document.getElementById("DateFoundAdd").value;
    let BugNewStatusValue = document.getElementById("StatusAdd").value;
    let BugNewPriorityValue = document.getElementById("PriorityAdd").value;
    let BugNewTargetDate = document.getElementById("TargetDateAdd").value;
    let BugNewActualDate = document.getElementById("ActualDateAdd").value;
    let BugNewResolutionSummary = document.getElementById("ResolutionSummaryAdd").value;
       ProjectNewType = "Bug";

   // let keyList =[];
    //   let numberOnlyKeyList =[];
       let highestkey =NewKey();
   /* for( let key in localStorage)
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
    */
    // console.log("numbersonlykylist: "+numberOnlyKeyList)
    // console.log(highestkey);
  /*   for( i = 0 ; i < keyList.length;i++)
     {
          let lastNumber =0;
         if(isNaN(keyList[i]))
         {
           lastNumber =keyList[i-1];
           break;
         }
        
     }
*/
/*
  for(let i =0 ; i<lastnumber;i++)
         {
           if(parseInt(keyList[i])>highestkey)        
           {
                highestkey = keyList[i];
           }
           console.log("Highestkey"+highestkey)
         }
*/

let BugArr=[];
let NotInternalStorage=[];
let ItsABug=[];
let HigestIdNum = 0;
/*
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
        if(currentOBJ.BugId >= HigestIdNum){
          HigestIdNum = currentOBJ.BugId+1
          //console.log("New Id:" + HigestIdNum)
        }
    }
*/
    let addBug = {BugId:highestkey,ProjectId:BugProjectNewID,BugName:BugNewName,
      BugShortDesc:BugNewShortDesc,BugLongDesc:BugNewLongDesc,
      BugAssignedEmployee:BugNewAssignedEmployee,BugFoundBy:BugNewFoundBy,
      BugDateFound:BugNewDateFound,ProjectStatus:BugNewStatusValue,
      ProjectPriority:BugNewPriorityValue,BugTargetDate:BugNewTargetDate,
      BugActualDate:BugNewActualDate,BugResolutionSummary:BugNewResolutionSummary,
      ProjectType:ProjectNewType};


 // highestkey +=1;
//console.log("Next Key:" +highestkey)
   
 
     currentOBJ = addBug;
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugId+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugName+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugShortDesc+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugLongDesc+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugAssignedEmployee+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugFoundBy+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugDateFound+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.ProjectStatus+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.Priority+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugTargetDate+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugActualDate+"</h4></div>";
    document.getElementById("bugListWrapper").innerHTML += "<div class='table-header'><h4>"+currentOBJ.BugResolutionSummary+"</h4></div>";
    localStorage.setItem(highestkey,JSON.stringify(addBug));

    BoardSorting();
}