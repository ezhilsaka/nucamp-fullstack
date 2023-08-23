const performCoinFlip = () => {
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
  
  document.getElementById('flipCoinButton').addEventListener('click', performCoinFlip);