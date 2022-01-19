let todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
const deleteAllCompletedTodosButton = document.getElementById(
  'delete-all-completed-tasks-button'
);

deleteAllCompletedTodosButton.addEventListener('click', deleteAllCheckedTasks);
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const todoText = document.getElementById('toDoItemText').value;

  if (todoText.length > 0) {
    const task = {
      todoText,
      checked: false,
      id: todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 1,
      time: getDateString()
    };

    addTodo(task);
    // document.getElementById('form').reset();
  }
});

function addTodo(todo) {
  addToDoItemToTable(todo);
  todoItems.push(todo);
  saveTodoItems(todoItems);
}

function saveTodoItems(array) {
  localStorage.setItem('todoItems', JSON.stringify(array));
}

function createTableRow() {
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('class', 'row');
  return tableRow;
}

function createDeleteButton() {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('class', 'delete');

  return deleteButton;
}

function addToDoItemToTable() {
  if (document.getElementById('row0') != null) {
    document.getElementById('resumeToDoTable').deleteRow(0);
  }

  for (let i = 0; i < todoItems.length; i++) {
    const row = createTableRow();
    row.id = todoItems[i].id;
    const table = document.getElementById('resumeToDoTable');
    table.appendChild(row);
    const tableDateCell = document.createElement('td');
    tableDateCell.textContent = todoItems[i].time;
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    const toDoTextCell = document.createElement('td');
    toDoTextCell.textContent = todoItems[i].todoText;
    const deleteButtonCell = document.createElement('td');
    const deleteButton = createDeleteButton();

    row.appendChild(tableDateCell);
    row.appendChild(checkbox);
    row.appendChild(toDoTextCell);
    deleteButtonCell.appendChild(deleteButton);
    row.appendChild(deleteButtonCell);

    checkbox.addEventListener('click', () => {
      toggleTask(todoItems[i].id);
      if (todoItems[i].checked === true) {
        toDoTextCell.style.textDecoration = 'line-through';
      }
    });

    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation();
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

function createDeleteButton() {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('class', 'delete');

  return deleteButton;
}

const daylist = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday ',
  'Thursday',
  'Friday',
  'Saturday'
];

function getDateString() {
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
  saveTodoItems(todoItems);
  addToDoItemToTable();
}

function deleteSingleCheckedTask(element, id) {
  element.parentElement.parentElement.remove();
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id === id && todoItems[i].checked === true) {
      todoItems.splice(i, 1);
    }
  }
  saveTodoItems(todoItems);
  addToDoItemToTable();
  //renderTask();
}
