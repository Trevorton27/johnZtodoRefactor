// https://www.w3docs.com/snippets/javascript/how-to-get-the-value-of-text-input-field-using-javascript.html

  function getDateTimeString() {
    getDateString() + getTimeString();
  }

  function getDateString() {
    const today = new Date();
    const day = today.getDay();
    const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    let date = (today.getMonth()+1) +
              '-' + (today.getDate() < 10 ? "0" + today.getDate() : today.getDate()) +
              '-' + today.getFullYear();
    
    return daylist[day] + " " + date;
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

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    var x = document.getElementById("formToDoInput");
    console.log("x = " + x);

    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += "> " + i + " " + x.elements[i].value + "<br>";
      console.log("text is " + text);
    }
    document.getElementById("demo").innerHTML = text;

    cell1.innerHTML = getDateString();

    // Helped by https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_elements
    // cell2.innerHTML = document.getElementById("toDoItemText").value;

    // If use Form ID then you have to figure out which Input element you are using.
    //cell3.innerHTML = document.getElementById("formToDoInput").elements[1].value + Math.round( Math.random() * 10);

    cell3.innerHTML = document.getElementById("toDoItemText").value + " - Unique ID " + Math.round( Math.random() * 1000);

  }

  function deleteToDoItemToTable() {
    document.getElementById("resumeToDoTable").deleteRow(0);
  }

  // Didn't work for me 1/1/22
  // document.getElementById('displayResumeItems').title = getDateString();

  /*  This didn't work on 1/1/2022
  window.onload = function() {
    document.getElementById('displayResumeItems').setAttribute('title', getDateString());
    alert(document.getElementById('displayResumeItems').title);
  }​
*/