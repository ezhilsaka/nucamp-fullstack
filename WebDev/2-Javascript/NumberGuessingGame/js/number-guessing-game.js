function runGame(){
    
    machinePickedNumber = Math.floor((Math.random() * 100) + 1);
    
    do{
        userGuessNumber = prompt("I am thinking of a number in the range 1 to 100. \n\n What is the number?");
        userInputValidation(userGuessNumber);
        
    }while(false); 
    

}

function userInputValidation(userNumber){

    if (isNaN(userNumber)){
        alert("You have not entered a number \n\n Please enter a number in the 1-100 range"); 
    }
   
    if (userNumber < 0 || userNumber > 100){
        alert("Please enter a number in 1-100 range.")
    } 
}