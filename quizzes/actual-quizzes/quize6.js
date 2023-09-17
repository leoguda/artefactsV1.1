const questions = [
  // 1 
  {
  question: "სვანური ენის საუნივერსიტეტო სახელმძღვანელოების ავტორები არიან:",
  answers: [
  { text:  "ა) ალ. ონიანი; ვ. თოფურია; ზ. ჭუმბურიძე; ლ. ნიჟარაძე; რ. ქურდაძე",   correct:  true},
  { text:  "ბ) ა.შანიძე; ბ. ნიჟარაძე; ნიკო მარი; ივ. მარგიანი; ა. ლიპარტელიანი",   correct: false},
  { text:  "გ) გ. მაჭავარიანი; რ.იოსელიანი; ი.ჩანტლაძე; ნ.აბესაძე; მ.სუხიშვილი",   correct: false},

        ]
  },

  // 2 
  {
      question: "რამდენი ხმოვანი გვაქვს სვანური ენის ლენტეხურ დიალექტში?",
      answers: [
      { text:  "ა) 12 ხმოვანი",   correct: false},
      { text:  "ბ) 9 ხმოვანი",   correct: true},
      { text:  "გ) 6 ხმოვანი",   correct: false},
      { text:  "დ) 5 ხმოვანი",     correct: false},
            ]
      },

      // 3 
      {
          question: "ჩამოთვლილთაგან რომელია ზედსართავ სახელთა აღმატებითი ხარისხის ფორმა? ",
          answers: [
          { text:  "ა) წრნი, მეშხე, ტებდი, თვეთნე",   correct: false},
          { text:  "ბ) ხოწრანა, ხოთთვენა, ხორჟა, ხომშხა",   correct: false},
          { text:  "გ) რჟი, ხოთთვენა, მეშხე, მთთვენე, ",   correct: false},
          { text:  "დ) მთთვენე, მმშხე, მტბიდე, მაწრანე",     correct: true},
             ]
          },
  // 4  
      {
          question: "ზმნური პარადიგმის რომელი წყვილი გამოხატავს პირველ პირს? ",
          answers: [
          { text:  "ა) მი მალტ – სგ ჯალტხ ",   correct:  false},
          { text:  "ბ) ეჯას ხალტ – სი ჯალტ ",   correct: false},
          { text:  "გ) ეჯრს ხალტხ – ნ ნალტ",   correct: false},
          { text:  "დ) მი მალტ –ნ გვალტ – ნ ნალტ ",     correct: true},
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
          score++;
      }
  
  
      Array.from(answerButton.children).forEach(button => {
          if(button.dataset.correct === "true"){
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
    const sendBtn = document.getElementById("sendBtn");
    if(percentage>=75){
        // resetState()
        sendBtn.classList.remove("disabled-btn")
    }else(
        sendBtn.classList.add("disabled-btn")
    )
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