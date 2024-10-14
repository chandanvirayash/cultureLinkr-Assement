
let btn = document.getElementById("addBtn");
let ul = document.getElementById("taskList");
let inp = document.getElementById("taskInput");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.className = "todo-item";

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  let itemText = document.createTextNode(inp.value);

  delBtn.addEventListener("click", function () {
    item.remove();
    console.log("deleted");
  });

  item.appendChild(itemText); 
  item.appendChild(delBtn);  
  ul.appendChild(item) 
  inp.value = "";
});
