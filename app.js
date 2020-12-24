function Product(itemName){
    this.itemName = itemName;
}

function UI(){

}


// Add Item
UI.prototype.addItem = function(item){
    const list = document.getElementById("list-group");
    
    const row = document.createElement("li");

    row.className = "list-group-item d-flex justify-content-between";

    row.innerHTML = `${item.itemName}
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>`

    list.appendChild(row);
}

document.getElementById("form").addEventListener("submit",function(e){
    
    const itemName = document.getElementById("formInput").value;

    const item = new Product(itemName);

    const ui = new UI();

    ui.addItem(item);

    e.preventDefault();
})


// Delete Item
document.getElementById("list-group").addEventListener("click",deleteItem);

function deleteItem(e){
    if(e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
    }
}

// Delete All Item 
document.getElementById("deleteAll").addEventListener("click",deleteAll);

function deleteAll(){   
    const list = document.getElementById("list-group");
    while(list.firstElementChild != null){
        list.removeChild(list.firstElementChild);
    }
}

