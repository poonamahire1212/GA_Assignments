// Work out the data structures

// A single todo should have:
// - content (string)
// - isCompleted (boolean)

// Our collection of todos will be an array

const todos = [
    { content: "Learn JS fundamentals", isComplete: true },
    { content: "Learn DOM", isComplete: false },
  ];
  
  // Pseudocode about the data
  
  // CRUD - Create, Read, Update, Delete
  // Print out a singlr todo
  //-Parameters: the todo
  //select the ul
  //Create an li DOm node
  //set the innerHTML to the content of the todo
  //Append that li to the ul

function printTodo(todo){
    const listItem = document.querySelector("ul");
    let firstListItem = document.createElement("li");
    firstListItem.innerHTML = todo.content;
    listItem.appendChild(firstListItem);
}

// Print out all todos
//Loop through all the todos array
//for each item in it, call printTodo

function printAllTodos(){
    const list = document.querySelector("ul");
    list.innerHTML = "";
    todos.forEach(printTodo);
}
printAllTodos();
  
  // Add a single todo
  // - Parameters (content, isComplete)
  // Create an object with the content and isComplete
  // Push that into the todos array
  
  function createTodo(content, isComplete) {
    const newTodo = {
      content: content,
      isComplete: isComplete,
    };
    todos.push(newTodo);
  }
  
  createTodo("Learn APIs", false); // Call site
  
  const form = document.querySelector("form");
  
  function onFormSubmit(event){
    event.preventDefault(); //stop the browser reload
    const inputItem = document.querySelector(".new-todo");
    createTodo(inputItem.value, false);
    printAllTodos();
  }
  form.addEventListener("submit", onFormSubmit);
  
  
  
  
  
  
  
  
  