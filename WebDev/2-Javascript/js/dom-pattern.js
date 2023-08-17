function showPattern(){
    colors = ['red', 'white', 'black', 'blue', 'orange', 'indigo', 'purple', 'yellow'];
    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;

    while(width > 50){
        const randomColorIDX  = Math.floor(Math.random() * colors.length); 
        const newDiv = document.createElement('div');

        newDiv.style.top = topPosition + 'px'; 
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colors[randomColorIDX];

        document.body.insertBefore(newDiv, document.body.lastElementChild);
        topPosition +=10;
        leftPosition +=10;
        width -= 20;
        height -= 20; 
    }
}