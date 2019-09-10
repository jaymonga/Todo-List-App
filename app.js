
var addForm = document.querySelector('.add');
var list = document.querySelector('.todos');
var search = document.querySelector('.search input');

var generateTemplate = function generateTemplate(todo) {
  var html = "<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                    <span>".concat(todo, "</span>\n                    <i class=\"far fa-trash-alt delete\"></i>\n                  </li>");
  list.innerHTML += html;
};

addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var todo = addForm.add.value.trim();
  console.log(todo);

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
}); //delete todos

list.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

var filterTodos = function filterTodos(term) {
  [].slice.call(list.children).filter(function (todo) {
    return !todo.textContent.toLowerCase().includes(term);
  }).forEach(function (todo) {
    return todo.classList.add('filtered');
  });
  Array.from(list.children).filter(function (todo) {
    return todo.textContent.toLowerCase().includes(term);
  }).forEach(function (todo) {
    return todo.classList.remove('filtered');
  });
}; //search keyup addEventListener


search.addEventListener('keyup', function (e) {
  var term = search.value.trim().toLowerCase();
  filterTodos(term);
});
