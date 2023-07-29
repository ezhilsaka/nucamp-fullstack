//GLOBAL VARIABLE DECLARATION

const WAVE_POOL_MIN_HEIGHT = 42; // in inches
const WATERSLIDE_MIN_HEIGHT = 48; // in inches
const LAZY_RIVER_MIN_HEIGHT = 36; // in inches

//Part 2: Function to get the inputs from user and respond if they are allowed or not

function purchaseAttraction(){

   //getting the input from users
   const attractionType = prompt('Which attraction do you want to visit: type "wave" for wave pool, "water" for waterslide, or "river" for lazy river?');
   const userHeight = prompt('What is your height in inches?');

   //logging to console

   console.log("User's selected attraction is " + attractionType);
   console.log("User's height is " + userHeight);

   //bonus challenge

   tallerThan43WithAdult = tallerThan43(userHeight);

   if (!tallerThan43WithAdult){

    //calling the function to check if user is allowed or not
   const isAllowed = checkHeight (attractionType.toString(), parseInt(userHeight));
   console.log(isAllowed); 

   //display the prompt to user
   if(isAllowed){
    alert("You are allowed for the attraction")
   }
   else{
    alert("Sorry, You are not allowed for the attraction")
   }

   }
  
}   

//Part 3: Function to check if user is allowed for the attaraction or not

function checkHeight(attraction, height){

    switch(attraction){

        case "wave":
            if (height >= WAVE_POOL_MIN_HEIGHT){
                return true;
            }
            else{
                return false; 
            }
            break;
        case "water":
            if (height >= WATERSLIDE_MIN_HEIGHT){
                return true;
            }
            else{
                return false; 
            }
        case "river":
            if (height >= LAZY_RIVER_MIN_HEIGHT){
                return true;
            }    
            else{
                return false; 
            }
        default:
            return false; 
    }
}

//Bonus Challenge: To check if user is taller than 43 and with adult

function tallerThan43(height){

    if (height > 43){

        withAdult = prompt("Are you with an Adult. Enter y or n: ");
        if(withAdult.toLowerCase() === 'y'){
            alert("You are allowed for all the attractions !!!")
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false; 
    }
}