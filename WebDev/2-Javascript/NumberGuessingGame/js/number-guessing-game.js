let COUNTER = 0;
let GUESSEDNUMBERSARRAY = []; 

function runGame(){
    
    machinePickedNumber = Math.floor((Math.random() * 100) + 1);
    let validationFlag = false;
            
    do{
        userGuessNumber = prompt("I am thinking of a number in the range 1 to 100. \n\n What is the number?");
        if (userGuessNumber === null){
            break; 
        }
        validationFlag = userInputValidation(userGuessNumber);

        if(!validationFlag){
            GUESSEDNUMBERSARRAY.push(userGuessNumber); 
            validationFlag = playGame(userGuessNumber, machinePickedNumber);
            COUNTER++ 
        }

    }while(validationFlag); 

}

function userInputValidation(userNumber){

    if (isNaN(userNumber)){
        alert("You have not entered a number \n\n Please enter a number in the 1-100 range");
        return true;  
    }
   
    else if (userNumber <= 0 || userNumber > 100){
        alert("Please enter a number in 1-100 range.")
        return true; 
    } 

    else{
        return false; 
    }
}

function playGame(userNumber, machineNumber){

        let numbersguessed = ''; 

        if(userNumber > machineNumber){
            numbersguessed = GUESSEDNUMBERSARRAY.join(',');
            alert("Your guess is higher, try lower number \n\n The numbers that you have guessed so far are " + numbersguessed);
            return true;
        }

        else if (userNumber < machineNumber){
            numbersguessed = GUESSEDNUMBERSARRAY.join(',');
            alert("Your guess is lower, try higher number \n\n The numbers that you have guessed so far are " + numbersguessed);
            return true;
        }

        else{
            alert("You guessed the number right... " + "You took " + COUNTER + " tries to find it.");
            return false; 
        }

}