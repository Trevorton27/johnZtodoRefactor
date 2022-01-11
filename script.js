const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

let tableListRowCounter = 1;

  function getDateString() {
    const today = new Date();
    const dayOfWeek = today.getDay();

    let date = (today.getMonth().toString().padStart(1, '0') + 1) +
              '-' + (today.getDate() < 10 ? "0" + today.getDate() : today.getDate()) +
              '-' + today.getFullYear();
    
    return daylist[dayOfWeek] + " " + date;
  }

  function getTimeString() {
    let today = new Date();
    let fullTime = today.getHours() + ":"  + (today.getMinutes() < 10 ? "0" : "") + today.getMinutes() + ":" + (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
    console.log("fullTime is " + fullTime);
    return fullTime;
  }

  function addToDoItemToTable() {
    let table = document.getElementById("resumeToDoTable");
    let row = table.insertRow(tableListRowCounter);

    let dateCell = row.insertCell(0);
    let checkBoxCell = row.insertCell(1);
    let toDoTextCell = row.insertCell(2);

    dateCell.innerHTML = getDateString();

    checkBoxCell.innerHTML = `<input type="checkbox" id="row${tableListRowCounter}">`;
    tableListRowCounter += 1;

    toDoTextCell.innerHTML = document.getElementById("toDoItemText").value;

  }

  function deleteToDoItemToTable() {
    let table, rows, switching, i, x, y, shouldSwitch;
    let consoleText = "";

    table = document.getElementById("resumeToDoTable");
    rows = table.rows;

    consoleText = "about to loop through table list : # of rows = " + rows.length;

    let cb = document.querySelector('#row0');
    console.log("row0 checkBox.checked is " + cb.checked + ".");

    // console.log(consoleText);

    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < rows.length; i++) {

      checkBox = rows[i].getElementsByTagName("TD")[1].innerHTML;

      consoleText += "<br>\n" + i + " checkBox is " + checkBox.id + " and has " + checkBox.length;

      // document.getElementById("demo").innerHTML = consoleText;

      toDoItemTextString = rows[i].getElementsByTagName("TD")[2].innerHTML;

    }

    console.log("A " + consoleText);

  }

//      consoleText += "<br>\n" + `rows[${i}].getElementsByTagName("row0") is ` + rows[i].getElementsByTagName("row0");
//       consoleText += `document.getElementsByTagName("row0") = ` 
//                    + document.getElementsByTagName("row0");
