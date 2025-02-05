
function getAllFridays(year){
    const fridays = [];
    for(let month = 1; month < 12; month++){
      for(let date = 1; date <= 31; date++){
        //literate on months and date to fetch all Sundays
        const dateToIterate = new Date(year, month, date);
        if(dateToIterate.getMonth() !== month)break;//break if we exceed months days
        // if it's a Sunday add to array
        if(dateToIterate.getDay() === 5){
        // push all ⬆️to the first array above
          fridays.push(dateToIterate);
        }
      }
    }
    return fridays;  
  }

function getCurrentDate(){
  return new Date();
}


function populateTable(year){

  document.getElementById("year").textContent = year;

  const table = document.getElementById('table');

  const date = getAllFridays(year)
  
  //check if the month has already existed so that we dont render it twice at the month name rows
  let existedMonth = {}

  let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //go through all the fridays days with this loop
  for (let i = 0; i < date.length-1; i++) {
    let tableRow = document.createElement('tr');
    //Only give me only the month that does not exist so i have 1 - 11;
    if(!existedMonth[date[i].getMonth()]){
      let monthTd = document.createElement('td');

      let monthRow = document.createElement('tr');
      //normaly, [date[i].getMonth() gives me 1-11]
      monthTd.innerHTML = `${monthsArr[date[i].getMonth()]}`
      //style my td
      monthTd.colSpan = 4;
      monthTd.style.textAlign = "center";
      monthTd.style.fontSize = "1.2em";
      monthTd.style.fontWeight = "bold";
      
      monthRow.appendChild(monthTd);
      
      existedMonth[date[i].getMonth()] = true;

      table.appendChild(monthRow); 
    }
    let dateTd = document.createElement('td');

    dateTd.textContent = date[i].getDate()+'/'+Number(date[i].getMonth()+1)+'/'+date[i].getFullYear();

    let progLdTd = document.createElement('td');

    progLdTd.textContent = programLead[i];

    let teacherTd = document.createElement('td');

    teacherTd.textContent = teachers[i];

    let topicTd = document.createElement('td');

    topicTd.textContent = topics[i]; 

    tableRow.appendChild(dateTd);
    tableRow.appendChild(progLdTd);
    tableRow.appendChild(teacherTd);
    tableRow.appendChild(topicTd);

    table.appendChild(tableRow); 
  }

  
}

populateTable(2025);



function renderComingFridayInfo(year){
  let date = getAllFridays(year);
  let table = document.getElementById('next-fri-table');
  document.getElementById('next-fri-section').style.display = 'flex';
  for(let i = 0; i < date.length; i++){
  // check approaching Friday
    if(date[i] >= getCurrentDate()){
      let tableRow = document.getElementById('next-fri-td-row');

      tableRow.innerHTML = `<td>${date[i].getDate()+"/"+date[i].getMonth()+"/"+date[i].getFullYear()}</td> <td>${programLead[i]}</td> <td>${teachers[i]}</td> <td>${topics[i]}</td>`;
      table.appendChild(tableRow)
      break;
    }
  }
  setTimeout(function(){
    document.getElementById('next-fri-section').style.display = 'none';
  }, 3000);
}



function changeTheme(){
  document.documentElement.getAttribute("data-theme") === "light" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light");
}

function goToAboutPage(){
  window.location.href = "about.html";
}

function goToMainPage(){
  window.location.href = "index.html";
}