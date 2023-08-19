shoppingList = []; 
const shoppingListParent = document.getElementById("shoppingList");

function getItem(){
    event.preventDefault();
    const shoppingListTextbox = document.getElementById('item');
    const shoppingItem = shoppingListTextbox.value;
    try{
        checkInput(shoppingItem); 
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
    }catch (error){
        alert(error.message); 
    }
    
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
    const item = event.currentTarget.textContent;
    const indexofItemToRemove = shoppingList.indexOf(item);
    try{
        if(indexofItemToRemove >= 0){
            shoppingList.splice(indexofItemToRemove, 1); 
            removeList();
            makeList(); 
        }
        else{
            throw new Error("The item to be removed is not available in the shopping list")
        }
    }catch(error){
        alert(error.message); 
    }
    
}

function checkInput(shoppingItem){
    if(shoppingItem === ""){
        throw new Error("Please enter a valid item to be added to the shopping list"); 
    }
}