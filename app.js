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
    // store data in local storage
    localStorage.setItem(todo, todo);
    
    addForm.reset();
  }
  
      var select = document.querySelector('.all-Items');
      var presetItem = select.querySelectorAll('.preset');
      for(i = 0; i < presetItem.length; i++) {
          presetItem[i].remove();
        }
}); //delete todos

list.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    localStorage.removeItem(e.target.parentElement.innerText.trim());
    console.log(e.target.parentElement.innerText.trim());
  }
});

var filterTodos = function filterTodos(term) {
  [].slice.call(list.children).filter(function (todo) {
    return !todo.textContent.toLowerCase().includes(term);
  }).forEach(function (todo) {
    return todo.classList.add('filtered');
  });
  [].slice.call(list.children).filter(function (todo) {
    return todo.textContent.toLowerCase().includes(term);
  }).forEach(function (todo) {
    return todo.classList.remove('filtered');
  });
}; //search keyup addEventListener


search.addEventListener('keyup', function (e) {
  e.preventDefault();
  var term = search.value.trim().toLowerCase();
  filterTodos(term);
});

window.onload = function() {
  
    // get data from local storage
    if(localStorage.length>0){
      var select = document.querySelector('.all-Items');
      var presetItem = select.querySelectorAll('.preset');
      for(i = 0; i < presetItem.length; i++) {
          presetItem[i].remove();
        }
        for(var i =0; i < localStorage.length; i++){
          var storageKey = localStorage.getItem(localStorage.key(i));
          generateTemplate(storageKey)
        }
    }
};
