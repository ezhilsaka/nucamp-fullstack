const url = 'https://dog.ceo/api/breeds/image/random';

async function fetchDog() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      displayDog(data.message);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  function displayDog(imageUrl) { 
    const img = document.createElement('img'); 
    img.src = imageUrl;
    img.alt = "Random dog photo";
    img.width = 500;
    imageDiv = document.querySelector('#dog');
    imageDiv.appendChild(img);
    setTimeout(removeDog, 3000);     
   }

   function removeDog() {
    imageDiv = document.querySelector('#dog');
    imageDiv.removeChild(imageDiv.firstChild);
   }

   //Random Cat Generator Code where the response is an array of object with URL:

/* const url = 'https://api.thecatapi.com/v1/images/search';

async function fetchCat() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      //console.log(data[0].url);
      displayCat(data[0].url);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  function displayCat(imageUrl) { 
    const img = document.createElement('img'); 
    img.src = imageUrl;
    img.alt = "Random cat photo";
    img.width = 500;
    imageDiv = document.querySelector('#cat');
    imageDiv.appendChild(img);
    setTimeout(removeCat, 3000);     
   }

   function removeCat() {
    imageDiv = document.querySelector('#cat');
    imageDiv.removeChild(imageDiv.firstChild);
   } */