//Example 1

/* const performCoinFlip = () => {
    const coinFlip = new Promise((resolve, reject) => {
      const outcomes = ['heads', 'tails', 'edge'];
      const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  
      if (outcome !== 'edge') {
        resolve(outcome);
      } else {
        const errorMes = 'Landed on the Edge, Try Again';
        reject(errorMes); 
      }
    });
  
    // Do not modify this part, it will display the result of your Promise
    coinFlip.then((result) => {
      document.getElementById('result').textContent = `The coin landed on ${result}!`;
    }).catch((error) => {
      document.getElementById('result').textContent = error;
    });
  };
  
  document.getElementById('flipCoinButton').addEventListener('click', performCoinFlip); */

  //Example 2

/*   const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      //let success = false;
      let success = false;
    if(success) {
      resolve("data fetched successfully!");
    }  else {
      reject("failed to fetch data");
    }
    }, 2000);
    });

fetchData.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log("The fetch request is complete!");
}); */

//Example 3

let isLoading = true;

function stopLoading(){
  isLoading = false;
  console.log('stopped loading'); 
}

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
    let success = Math.random() > 0.5
    if(success) {
      resolve("data fetched successfully!");
    }  else {
      reject("failed to fetch data");
    }
    }, 2000);
    });

fetchData.then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => stopLoading());