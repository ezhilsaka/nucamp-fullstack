const GENERAL_ADMISSION_TICKET = 20;
const AGE_DISCOUNT_PRICE = 10; 
const MATINEE_DISCOUNT = 3;


function buyTicket(){

    let ageOfCustomer = prompt("Enter your Age: ");
    let baseTicket = baseTicketCost(ageOfCustomer);
    let finalTicket = getMatineeDiscount(baseTicket);  
    alert("Your Ticket Cost is: " + finalTicket)

}

function baseTicketCost(age){

    if (age > 12 && age < 65){
        return GENERAL_ADMISSION_TICKET; 
    }
    else{
        return AGE_DISCOUNT_PRICE; 
    }

}

function getMatineeDiscount(baseTicket){

    matineeOrNot = prompt("Are you attending matinee show ? Enter Y or N: "); 

    if (matineeOrNot.toUpperCase() === 'Y'){

        let finalprice = baseTicket - MATINEE_DISCOUNT;
        return finalprice

    }
    else if (matineeOrNot.toUpperCase() === 'N'){

        return baseTicket

    }
    else {
        alert("Not a valid value for Matinee show. Matinee Discount not applied");
        return baseTicket
    }

}