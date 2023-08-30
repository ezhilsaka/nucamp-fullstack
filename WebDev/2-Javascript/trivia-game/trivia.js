const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const feedbackDiv = document.getElementById('feedback');
const newQuestionButton = document.getElementById('questionBtn');
const submitAnswerButton = document.getElementById('answerBtn'); 
let currentQuestion = "";
let gameQuestion = 1; 
let score = 0; 

function getTriviaQuestion(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = Math.floor(Math.random() * questions.length);
            //const index = 50; 
            if(index < questions.length){
                const question = questions[index];
                resolve(question); 
            } else {
                reject("An error occurred while fetching the trivia question.");
            }
        }, 1000);
    });
}

function displayQuestion(triviaQuestion){
    questionDiv.textContent = `Your ${gameQuestion}st question is: ${triviaQuestion.question}`;
    answerDiv.value = "";
    feedbackDiv.textContent = "";
    gameQuestion++; 
}

newQuestionButton.addEventListener('click', () => {
    getTriviaQuestion().then((curQuestion) => {
    currentQuestion = curQuestion;
    displayQuestion(currentQuestion);
    }).catch((error) => {
    alert(error);
})
});

submitAnswerButton.addEventListener('click', () => {
    const userAnswer = answerDiv.value.trim().toLowerCase();
    let feedbackMessage;
    if(userAnswer === currentQuestion.answer.toLowerCase()){
        feedbackDiv.style.color = 'green';
        feedbackMessage = 'Your answer is correct. Next Question will display in 3 mins';
        score = score + 10; 
    }
    else{
        feedbackDiv.style.color = 'red';
        feedbackMessage = 'Your answer is not correct. Next Question will display in 3 mins';
    }
    feedbackDiv.textContent = feedbackMessage;
    if(gameQuestion <= 10){
        setTimeout(() => newQuestionButton.click(), 3000);
    }
    else{
        alert(`Game Over. Your score for this game is ${score}.`);
        quitGame(); 
    }
    
});

function quitGame(){
    newQuestionButton.removeEventListener("click", getTriviaQuestion); 
    newQuestionButton.style.display = "block"; 
}