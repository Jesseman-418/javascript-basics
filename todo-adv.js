const todolist = [{
  name :'make dinner', 
  duedate:'2022-12-22'},
  {
    name :'wash dishes', 
    duedate:'2022-11-03'
  }
];

rendertodolist();

function rendertodolist(){

  let todolisthtml = '';

  todolist.forEach(function (todoobj, index){
  
      const {name, duedate} = todoobj;
  
      const html = `
      <div>${name}</div>
      <div>${duedate}</div>
      <button 
      onclick="
        todolist.splice(${index}, 1);
        rendertodolist();
      " 
      class="delete-todo-button"
      >
      Delete
      </button>
    `;
      todolisthtml += html;
  });

  document.querySelector('.js-todo-list')
  . innerHTML = todolisthtml;
}

function addTodo(){
  
  const inpele = document.querySelector(".js-name-input");
  const name = inpele.value;

  const dateinp = document.querySelector('.js-due-date-input');
  const duedate = dateinp.value;
  todolist.push({
   // name: name,
   // duedate : duedate

    name, duedate }
  );

  inpele.value = '';
  rendertodolist();
}