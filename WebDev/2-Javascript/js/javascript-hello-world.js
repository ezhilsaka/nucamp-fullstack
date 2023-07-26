function getName(){
    const userName = prompt('What is your name')
    sayhello(userName)
}
function sayhello(nameOfUser){
    alert("Hello " + nameOfUser + " !");
}