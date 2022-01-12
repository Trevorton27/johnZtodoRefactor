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

    checkBoxCell.innerHTML = `<input type="checkbox" id="row${tableListRowCounter}" title="Added checkbox Title here">Added Checkbox Text</input>`;

    tableListRowCounter += 1;

    toDoTextCell.innerHTML = document.getElementById("toDoItemText").value;

  }

  function deleteToDoItemToTable() {

    let cb = document.querySelector('#row0');
    console.log(" row0 checkBox.checked is " + cb.checked + ".");
    if (document.querySelector('#row1')) {
      console.log(" row1 is " + document.querySelector('#row1').checked);
    }

    let inputs_in_table = document.getElementById("resumeToDoTable").getElementsByTagName("input");

    inputs_in_table = document.getElementById("resumeToDoTable").getElementsByTagName("input");

    console.log("   About to loop through table list : # of rows = " + inputs_in_table.length);

    for (var jLoop = 0; jLoop < inputs_in_table.length; jLoop++) {
      let checkBox2 = inputs_in_table[jLoop];

      console.log(`\njLoop inputs_in_table[${jLoop}].type <` + inputs_in_table[jLoop].type + ">");

      if (inputs_in_table[jLoop].type == "checkbox") { 
          console.log(`    if jLoop ${jLoop} checkBox2.checked = <${checkBox2.checked}>`);
          console.log(" and checkBox2.checked is " + checkBox2.checked);
          console.log(" and checkBox2.innerHTML is '" + checkBox2.innerHTML + "' should be there");
          console.log(" checkBox2.length       is " + checkBox2.length);
          console.log(" and checkBox2.parentNode is " + checkBox2.parentNode);
          console.log(" and checkBox2.parentNode.parentNode is " + checkBox2.parentNode.parentNode);
          console.log(" and checkBox2.parentNode.parentNode.parentNode is " + checkBox2.parentNode.parentNode.parentNode);
          console.log(" and checkBox2.parentNode.parentNode.parentNode.parentNode is " + checkBox2.parentNode.parentNode.parentNode.parentNode);
          console.log(" and checkBox2.tagName  is " + checkBox2.tagName);
          console.log(" and checkBox2.text     is '" + checkBox2.text + "' should be there");
          console.log(" and checkBox2.textContent is '" + checkBox2.textContent + "' should be there");
          console.log(" and checkBox2.title    is '" + checkBox2.title + "' should be there");
          console.log(" and checkBox2.toString is " + checkBox2.toString());
          console.log(" and checkBox2.type     is " + checkBox2.type);
          console.log(" and checkBox2.value    is '" + checkBox2.value + "'");
      }
    }

    console.log("\nend of Delete ");

  }

//      consoleText += "<br>\n" + `rows[${i}].getElementsByTagName("row0") is ` + rows[i].getElementsByTagName("row0");
//       consoleText += `document.getElementsByTagName("row0") = ` 
//                    + document.getElementsByTagName("row0");
