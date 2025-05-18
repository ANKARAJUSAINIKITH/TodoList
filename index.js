    let itemscontainer = document.getElementById("TodoItemsContainer")
let addbtn=document.getElementById("AddTaskButton")
addbtn.onclick=function(){
    let tasktitle=document.getElementById("TaskTitle").value
    let priority=document.getElementById("Priority").value
    let deadline=document.getElementById("Deadline").value

let todoelement = document.createElement("li")

itemscontainer.appendChild(todoelement)

let itemcontainerhead = document.createElement("div")
itemcontainerhead.classList.add("d-flex", "flex-row")
todoelement.appendChild(itemcontainerhead)

let checkbox = document.createElement("input")
checkbox.type = "checkbox";
checkbox.id = "checkboxInput";
checkbox.classList.add("checkbox-input");
itemcontainerhead.appendChild(checkbox);

let title = document.createElement("h4")
title.textContent = tasktitle
itemcontainerhead.appendChild(title)

let itemcontainertail = document.createElement("div")
itemcontainertail.classList.add("d-flex", "flex-row")
todoelement.appendChild(itemcontainertail)

let prior = document.createElement("p")
prior.classList.add("prior")
prior.textContent = priority

let date = document.createElement("p")
date.classList.add("date")
date.textContent = deadline

let stats = document.createElement("p")
stats.textContent = "pending"

itemcontainertail.appendChild(prior)
itemcontainertail.appendChild(date)
itemcontainertail.appendChild(stats)

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("ml-auto")
deleteIconContainer.classList.add("delete-icon-container");
itemcontainerhead.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("button");
deleteIcon.textContent="Delete"
deleteIconContainer.appendChild(deleteIcon);

deleteIcon.onclick=function(){
    itemscontainer.removeChild(todoelement)
}

}



