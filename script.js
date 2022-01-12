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

  function printElement(elementHTML) {
    console.log("START printElement");

    console.log(`    if elementHTML.checked = <${elementHTML.checked}>`);  
    console.log(" and elementHTML.checked is " + elementHTML.checked);
    console.log(" and elementHTML.innerHTML is '" + elementHTML.innerHTML + "' should be there");
    console.log(" elementHTML.length       is " + elementHTML.length);
    console.log(" and elementHTML.parentNode is " + elementHTML.parentNode);
    console.log(" and elementHTML.parentNode.parentNode is " + elementHTML.parentNode.parentNode);
    console.log(" and elementHTML.parentNode.parentNode.parentNode is " + elementHTML.parentNode.parentNode.parentNode);
    console.log(" and elementHTML.parentNode.parentNode.parentNode.parentNode is " + elementHTML.parentNode.parentNode.parentNode.parentNode);
    console.log(" and elementHTML.tagName  is " + elementHTML.tagName);
    console.log(" and elementHTML.text     is '" + elementHTML.text + "' should be there");
    console.log(" and elementHTML.textContent is '" + elementHTML.textContent + "' should be there");
    console.log(" and elementHTML.title    is '" + elementHTML.title + "' should be there");
    console.log(" and elementHTML.toString is " + elementHTML.toString());
    console.log(" and elementHTML.type     is " + elementHTML.type);
    console.log(" and elementHTML.value    is '" + elementHTML.value + "'");

    console.log("END printElement");
  }


  function deleteToDoItemToTable() {

    let inputs_in_table = document.getElementById("resumeToDoTable").getElementsByTagName("input");
    let checkBox2;
    console.log("inputs_in_table.length is " + inputs_in_table.length);

    let newTableLength = inputs_in_table.length;
    let newRowPointer = 0;
    for (let jLoop = 0; newRowPointer <= newTableLength; jLoop++) {
      
      if (newRowPointer < newTableLength) {
        checkBox2 = inputs_in_table[newRowPointer];
        // printElement(checkBox2);
        
        console.log(`START for jLoop is ${jLoop} and newRowPointer is ${newRowPointer} and newTableLength is ${newTableLength}`);

        if (checkBox2.type == "checkbox") {
          console.log(`newRowPointer [${newRowPointer}] is on a checkbox`);
          if (checkBox2.checked) {
            console.log(`newRowPointer [${newRowPointer}] is on a checkbox and deleting it from table`);
            document.getElementById("resumeToDoTable").deleteRow(newRowPointer);
            tableListRowCounter--;
            newRowPointer += 0;
            newTableLength -= 1;
          }
          else {
            newRowPointer++;
            newTableLength += 0;
          }
        }
        else {
          newRowPointer++;
          newTableLength += 0;
        }
        console.log(`END   for jLoop is ${jLoop} and newRowPointer is ${newRowPointer} and newTableLength is ${newTableLength}`);

      }
      else {
        console.log("for break");
        break;
      }
    }

  }
