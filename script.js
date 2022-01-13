const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

let tableListRowCounter = 1;
let eventListenerMaxRowCounter = 1;

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
    
    return today.getHours() + ":"  + (today.getMinutes() < 10 ? "0" : "") + today.getMinutes() + ":" + (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
  }


  function checkBoxClicked(rowString) {

    let checkBox = document.getElementById(rowString);

    let toDoText = document.getElementById(`${rowString}text`);

    if (typeof(toDoText) != 'undefined' && toDoText != null) {

      if (checkBox.checked == true){
        
        // In CSS text-decoration: line-through
        // object.style.textDecoration = "none|underline|overline|line-through|blink|initial|inherit"
        toDoText.style.textDecoration = "line-through";
        
      } else {

        if (typeof(toDoText) != 'undefined' && toDoText != null) {
          toDoText.style.textDecoration = "initial";
        }
      }
    }
    else {
      console.log(`checkBoxClicked toDoText Either Undefined or NULL  typeof(toDoText) != ${typeof(toDoText)} && toDoText != null`);
    }

  }

  function addToDoItemToTable() {
    let table = document.getElementById("resumeToDoTable");
  
    let row = table.insertRow(tableListRowCounter);

    let dateCell = row.insertCell(0);
    let checkBoxCell = row.insertCell(1);
    let toDoTextCell = row.insertCell(2);

    dateCell.innerHTML = getDateString();

    checkBoxCell.innerHTML = `<input type="checkbox" id="row${eventListenerMaxRowCounter}" title="Added checkbox Title here" value="Added checkbox value"></input>`;

    // Had to put this BEFORE the addEventListener call
    toDoTextCell.innerHTML = document.getElementById("toDoItemText").value;
    toDoTextCell.id = `row${eventListenerMaxRowCounter}text`;

    document.getElementById(`row${eventListenerMaxRowCounter}`).addEventListener(
      "click",
      function () { checkBoxClicked(`${this.id}`); } 
      );

    tableListRowCounter++;

    // ensures unique Check Box Listener counter
    eventListenerMaxRowCounter++;

    // Delete the demonstration row
    if (document.getElementById("row0") != null) {
      document.getElementById("resumeToDoTable").deleteRow(0);
      
      tableListRowCounter--;
    }

  }


  function deleteToDoItemToTable() {

    let inputs_in_table = document.getElementById("resumeToDoTable").getElementsByTagName("input");
    let checkBox2;

    let newTableLength = inputs_in_table.length;
    let newRowPointer = 0;
    for (let jLoop = 0; newRowPointer <= newTableLength; jLoop++) {
      
      if (newRowPointer < newTableLength) {
        checkBox2 = inputs_in_table[newRowPointer];
        
        if (checkBox2.type == "checkbox") {

          if (checkBox2.checked) {

            /*
            Didn't figure this out before turning in on 1/13/2022....

            rowToDelete = document.getElementById("resumeToDoTable").getRow(newRowPointer);
            rowToDelete.getElementById(rowToDelete[1].id).deleteEventListener;
            
            */

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

      }
      else {
        break;
      }
    }

  }
