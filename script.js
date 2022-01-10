const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

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
    let row = table.insertRow(0);

    let dateCell = row.insertCell(0);
    let checkBoxCell = row.insertCell(1);
    let toDoTextCell = row.insertCell(2);

    dateCell.innerHTML = getDateString();

    checkBoxCell.innerHTML = `<input type="checkbox" id="row1">`;

    toDoTextCell.innerHTML = document.getElementById("toDoItemText").value;

  }

  function deleteToDoItemToTable() {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("resumeToDoTable");
    rows = table.rows;

    console.log("about to loop through table list : # of rows = " + rows.length);

    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < rows.length; i++) {

      checkBox = rows[i].getElementsByTagName("TD")[1].innerHTML;
      console.log("checkBox is " + checkBox);
      console.log('getElementsByTagName("row0") is ' + rows[i].getElementsByTagName("row0"));
      console.log(`rows[i].getElementsByTagName("row0").checked = ` + rows[i].getElementsByTagName("row0").checked);

      toDoItemText = rows[i].getElementsByTagName("TD")[2].innerHTML;
    }

    // document.getElementById("resumeToDoTable").deleteRow(0);
  }
