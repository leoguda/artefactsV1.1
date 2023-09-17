const questions = [
  // 1 
  {
  question: "გრგლ, ყვარყვლ, ქვითრ, გვან, მამჭირ, ღირლ – ნაწარმოებ სახელთა რომელ ჯგუფს განეკუთვნება ჩამოთვლილი სახელები? ",
  answers: [
  { text:  "ა) ქონების სახელებს",   correct:  true},
  { text:  "ბ) წარმომავლობის სახელებს",   correct: false},
  { text:  "გ) უქონლობის სახელებს",   correct: false},
  { text:  " დ) დანიშნულების სახელებს ",   correct: false},
        ]
  },

  // 2 
  {
      question: "დვით ლახვთე ესღრდა ჩჟშვ – რომელ ბრუნვაში დგას უბრალო დამატება [ჩჟშვ] ამ წინადადებაში? ",
      answers: [
      { text:  " ა) მოთხრობითში",   correct: false},
      { text:  "ბ) სახელობითში  ",   correct: false},
      { text:  "გ) მოქმედებითში",   correct: true},
      { text:  "დ) ნათესაობითში",     correct: false},
            ]
      },

      // 3 
      {
          question: "ზმნური პარადიგმებიდან რომელი წყვილი არ გამოხატავს წარსულ დროს:",
          answers: [
          { text:  "ა) მი ხვითვერდს – ნ ხვითვერდად ",   correct: false},
          { text:  "ბ) ნ ლითვერდად – სი ხითვერდს ",   correct: false},
          { text:  "გ) ეჯრ ითვერდახ – ნ ხვითვერდად ",   correct: false},
          { text:  "დ) ნ ხვითვერდად – ეჯა ითვერდა  ",     correct: false},
          { text:  "ე) მი ხვითვრი – ნ ლითვრიდ ",     correct: true},
             ]
          },
  // 4  
      {
          question: ".ჩამოთვლილი ზმნებიდან რომელია ინკლუზიური ფორმა? ",
          answers: [
          { text:  "ა) სგ ჯაკფნხ – თქვენ გსურდათ ",   correct:  false},
          { text:  "ბ) ნ ნაკფნ – ჩვენ გვსურდა ",   correct: false},
          { text:  " გ) ნ გვემდნ – ჩვენ შეგვეძლო ",   correct: true},
          { text:  "დ) ნ ნემდნ – ჩვენ შეგვეძლო",     correct: false},
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