const questions = [
  // 1 
  {
  question: "რომელ საუკუნეებს მოიცავს სვანეთის წერილობითი ძეგლები? ",
  answers: [
  { text:  "ა) V – XV საუკუნეებს",   correct:  false},
  { text:  "ბ) XII – XVIII საუკუნეებს",   correct: false},
  { text:  "გ) VII – XVII საუკუნეებს",   correct: false},
  { text:  "დ) X – XVIII საუკუნეებს",   correct: true},
        ]
  },

  // 2 
  {
      question: "რომელ ბრუნვაში დგას სუბიექტი [მსძელდ] ამ წინადადებაში: მსძელდ სგა წსე მუშგვრლ ქორთე – სტუმრები სახლში შეიპატიჟა მასპინძელმა. ",
      answers: [
      { text:  "ა) სახელობითში",   correct: false},
      { text:  "ბ) მოთხრობითში",   correct: true},
      { text:  "გ) მიცემითში",   correct: false},
      { text:  "დ) ვითარებითში",     correct: false},
            ]
      },

      // 3 
      {
          question: "ჩამოთვლილი ზმნებიდან რომელია ექსკლუზიური ფორმა? ",
          answers: [
          { text:  "ა) ნ ლაშდბად – ჩვენ ვმუშაობთ",   correct: false},
          { text:  "ბ) ნ ხვიჭვდნიდ – ჩვენ ვკითხულობთ ",   correct: true},
          { text:  "გ) ნ ლიზელლდ – ჩვენ დავდივართ ",   correct: false},
          { text:  "დ) ნ გვალტ – ჩვენ გვიყვარს ",     correct: false},
          { text:  "ე) ნ ლაგემდ – ჩვენ ვაშენებთ",     correct: false},
             ]
          },
  // 4  
      {
          question: "ჩამთვლილ ზმნათაგან რომელი გამოხატავს ბრძანებას მესამე პირისადმი?",
          answers: [
          { text:  "ა) ეჯა იღრლ – ნ ლიღრლდ",   correct:  false},
          { text:  "ბ) მი ხვიღრლ – ნ ხვიღრლდ",   correct: false},
          { text:  "გ) სი ხიღრლ – სგ ხიღრლდ ",   correct: true},
          { text:  "დ) ეჯა იღრლ – ეჯრ იღრლხ ",     correct: false},
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
    const sendBtn = document.getElementById("sendBtn");
    if(percentage>=60){
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  