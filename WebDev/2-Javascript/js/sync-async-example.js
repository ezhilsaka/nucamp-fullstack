function syncFunction(){
    console.log("Start of the sync function");
    for(let i = 1; i<=5; i++){
      console.log("sync",i);
    }
    console.log("End of the sync function"); 
  }
  
  function asyncFunction(){
    console.log("Start of the async function");
    for(let i = 1; i<=5; i++){
      setTimeout(() => console.log("async",i), 1000 * i); 
      
    }
    console.log("End of thee async function"); 
  }
   
  asyncFunction();
  syncFunction();