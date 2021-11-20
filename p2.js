const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputBox = document.querySelector("#output");

const correctAnswers= ["90°","Right-angled"];

submitAnswerBtn.addEventListener("click",function calculateScore(){
    let score=0;
    let index=0;

    //we have used form data API in the below line

    const formResults = new FormData(quizForm); //this will give us key:value pair

    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
        score = score+1;
        }
        index++;
    }
    outputBox.innerText = "Your Score is " + score;
} );