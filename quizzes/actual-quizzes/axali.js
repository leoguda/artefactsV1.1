const questions = [
{
question: "რას შეისწავლის ქართველოლოგია?  მინიშნება: ქართველოლოგია არის ქართველებისა და საქართველოს შემსწავლელი ყველა ჰუმანიტარული სამეცნიერო დისციპლინა. ",
answers: [
{ text:  "ა) ქართულ ენას",   correct: false },
{ text:  "ბ) ქართულ კულტურას ",   correct: false},
{ text:  "გ) საქართველოს ეთნოლოგიას",   correct: false},
{ text:  "დ) ყველა პასუხი სწორია",     correct: true},
      ]
},
{
    question: "ვის ეკუთვნის ტერმინი „ქართველური ენები“? ",
    answers: [
    { text:  "ა) ჰუგო შუხარტს ",   correct: true },
    { text:  "ბ) აკაკი შანიძეს",   correct: false},
    { text:  "გ) გერჰარდ დეეტერსს",   correct: false},
    { text:  "დ) არნოლდ ჩიქობავას",     correct: false},
          ]
    },
    {
        question: "ჩამოთვლილთაგან რომელია მესამე პირის ნაცვალსახელები:",
        answers: [
        { text:  "ა) სგ – ეჯა  ",   correct: false },
        { text:  "ბ) მი – ნ ",   correct: false},
        { text:  "გ) ნ – ეჯრ ",   correct: false},
        { text:  "დ) ეჯა – ეჯრ ",     correct: true},
           ]
        },

    {
        question: "ჩამოთვლილთაგან რომელია სვანური ენის დიალექტები?",
        answers: [
        { text:  "ა) უშგულური  ",   correct: false },
        { text:  "ბ) ბალსზემოური",   correct: false},
        { text:  "გ) ლატალური ",   correct: false},
        { text:  "დ) ლაშხური",     correct: false},
        { text:  "ე) მხოლოდ ა) და დ)",   correct: false},
        { text:  "ვ) მხოლოდ ბ) და დ)",  correct: true},
        { text:  "ზ) ყველა პასუხი სწორია",  correct: false},
        ]
    },
    
    {
        question: "ჩამოთვლილთაგან რომელი შეიძლება გამოვიყენოთ მისალმების ფორმად? ",
        answers: [
        { text:  "ა) ხოჩა ლადეღ!",   correct: true },
        { text:  "ბ) ივასუ ხრი! ",   correct: false},
        { text:  "გ) გ) იმჟი იმჟი ხრი!  ",   correct: false},
        { text:  "დ) ღრბეთუ ლაჯშედა!",     correct: false},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerButton.appendChild(button);

       if(answer.correct){
        button.dataset.correct = answer.correct;
       }
       button.addEventListener("click", selectAnswer);
});
}

function resetState(){
   nextButton.style.display = "none";
   while(answerButton.firstChild){
     answerButton.removeChild(answerButton.firstChild);
}
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }


    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
             button.classList.add("correct");
        }    
        button.disabled = true; 
        });
        nextButton.style.display = "block"  
}
 

function showScore() {
    resetState();
    const percentage = (score / questions.length) * 100;
    const roundedPercentage = Math.round(percentage * 10) / 10; // Round to one decimal place
    questionElement.innerHTML = `Your score: ${roundedPercentage}% (${score} out of ${questions.length})`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

    function handleNextButton() {
    currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
        showQuestion();
        }else{
        showScore();
        }
    }


    nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
    });


startQuiz();
















