//find and increment the highest key in localStorage
function NewKey()
{
    let numbers = NumbersKeyList();
    for(i=0;i<numbers.length;i++)
    {
      if(parseInt(numbers[i])>highestkey)
      {
        highestkey = parseInt(numbers[i]);
      }
   }
   highestkey +=1;

   return highestkey;

}



function NumbersKeyList()
{
    let populatekeyList =[];
    let numbersOnlykeyList =[];
    for( key in localStorage)
    {
       
        populatekeyList.push(key);
    }


for(i=0 ; i <populatekeyList.length;i++)
{
  if(isNaN(populatekeyList[i]) == false)
  {
    numbersOnlykeyList.push(populatekeyList[i]);
  }
}

numbersOnlykeyList.sort();
return numbersOnlykeyList;
}



function EmployeeList()
{
  let numberList =NumbersKeyList();
  console.log(numberList);
  let employees =[];
  for(i = 0;i<numberList.length;i++)
  {
    let currOBJ = JSON.parse(localStorage.getItem(parseInt(numberList[i])));
    console.log(currOBJ);
    if (currOBJ.ProjectType == "Employee")
    {
      console.log("if running")
        employees.push(numberList[i]);
    }
  }
  employees.sort();
  console.log("The Employees" + employees);
  return employees;

}
//console.log("The emp" + EmployeeList());
function BugList()
{
    let numberList =NumbersKeyList();
   
    let bugs =[];
    for(i = 0;i<numberList.length;i++)
    {
      let currOBJ = JSON.parse(localStorage.getItem(parseInt(numberList[i])));
   
      if (currOBJ.ProjectType == "Bug")
      {
          bugs.push(numberList[i]);
      }
    }
    bugs.sort();

    return bugs;
}

function ProjectList()
{
    let numberList =NumbersKeyList();
    let projects =[];
    for(i = 0;i<numberList.length;i++)
    {
        let currOBJ = JSON.parse(localStorage.getItem(parseInt(numberList[i])));
      if (currOBJ.ProjectType == "Project")
      {
          projects.push(numberList[i]);
      }
    }
    projects.sort();
    return projects;
}



function ThisProjectAVGChart(ProjectID)
{
  
  let bugs = BugList();
  let lowCount =0;
  let mediumCount =0;
  let highCount = 0;
   let CurrentProjectBugCount =0;
//console.log(ProjectID)
  for(i=0;i<bugs.length;i++)
  {
    console.log(bugs)
   let  currentOBJ = JSON.parse(localStorage.getItem(bugs[i]));
    if(currentOBJ.ProjectId == ProjectID)
    {
      if(currentOBJ.ProjectPriority == "Low")
      {
      lowCount++;
      CurrentProjectBugCount++;
      }
      else if(currentOBJ.ProjectPriority == "Medium")
      {
      mediumCount++;
      CurrentProjectBugCount++;
      }
      else if(currentOBJ.ProjectPriority == "High")
      {
      highCount++;
      CurrentProjectBugCount++;
      }


    }


  }
console.log(lowCount)
console.log(CurrentProjectBugCount)
  lowCount = (lowCount/CurrentProjectBugCount)*100;
  mediumCount = (mediumCount/CurrentProjectBugCount)*100;
  highCount = (highCount/CurrentProjectBugCount)*100;


  if((lowCount==0 && mediumCount==0) 
       || (lowCount==0 && highCount==0)
       || (mediumCount==0 && highCount==0))
       {
        if(lowCount>0)
        {
          lowCount = 100;
        }
        else if(mediumCount>0)
        {
        mediumCount =100;
        }
        else
        {
         highCount =100; 
        }
       }

  let labels = ['High Priority(%)','Medium Priority(%)','Low Priority(%)',];
  let data = {
              labels: labels,
               datasets: [{label: 'My First dataset',
                          backgroundColor: [ 'rgba(255, 99, 132, 0.2)',
                                           'rgba(255, 206, 86, 0.2)',
                                          'rgba(54, 162, 235, 0.2)'],
                             borderColor: ['rgba(255, 99, 132, 1)',
                                           'rgba(255, 206, 86, 1)',
                                         'rgba(54, 162, 235, 1)' ],
                             data: [highCount,mediumCount,lowCount],
                             hoverOffset:10,
                             weight:100
                          }]
             };
  let config = {type: 'doughnut',data: data,options: {responsive: true,
    maintainAspectRatio: false, plugins:{ legend:{labels:{color:"black"}}, title:{color:'black',display:true,text:'Current Project Bug Priority'}}}};
  return config;
}



function ClearStorage()
{
    localStorage.clear(); 
}

function projectsAVGChart()
{
  let bugs = BugList();
  let lowCount =0;
  let mediumCount =0;
  let highCount = 0;

  for(i=0;i<bugs.length;i++)
  {
    let currentOBJ = JSON.parse(localStorage.getItem(bugs[i]));
  
  
      if(currentOBJ.ProjectPriority == "Low")
      {
      lowCount++;
      }
      else if(currentOBJ.ProjectPriority == "Medium")
      {
      mediumCount++;
      }
      else if(currentOBJ.ProjectPriority == "High")
      {
      highCount++;
      }
    }
   
    lowCount = (lowCount/bugs.length)*100;
    mediumCount = (mediumCount/bugs.length)*100;
    highCount = (highCount/bugs.length)*100;
    
    if((lowCount==0 && mediumCount==0) 
    || (lowCount==0 && highCount==0)
    || (mediumCount==0 && highCount==0))
    {
     if(lowCount>0)
     {
       lowCount = 100;
     }
     else if(mediumCount>0)
     {
     mediumCount =100;
     }
     else
     {
      highCount =100; 
     }
    }










    let labels = ['High Priority(%)','Medium Priority(%)','Low Priority(%)',];
      let data = {
                  labels: labels,
                   datasets: [{label: 'My First dataset',
                               backgroundColor: [ 'rgba(255, 99, 132, 0.2)',
                                                'rgba(255, 206, 86, 0.2)',
                                                'rgba(54, 162, 235, 0.2)'],
                                    borderColor: ['rgba(255, 99, 132, 1)',
                                                'rgba(255, 206, 86, 1)',
                                                 'rgba(54, 162, 235, 1)' ],
                                 data: [highCount,mediumCount,lowCount],
                               
                                 hoverOffset:10,
                                 weight:100
                              }]
                 };
      let config = {type: 'doughnut',data: data,options: {responsive: true,
        maintainAspectRatio: false , plugins:{legend:{labels:{color:"black"}}, title:{color:'black',display:true,text:'Overall Project Bug Priority'}}}};
      return config;
}
//svsvsfvdfvdfv

function NewThisProjectChart()
{
  ThisProjectChart.destroy();
  
}

function NewProjectsChart()
{
  ProjectsChart.destroy();
}