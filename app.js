    const question = document.getElementById("question");
    const choices = Array.from(document.getElementsByClassName("choice-text"));
    
    let currentQuestion = {};
    let score = 0;
    let acceptingAnswer = true;
    let questionCounter = 0;
    let availableQuestion = [];

    let questions = [
        {
        question: "Who is the PM of Pakistan ?",
        choice1: "IMRAN KHAN",
        choice2: "TRUMP",
        choice3: "Nawaz Sharif",
        choice4: "Zardari",
        answer: 1    
    },
    {
        question: "Who is the PM of USA ?",
        choice1: "IMRAN KHAN",
        choice2: "TRUMP",
        choice3: "Nawaz Sharif",
        choice4: "Zardari",
        answer: 2    
    },
    {
        question: "Who is the PM of India ?",
        choice1: "IMRAN KHAN",
        choice2: "TRUMP",
        choice3: "Nawaz Sharif",
        choice4: "Modi",
        answer: 4    
    },




]


//constants

const correct_Bonus = 10;
const max_question = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    console.log(availableQuestion)
    getNewQuestion();
}

getNewQuestion = () =>{
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;
}

startGame();