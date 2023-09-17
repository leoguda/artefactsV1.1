const questions = [
  // 1 
  {
  question: "ჩამოთვლილი წინადადებებიდან რომელია აზრობრივად არასწორი?",
  answers: [
  { text:  "ა) სი ესღრი ქორ-თე – შენ მიდიხარ სახლ-ში. ",   correct:  false},
  { text:  "ბ) სი ხრი ქორ-ს – შენს ხარ სახლ-ში. ",   correct: false},
  { text:  "გ) ჯაბექ აჩდ შვნ-თე – ჯაბექი წავიდა სვანეთში.",   correct: false},
  { text:  " დ) ჯაბექ რი შვნ-თე – ჯაბექი არის სვანეთში",   correct: true},
  { text:  "ე) ჯაბექ რი შვნ-ს – ჯაბექი არის სვანეთში. ",   correct: false},
        ]
  },

  // 2 
  {
      question: "ხოჩა ლიღრლ ხოხახ ლატლრს – კარგი სიმღერა იციან ლატალელებმა. რომელ ბრუნვაში დგას სუბიექტი ამ წინადადებაში?  ",
      answers: [
      { text:  " ა) სახელობითში",   correct: false},
      { text:  "ბ) მოთხრობითში ",   correct: false},
      { text:  "გ) ნათესაობითში ",   correct: false},
      { text:  "დ) მიცემითში",     correct: true},
            ]
      },

      // 3 
      {
          question: ".ლთ, ისგლადეღქა, ლეჰნრუს, ზავდ, ლდი, ეჩე, ამე, ჟბ – რომელი მეტყველების ნაწილია ჩამოთვლილი სიტყვები? ",
          answers: [
          { text:  "ა) ზედსართავი სახელი",   correct: false},
          { text:  "ბ) რიცხვითი სახელი",   correct: false},
          { text:  "გ) ზმნიზედა ",   correct: false},
          { text:  "დ) არსებითი სახელი ",     correct: true},
             ]
          },
  // 4  
      {
          question: "ზმნური პარადიგმებიდან რომელი ფორმა არ გამოხატავს წარსულ დროს? ",
          answers: [
          { text:  "ა) მი ხვიღრლდს – ნ ლიღრლდად ",   correct:  false},
          { text:  "ბ) სგ ხიღრლდად – სი ხიღრლდს ",   correct: false},
          { text:  " გ) მი ხვიღრლ – ნ ლიღრლდ  ",   correct: true},
          { text:  "დ) ეჯა იღრლდა – ეჯრ იღრლდახ",     correct: false},
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

  const progressBar = document.querySelector(".progress");
  progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
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