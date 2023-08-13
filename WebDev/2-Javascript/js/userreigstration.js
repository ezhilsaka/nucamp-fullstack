// Task 1: Validate Username
function validateUsername(username) {
    let validUserName = false;
     try{
      if(username.length >= 5){
        validUserName = true; 
      }
      if(!validUserName)throw new Error("User name should be more than equal to or more than 5 characters.");
    } catch (error){
      console.log(error.message); 
    } finally {
      return validUserName; 
    }
   }
   
   // Task 2: Validate Password
   function validatePassword(password) {
     let validPassword = false;
     try{
       if(password.length >= 8){
         for(let charc of password){
           if (isNaN(charc)){
             continue;
           }
           else{
             validPassword = true;
           }
         }
       }
       if(!validPassword) throw new Error("Password must be atleast 8 characters long and should contain a number");
     } catch (error) {
       console.log(error.message); 
     } finally {
      return validPassword; 
    }
   }
   
   // Task 3: Validate Email
   function validateEmail(email) {
     let validEmail = false;
     try{
       for(let char of email){
         if (char === '@'){
           validEmail = true;
           break;
         }
        }
       if(!validEmail) throw new Error("Email should contain @ symbol.");
     } catch (error){
       console.log(error.message); 
     } finally {
      return validEmail; 
    }
   }
   
   // Task 4: Validate User
   function validateUser(user) {
     try{
       validUserName = validateUsername("john");
       validPass = validatePassword("johny123");
       validEmail = validateEmail("john"); 
       if(!validUserName) throw Error("Invalid User Name");
       if(!validPass) throw Error("Invalid Password.");
       if(!validEmail) throw Error("Invalid Email.");
     } catch(error){
       console.log(error.message); 
     }
    }
   
   
   
   //----------------------------- TESTS --------------------------------------------
   // Do not modify the below code -- this is test code that will help you determine if you completed each task correctly. Be sure to open the console to see the test messages.
   
   //test function
   function testValidation() {
     function runTest(description, testFunc, expectError = false) {
       try {
         const result = testFunc();
         if (expectError) {
           console.error(`${description} failed. Expected an error but did not receive one.`);
         } else if (result) {
           console.log(`${description} passed.`);
         } else {
           console.error(`${description} failed.`);
         }
       } catch (e) {
         if (expectError) {
           console.log(`${description} passed. Received an expected error.`);
         } else {
           console.error(`${description} threw an unexpected error:`, e.message);
         }
       }
     }
     
     //test case data - these are objects!
     const user1 = {username: "john", password: "Password1", email: "john@example.com"}; //should fail (username)
     const user2 = {username: "janedoe", password: "Password", email: "jane@example.com"}; //should fail (password missing number)
     const user3 = {username: "juliadoe", password: "Pword1", email: "julia@example.com"}; //should fail (password too short)
     const user4 = {username: "jamaldoe", password: "Password1", email: "jamal.example.com"}; //should fail (email)
     
     //tests
     runTest("Username validation - short username", () => validateUsername(user1.username), true); // Expects an error
     runTest("Password validation - missing number", () => validatePassword(user2.password), true); // Expects an error
     runTest("Password validation - too short", () => validatePassword(user3.password), true); // Expects an error
     runTest("Email validation - missing @ symbol", () => validateEmail(user4.email), true); // Expects an error
     runTest("User validation", () => {
       return !validateUser(user1) && // short username, expects an error
         !validateUser(user2) && // missing number in password, expects an error
         !validateUser(user3) && // password too short, expects an error
         !validateUser(user4);   // missing @ in email, expects an error
     });
   }
   
   console.clear();
   testValidation();