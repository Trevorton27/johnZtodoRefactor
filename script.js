const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

let tableListRowCounter = 1;
let eventMaxListenerRowCounter = 1;

  function printElement(elementHTML) {
    console.log("START printElement");

    if (typeof(elementHTML) != 'undefined' && elementHTML != null) {

      if (typeof(elementHTML.checked) != 'undefined' && elementHTML.checked != null) {
        console.log(`    if elementHTML.checked = <${elementHTML.checked}>`);  
        console.log(" and elementHTML.checked    is " + elementHTML.checked);
      }
      console.log(" and elementHTML.id         is '" + elementHTML.id + "' should be there");
      console.log(" and elementHTML.innerHTML  is '" + elementHTML.innerHTML + "' should be there");
      console.log(" and elementHTML.length     is " + elementHTML.length);

      if (typeof(elementHTML.parentNode) != 'undefined' && 
                  elementHTML.parentNode != null) {
        console.log(" and elementHTML.parentNode is " + elementHTML.parentNode);
      
        if (typeof(elementHTML.parentNode.parentNode) != 'undefined' &&
                    elementHTML.parentNode.parentNode != null) {
          console.log(" and elementHTML.parentNode.parentNode exists and is " + elementHTML.parentNode.parentNode);

          if (typeof(elementHTML.parentNode.parentNode.parentNode) != 'undefined' && 
                      elementHTML.parentNode.parentNode.parentNode != null) {
            console.log(" and elementHTML.parentNode.parentNode.parentNode exists and is " + 
            elementHTML.parentNode.parentNode.parentNode);

            if (typeof(elementHTML.parentNode.parentNode.parentNode.parentNode) != 'undefined' && 
                        elementHTML.parentNode.parentNode.parentNode.parentNode != null) {
              console.log(" and elementHTML.parentNode.parentNode.parentNode.parentNode  exists and is " + elementHTML.parentNode.parentNode.parentNode.parentNode);
            }
          }
        }
      }

      console.log(" and elementHTML.tagName    is " + elementHTML.tagName);
      console.log(" and elementHTML.text       is '" + elementHTML.text + "' should be there");
      console.log(" and elementHTML.textContent is '" + elementHTML.textContent + "' should be there");
      console.log(" and elementHTML.title      is '" + elementHTML.title + "' should be there");
      console.log(" and elementHTML.toString   is " + elementHTML.toString());
      console.log(" and elementHTML.type       is " + elementHTML.type);
      console.log(" and elementHTML.value      is '" + elementHTML.value + "'");
    }
    else {
      console.log(`printElement HTML element was undefined or did not exists === NULL`);
    }

    console.log("END printElement");
  }

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

    console.log(`\nIn function checkBoxClicked(rowString is ${rowString}) ` + getTimeString());

    let checkBox = document.getElementById(rowString);

    console.log("checkBoxClicked looking for `${rowString}text` is " + `${rowString}text`);

    let toDoText = document.getElementById(`${rowString}text`);

    if (typeof(toDoText) != 'undefined' && toDoText != null) {
      console.log(`checkBoxClicked toDoText exists and toDoText.id = ${toDoText.id}`);
    }
    else {
      console.log(`checkBoxClicked toDoText Either Undefined or NULL  typeof(toDoText) != ${typeof(toDoText)} && toDoText != null`);
    }

    if (checkBox.checked == true){
      
      // In CSS text-decoration: underline
      // object.style.textDecoration = "none|underline|overline|line-through|blink|initial|inherit"
      toDoText.style.textDecoration = "line-through";
      
    } else {

      //toDoText.style.display = "initial";
      //toDoText.style.color = "green";
      if (typeof(toDoText) != 'undefined' && toDoText != null) {
        toDoText.style.textDecoration = "initial";
      }
    }
  }

  function addToDoItemToTable() {
    let table = document.getElementById("resumeToDoTable");
  
    let row = table.insertRow(tableListRowCounter);

    let dateCell = row.insertCell(0);
    let checkBoxCell = row.insertCell(1);
    let toDoTextCell = row.insertCell(2);

    dateCell.innerHTML = getDateString();

    checkBoxCell.innerHTML = `<input type="checkbox" id="row${eventMaxListenerRowCounter}" title="Added checkbox Title here" value="Added checkbox value"></input>`;

    console.log("\ncalling addEventListener checkBoxClicked(`row${eventMaxListenerRowCounter}`) is " + `row${eventMaxListenerRowCounter}`);

    // Had to put this BEFORE the addEventListener call
    toDoTextCell.innerHTML = document.getElementById("toDoItemText").value;
    toDoTextCell.id = `row${eventMaxListenerRowCounter}text`;

/*
    document.getElementById("myBtn"                           ).addEventListener(
      "click", function() {document.getElementById("demo").innerHTML = "Hello World";}
      );
  */
    document.getElementById(`row${eventMaxListenerRowCounter}`).addEventListener(
      "click", 
      function () {
        rowString = `${this.id}`;
        console.log(`\nIn ### function checkBoxClicked(rowString is ${rowString}) ` + getTimeString());

        let checkBox = document.getElementById(rowString);

        console.log("### checkBoxClicked looking for `${rowString}text` is " + `${rowString}text`);

        let toDoText = document.getElementById(`${rowString}text`);

        if (typeof(toDoText) === 'undefined' || toDoText === null) {
          console.log(`### checkBoxClicked toDoText Either Undefined or NULL  typeof(toDoText) != ${typeof(toDoText)} && toDoText != null`);
        }
        else {

          if (checkBox.checked == true){
            
            // In CSS text-decoration: underline
            // object.style.textDecoration = "none|underline|overline|line-through|blink|initial|inherit"
            toDoText.style.textDecoration = "line-through";
            
          } else {

            //toDoText.style.display = "initial";
            //toDoText.style.color = "green";
            if (typeof(toDoText) != 'undefined' && toDoText != null) {
              toDoText.style.textDecoration = "initial";
            }
          }
        }
      }
      );

    console.log("\n" + getTimeString() + "  Table Row text field.id is '" + toDoTextCell.id + "' has '" + toDoTextCell.innerHTML + "'");

    tableListRowCounter++;

    // ensures unique Check Box Listener counter
    eventMaxListenerRowCounter++;
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
