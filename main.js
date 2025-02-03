
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

    const table = document.getElementById("table");

    const date = getAllFridays(year);

            let displayMonth = false;

    for(let i = 0; i < date.length -1; i++) {
        const tableRow = document.createElement("tr");
        if(date[i].getMonth() === 1 && !displayMonth){
            for(let j = 0; j < 1; j++){
            let monthRow = document.createElement("tr");
            let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">Febuary</td>`;
            monthRow.innerHTML = monthStyle;
            table.appendChild(monthRow);
            displayMonth = true;
            }
        }
        if(date[i].getMonth() === 2 && displayMonth){
          for(let j = 0; j < 1; j++){
          let monthRow = document.createElement("tr");
          let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">March</td>`;
          monthRow.innerHTML = monthStyle;
          table.appendChild(monthRow);
          displayMonth = false;
          }
      }

        if(date[i].getMonth() === 3 && !displayMonth){
          for(let j = 0; j < 1; j++){
          let monthRow = document.createElement("tr");
          let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">April</td>`;
          monthRow.innerHTML = monthStyle;
          table.appendChild(monthRow);
          displayMonth = true;
          }
      }

        if(date[i].getMonth() === 4 && displayMonth){
          for(let j = 0; j < 1; j++){
          let monthRow = document.createElement("tr");
          let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">May</td>`;
          monthRow.innerHTML = monthStyle;
          table.appendChild(monthRow);
          displayMonth = false;
          }
      }

        if(date[i].getMonth() === 5 && !displayMonth){
          for(let j = 0; j < 1; j++){
          let monthRow = document.createElement("tr");
          let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">June</td>`;
          monthRow.innerHTML = monthStyle;
          table.appendChild(monthRow);
          displayMonth = true;
          }
      }

        if(date[i].getMonth() === 6 && displayMonth){
          for(let j = 0; j < 1; j++){
          let monthRow = document.createElement("tr");
          let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">July</td>`;
          monthRow.innerHTML = monthStyle;
          table.appendChild(monthRow);
          displayMonth = false;
          }
        }

        if(date[i].getMonth() === 7 && !displayMonth){
          for(let j = 0; j < 1; j++){
          let monthRow = document.createElement("tr");
          let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">August</td>`;
          monthRow.innerHTML = monthStyle;
          table.appendChild(monthRow);
          displayMonth = true;
          }
        }

        if(date[i].getMonth() === 8 && displayMonth){
          for(let j = 0; j < 1; j++){
          let monthRow = document.createElement("tr");
          let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">September</td>`;
          monthRow.innerHTML = monthStyle;
          table.appendChild(monthRow);
          displayMonth = false;
          }
        }

        if(date[i].getMonth() === 9 && !displayMonth){
          for(let j = 0; j < 1; j++){
          let monthRow = document.createElement("tr");
          let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">October</td>`;
          monthRow.innerHTML = monthStyle;
          table.appendChild(monthRow);
          displayMonth = true;
          }
        }

        if(date[i].getMonth() === 10 && displayMonth){
          for(let j = 0; j < 1; j++){
          let monthRow = document.createElement("tr");
          let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">November</td>`;
          monthRow.innerHTML = monthStyle;
          table.appendChild(monthRow);
          displayMonth = false;
          }
        }

        if(date[i].getMonth() === 11 && !displayMonth){
          for(let j = 0; j < 1; j++){
          let monthRow = document.createElement("tr");
          let monthStyle = `<td colspan="4" style="text-align:center; font-weight: bold;font-size:1.19rem;">December</td>`;
          monthRow.innerHTML = monthStyle;
          table.appendChild(monthRow);
          displayMonth = true;
          }
        }
                
         tableRow.innerHTML += `<td>${date[i].getDate()+'/'+Number(date[i].getMonth()+1)+'/'+date[i].getFullYear()}</td> <td>${programLead[i]}</td> <td>${teachers[i]}</td><td>${topics[i]}</td>`;
        table.appendChild(tableRow);
    }
}
populateTable(2025);

function getComingFridayInfo(year){
  let date = getAllFridays(year);
  
  for(let i = 0; i < date.length; i++){
  // check approaching Friday
    if(date[i] >= getCurrentDate()){
      alert(date[i]);
      break;
    }
  }
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