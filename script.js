 const questions = [
  {
    question: "Which country has the most natural lakes in the world?",
    answers: [
      { text: "Russia", correct: false },
      { text: "Canada", correct: true },
      { text: "USA", correct: false },
      { text: "India", correct: false },
    ],
  },
  {
    question: "What is the heaviest naturally occurring element?",
    answers: [
      { text: "Uranium", correct: true },
      { text: "Osmium", correct: false },
      { text: "Plutonium", correct: false },
      { text: "Lead", correct: false },
    ],
  },
  {
    question: "Who was the first person to win two Nobel Prizes in different fields?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Marie Curie", correct: true },
      { text: "Linus Pauling", correct: false },
      { text: "Niels Bohr", correct: false },
    ],
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Who was the first female Prime Minister in the world?",
    answers: [
      { text: "Golda Meir", correct: false },
      { text: "Margaret Thatcher", correct: false },
      { text: "Sirimavo Bandaranaike", correct: true },
      { text: "Indira Gandhi", correct: false },
    ],
  },
  {
    question: "Which planet has the highest number of moons (as of 2024)?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: true },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "Which Indian physicist won the Nobel Prize for the Raman Effect?",
    answers: [
      { text: "C.V. Raman", correct: true },
      { text: "S.N. Bose", correct: false },
      { text: "Homi Bhabha", correct: false },
      { text: "Vikram Sarabhai", correct: false },
    ],
  },
  {
    question: "What is the longest river in Asia?",
    answers: [
      { text: "Indus", correct: false },
      { text: "Mekong", correct: false },
      { text: "Yangtze", correct: true },
      { text: "Ganges", correct: false },
    ],
  },
  {
    question: "Which is the smallest bone in the human body?",
    answers: [
      { text: "Femur", correct: false },
      { text: "Stapes", correct: true },
      { text: "Ulna", correct: false },
      { text: "Radius", correct: false },
    ],
  },
  {
    question: "Which European country has the most volcanoes?",
    answers: [
      { text: "Iceland", correct: false },
      { text: "Italy", correct: true },
      { text: "France", correct: false },
      { text: "Greece", correct: false },
    ],
  },
  {
    question: "What is the SI unit of electric resistance?",
    answers: [
      { text: "Volt", correct: false },
      { text: "Ohm", correct: true },
      { text: "Ampere", correct: false },
      { text: "Watt", correct: false },
    ],
  },
  {
    question: "Which Indian state has the highest number of national parks?",
    answers: [
      { text: "Madhya Pradesh", correct: true },
      { text: "Assam", correct: false },
      { text: "Uttarakhand", correct: false },
      { text: "Karnataka", correct: false },
    ],
  },
  {
    question: "Which element is a liquid at room temperature?",
    answers: [
      { text: "Iodine", correct: false },
      { text: "Chlorine", correct: false },
      { text: "Mercury", correct: true },
      { text: "Sodium", correct: false },
    ],
  },
  {
    question: "In which year did the Berlin Wall fall?",
    answers: [
      { text: "1991", correct: false },
      { text: "1987", correct: false },
      { text: "1989", correct: true },
      { text: "1993", correct: false },
    ],
  },
  {
    question: "Which scientist developed the theory of general relativity?",
    answers: [
      { text: "Stephen Hawking", correct: false },
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
    ],
  },
  {
    question: "Which Indian freedom fighter founded 'Azad Hind Fauj'?",
    answers: [
      { text: "Bhagat Singh", correct: false },
      { text: "Lala Lajpat Rai", correct: false },
      { text: "Subhas Chandra Bose", correct: true },
      { text: "Mahatma Gandhi", correct: false },
    ],
  },
  {
    question: "Which is the only continent without a desert?",
    answers: [
      { text: "Europe", correct: true },
      { text: "Asia", correct: false },
      { text: "South America", correct: false },
      { text: "North America", correct: false },
    ],
  },
  {
    question: "Which blood group is called the universal donor?",
    answers: [
      { text: "O+", correct: false },
      { text: "O-", correct: true },
      { text: "AB+", correct: false },
      { text: "A-", correct: false },
    ],
  },
  {
    question: "What is the name of India's first satellite?",
    answers: [
      { text: "Aryabhata", correct: true },
      { text: "INSAT-1", correct: false },
      { text: "Bhaskara", correct: false },
      { text: "Rohini", correct: false },
    ],
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    answers: [
      { text: "Cerebrum", correct: false },
      { text: "Cerebellum", correct: true },
      { text: "Medulla", correct: false },
      { text: "Thalamus", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion(); 
}
function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "."+currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct){
            button.dataset.correct = "true";
        }
        button.addEventListener("click" , selectAnswer);
          answerButtons.appendChild(button);
    });
}
function resetState (){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer (e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct === "true" ;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); 
        }
        button.disabled = true; 
    });

    nextButton.style.display = "block"; 
}
function showScore(){
    resetState();
   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="Play Again" ;
    nextButton.style.display ="block";
}
function handleNextButton (){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz(); 