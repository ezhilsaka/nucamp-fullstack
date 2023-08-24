const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const feedbackDiv = document.getElementById('feedback');
const newQuestionButton = document.getElementById('questionBtn');
const submitAnswerButton = document.getElementById('answerBtn'); 
let currentQuestion = "";

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
    questionDiv.textContent = triviaQuestion.question;
    answerDiv.value = "";
    feedbackDiv.textContent = "";
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
        feedbackMessage = 'Your answer is correct';
    }
    else{
        feedbackDiv.style.color = 'red';
        feedbackMessage = 'Your answer is not correct';
    }
    feedbackDiv.textContent = feedbackMessage; 
});