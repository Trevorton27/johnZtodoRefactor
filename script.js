let todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
initializeInputForm();

function initializeInputForm() {
  document.getElementById('submit-button').addEventListener('click', (e) => {
    e.preventDefault();
    createToDo();
  });
  document
    .getElementById('delete-all-completed-tasks-button')
    .addEventListener('click', deleteAllCheckedTasks);
}

function createToDo() {
  const todoText = document.getElementById('toDoItemText').value;
  if (todoText.length > 0) {
    const task = {
      todoText,
      checked: false,
      id: todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 1,
      time: getDateString(),
    };

    addTodo(task);
  }
}

function addTodo(todo) {
  todoItems.push(todo);
  addToDoItemToTable(todo);
  writeToDoToLocalStorage(todoItems);
}

function clearLocalStorage() {
  localStorage.clear();
}
function writeToDoToLocalStorage(array) {
  localStorage.setItem('todoItems', JSON.stringify(array));
}

function createTableRow(id) {
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('class', 'row');
  tableRow.id = id;
  return tableRow;
}

function createDeleteButton() {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('class', 'delete');
  return deleteButton;
}

function clearToDoTable() {
  const tableBody = document.getElementById('resumeToDoTable');
  removeAllChildNodes(tableBody);
}
function addRowToTable(row) {
  const table = document.getElementById('resumeToDoTable');
  table.appendChild(row);
}

function addToDoItemToTable() {
  clearToDoTable();
  for (let i = 0; i < todoItems.length; i++) {
    const row = createTableRow(todoItems[i].id);
    addRowToTable(row);
    const date = document.createElement('td');
    date.textContent = todoItems[i].time;
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    const toDoText = document.createElement('td');
    toDoText.textContent = todoItems[i].todoText;
    const deleteButtonCell = document.createElement('td');
    const deleteButton = createDeleteButton();
    deleteButtonCell.appendChild(deleteButton);

    row.appendChild(date);
    row.appendChild(checkbox);
    row.appendChild(toDoText);
    row.appendChild(deleteButtonCell);

    checkbox.addEventListener('click', () => {
      toggleTask(todoItems[i].id);
      if (todoItems[i].checked === true) {
        toDoText.style.textDecoration = 'line-through';
      }
    });

    deleteButton.addEventListener('click', (e) => {
      deleteSingleCheckedTask(deleteButton, todoItems[i].id);
    });
  }
}

function createTableRow() {
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('class', 'row');
  return tableRow;
}

function toggleTask(id) {
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id == id) {
      todoItems[i].checked = !todoItems[i].checked;
    }
  }
}

function getDateString() {
  const daylist = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday ',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date();
  const dayOfWeek = today.getDay();

  let date =
    today.getMonth().toString().padStart(1, '0') +
    1 +
    '-' +
    (today.getDate() < 10 ? '0' + today.getDate() : today.getDate()) +
    '-' +
    today.getFullYear();

  return daylist[dayOfWeek] + ' ' + date;
}

function deleteAllCheckedTasks() {
  todoItems = todoItems.filter((todoItem) => {
    return todoItem.checked === false;
  });

  clearLocalStorage();
  writeToDoToLocalStorage(todoItems);
  addToDoItemToTable();
}

function deleteSingleCheckedTask(element, id) {
  element.parentElement.parentElement.remove();
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id === id && todoItems[i].checked === true) {
      todoItems.splice(i, 1);
    }
  }
  writeToDoToLocalStorage(todoItems);
  addToDoItemToTable();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
