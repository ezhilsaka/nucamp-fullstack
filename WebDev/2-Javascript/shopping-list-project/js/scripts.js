shoppingList = []; 
const shoppingListParent = document.getElementById("shoppingList");

function getItem(){
    event.preventDefault();
    const shoppingListTextbox = document.getElementById('item');
    const shoppingItem = shoppingListTextbox.value;
    if(!shoppingList.includes(shoppingItem)){
        shoppingList.push(shoppingItem)
    }
    else{
        alert("Item already added in the shopping list")
    }
    shoppingList.sort();
    document.getElementById("myForm").reset(); 
    removeList();
    makeList(); 
}

function makeList(){
    for(item of shoppingList){
        const newListItem = document.createElement("li");
        newListItem.textContent = item;
        shoppingListParent.appendChild(newListItem);
        newListItem.addEventListener("click", removeItem); 
    }
}

function removeList(){
    while(shoppingListParent.firstChild){
        shoppingListParent.removeChild(shoppingListParent.firstChild); 
    }
}

function removeItem(event){
    
}
