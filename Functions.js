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
  let employees =[];
  for(i = 0;i<NumbersKeyList.length;i++)
  {
    let currOBJ = JSON.parse(localStorage.getItem(parseInt(numberList[i])));
    if (currOBJ.ProjectType == "Employee")
    {
        employees.push(numberList[i]);
    }
  }
  employees.sort();
  return employees;

}

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
    for(i = 0;i<NumbersKeyList.length;i++)
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



function bugChart()
{
    let labels = [
        'High Priority',
        'Medium Priority',
        'Low Priority',
      ];
      let data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: [ 'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'],
          data: [1,2,3],
        }]
    
      
      }
      
      ;
      let config = {
        type: 'pie',
        data: data,
        options: {}
      };

      return config;
}
function projectChart()
{
    let labels = [
        'High Priority',
        'Medium Priority',
        'Low Priority',
      ];
      let data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: [ 'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'],
          data: [1,2,3],
        }]
    
      
      }
      
      ;
      let config = {
        type: 'pie',
        data: data,
        options: {}
      };

      return config;
}