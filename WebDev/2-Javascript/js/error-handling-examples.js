//example 1

function printVar() {
    try {
      console.log(printname);
    } catch (error) {
      console.log(`Error Message is ${error.message}`);
    }finally{
      console.log("This is final part of the code");
    }
  }
  
  function checkAge(age) {
    if (age < 18){
      throw new Error("Age must be at least 18");
    }
  }
  
  function testAge(age) {
    try{
      checkAge(age);
      alert("You are eligible");
    } catch (error){
      alert("An error has occurred: " +error.message);
    }finally{
      alert("Test is complete");
    }
  }