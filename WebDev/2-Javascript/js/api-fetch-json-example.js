async function fetchHero() {
  /* This line below is fetching data from a website API. You haven't learned how to do this just yet, so here's a short explanation of what it does:
  - 'fetch' is the function that sends a query to the website url, in this case this website https://www.superheroapi.com.
  - 'await' tells JavaScript that the answer won't come back immediately and it needs to wait for it.
  - 'then' tells JavaScript what to do with the website answer when it comes back
  - 'response' is what the website sends back. We then use the text() function to get the text result. Note that the json() function would return a well formed JSON JavaScript Object.
  */
  
  const hero = await fetch('https://www.superheroapi.com/api.php/1079471338910705/731')
    .then((response) => response.text())
  
  /**** Step 1: print in the console the value of 'hero'. Check that it is a JSON in a string format. ****/
  // Add your code here
  console.log(hero); 

  /**** Step 2: transform this string into a JavaScript Object and console.log it ****/
  // Add your code here
  heroJson = JSON.parse(hero);
  console.log(heroJson); 
  
  /**** Step 3: using the function alert, display the name and the eye color of the Hero ****/
  // Add your code here
  console.log(heroJson.name);
  //console.log(heroJson.appearance.['eye-color']); -- showing error in VS Code
  console.log(heroJson.appearance.eye-color);
    
  /**** Step 4: create a new constant named 'myHero' following the same format. Same fields can be set as 'null' ****/
  // Add your code here
  const myHero = heroJson;
  /**** Step 5: create a new 'heroes' array and add both 'hero' and 'myHero' to it. Then create a stringified version of the array it using the JSON.stringify function, and console.log() it. ****/
  // Add your code here
const heroes = [heroJson, myHero];
console.log(JSON.stringify(heroes));
}

fetchHero()