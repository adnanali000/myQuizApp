    const question = document.getElementById("question");
    const choices = Array.from(document.getElementsByClassName("choice-text"));
    const progressText = document.getElementById('progressText');
    const scoreText = document.getElementById('score'); 
    const progressBarFull = document.getElementById("progressBarFull");
    
    let currentQuestion = {};
    let score = 0;
    let acceptingAnswer = false;
    let questionCounter = 0;
    let availableQuestion = [];

    let questions = [
        {
        question: "Who is the PM of Pakistan ?",
        choice1: "IMRAN KHAN",
        choice2: "Shahid Afridi",
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
    //console.log(availableQuestion)
    getNewQuestion();
}

getNewQuestion = () =>{

    if(availableQuestion.length === 0 || questionCounter >= max_question){
        //go to end page

        return window.location.assign("end.html");
    }


    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${max_question}`;

    progressBarFull.style.width = `${(questionCounter / max_question) * 100}%`;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice"+ number];

    });

    availableQuestion.splice(questionIndex,1);
    acceptingAnswer = true;
};

choices.forEach(choice =>{
    choice.addEventListener("click",e => {
        if(!acceptingAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if(classToApply === 'correct'){
            incrementScore(correct_Bonus);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);  
            getNewQuestion();                     
        },1000);


        
    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();





