const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
const urlForSports = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`;
const urlForTech = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
    } catch (error) {
      console.error('There was an error!', error);
    }
    try {
        const response = await fetch(urlForSports);
        const dataSports = await response.json();
        console.log(dataSports);
        displaySportNews(dataSports.articles);
      } catch (error) {
        console.error('There was an error!', error);
      }
      try {
        const response = await fetch(urlForTech);
        const dataTech = await response.json();
        console.log(dataTech);
        displayTechNews(dataTech.articles);
      } catch (error) {
        console.error('There was an error!', error);
      }
  }
  
fetchNews();

function displayNews(articles) {
    
    const topNewsContainer = document.querySelector('.top-news');

    const tnImgElements = topNewsContainer.querySelectorAll('.tn-img');

    tnImgElements.forEach((tnImgElement, index) => {
    const imgElement = tnImgElement.querySelector('img');
    const dateElement = tnImgElement.querySelector('.tn-date');
    const titleElement = tnImgElement.querySelector('.tn-title');
    const sourceH3 = tnImgElement.querySelector('h3');

    imgElement.src = articles[index+1].urlToImage;
    dateElement.textContent = articles[index+1].publishedAt;
    titleElement.textContent = articles[index+1].title;
    titleElement.href = articles[index+1].url;
    sourceH3.innerHTML = articles[index+1].source.name;
});
}

function displaySportNews(articles) {
    
    const catNewsContainer = document.querySelector('.cat-news .col-md-6:first-child');

    const cnImgElements = catNewsContainer.querySelectorAll('.cn-img');
    console.log(cnImgElements);

cnImgElements.forEach((cnImgElement, index) => {
    const imgElement = cnImgElement.querySelector('img');
    const dateElement = cnImgElement.querySelector('.cn-date');
    const titleElement = cnImgElement.querySelector('.cn-title');
    //const sourceH3 = cnImgElement.querySelector('h3');

    imgElement.src = articles[index].urlToImage;
    dateElement.textContent = articles[index].publishedAt;
    titleElement.textContent = articles[index].title;
    titleElement.href = articles[index].url;
    //sourceH3.innerHTML = articles[index].source.name;
});
}

//this piece isn't working yet. trying to figure out the issues. 

function displayTechNews(articles) {
    
    const catNewsContainer = document.querySelector('.cat-news .col-md-6:last-child');
    //console.log(catNewsContainer);

    const cnImgElements = catNewsContainer.querySelectorAll('.cn-img');
    console.log(cnImgElements); 
    console.log(articles); 

    cnImgElements.forEach((cnImgElement, index) => {
    const imgElement = cnImgElement.querySelector('img');
    const dateElement = cnImgElement.querySelector('.cn-date');
    const titleElement = cnImgElement.querySelector('.cn-title');
    //const sourceH3 = cnImgElement.querySelector('h3');

    imgElement.src = articles[index].urlToImage;
    dateElement.textContent = articles[index].publishedAt;
    titleElement.textContent = articles[index].title;
    titleElement.href = articles[index].url;
    //sourceH3.innerHTML = articles[index].source.name;
});
}