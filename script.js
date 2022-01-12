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

    checkBoxCell.innerHTML = `<input type="checkbox" id="row${tableListRowCounter}" title="Added checkbox Title here" value="Added checkbox value"></input>`;

    tableListRowCounter += 1;

    toDoTextCell.innerHTML = document.getElementById("toDoItemText").value;

  }

  function deleteToDoItemToTable() {

    let inputs_in_table = document.getElementById("resumeToDoTable").getElementsByTagName("input");
    let checkBox2;
    console.log("inputs_in_table.length is " + inputs_in_table.length);

    for (var jLoop = 0; jLoop <= inputs_in_table.length; jLoop++) {
      
      checkBox2 = inputs_in_table[jLoop];
      
      console.log(`for jLoop[${jLoop}] start`);

      if (checkBox2.type == "checkbox") {
        console.log(`jLoop[${jLoop}] is on a checkbox`);
        if (checkBox2.checked) {
          console.log(`jLoop[${jLoop}] is on a checkbox and deleting it from table`);
          document.getElementById("resumeToDoTable").deleteRow(jLoop);
          tableListRowCounter--;
        }
      }
      console.log(`for jLoop[${jLoop}] END`);

    }

  }
