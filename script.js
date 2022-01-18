const deleteAllCompletedTodosButton = document.getElementById(
  'delete-all-completed-tasks-button'
);

deleteAllCompletedTodosButton.addEventListener('click', deleteAllCheckedTasks);
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const todoText = document.getElementById('toDoItemText').value;
  const todoItems = getTodoArray();
  if (todoText.length > 0) {
    const task = {
      todoText,
      checked: false,
      id: todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 1,
      time: getDateString()
    };

    addTodo(task);
  }
});

function addTodo(todo) {
  addToDoItemToTable(todo);
  todoItems = getTodoArray();
  todoItems.push(todo);
  saveTodoItems(todoItems);
}

function getTodoArray() {
  return JSON.parse(localStorage.getItem('todoItems')) || [];
}

function saveTodoItems(array) {
  localStorage.setItem('todoItems', JSON.stringify(array));
}

function createTableRow() {
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('class', 'row');
  return tableRow;
}

function createTableCell(todo) {
  const tableData = document.createElement('td');
  tableData.textContent = todo;
  return tableData;
}

function createDeleteButton(todo) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('class', 'delete');
  deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    deletetodo(deleteButton, todo.id);
  });
  return deleteButton;
}

function addToDoItemToTable(todo) {
  if (document.getElementById('row0') != null) {
    document.getElementById('resumeToDoTable').deleteRow(0);
  }

  const row = createTableRow();
  row.id = todo.id;
  const table = document.getElementById('resumeToDoTable');
  table.appendChild(row);

  const dateCell = createTableCell(todo.time);
  const checkBoxCell = createCheckbox();
  const toDoTextCell = createTableCell(todo.todoText);
  const deleteButtonCell = createTableCell();
  const deleteButton = createDeleteButton(todo);

  row.appendChild(dateCell);
  row.appendChild(checkBoxCell);
  row.appendChild(toDoTextCell);
  deleteButtonCell.appendChild(deleteButton);
  row.appendChild(deleteButtonCell);

  checkBoxCell.addEventListener('click', () => {
    toggleTask(checkBoxCell, todo.id);
  });

  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    deleteSingleCheckedTask(deleteButton, todo.id);
  });
}

function createTableRow() {
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('class', 'row');
  return tableRow;
}

function createTableCell(todo) {
  const tableData = document.createElement('td');
  tableData.textContent = todo;
  return tableData;
}

function createCheckbox() {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');

  return checkbox;
}

function toggleTask(element, id) {
  todoItems = getTodoArray();
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id == id) {
      todoItems[i].checked = !todoItems[i].checked;
      element.classList.toggle('lineThrough');
    }
  }
  // addToDoItemToTable();
}

function createDeleteButton(todo) {
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

// function checkBoxClicked(rowString) {
//   let checkBox = document.getElementById(rowString);

//   let toDoText = document.getElementById(`${rowString}text`);

//   if (typeof toDoText != 'undefined' && toDoText != null) {
//     if (checkBox.checked == true) {
//       // In CSS text-decoration: line-through
//       // object.style.textDecoration = "none|underline|overline|line-through|blink|initial|inherit"
//       toDoText.style.textDecoration = 'line-through';
//     } else {
//       if (typeof toDoText != 'undefined' && toDoText != null) {
//         toDoText.style.textDecoration = 'initial';
//       }
//     }
//   } else {
//     console.log(
//       `checkBoxClicked toDoText Either Undefined or NULL  typeof(toDoText) != ${typeof toDoText} && toDoText != null`
//     );
//   }
// }

function deleteAllCheckedTasks() {
  todoItems = getTodoArray();
  todoItems = todoItems.filter((todoItem) => {
    return todoItem.checked === false;
  });
  saveTodoItems(todoItems);
}

function deleteSingleCheckedTask(id) {
  todoItems = getTodoArray();
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id === id && todoItems[i].checked === true) {
      todoItems.splice(i, 1);
    }
  }
  saveTodoItems(todoItems);
  //renderTask();
}
