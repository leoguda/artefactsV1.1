const questions = [
  // 1
  {
  question: "რამდენი ხმოვანი გვაქვს სვანური ენის ბალსზემოურ დიალექტში? ",
  answers: [
  { text:  "ა) 12 ხმოვანი",   correct: false },
  { text:  "ბ) 5 ხმოვანი",   correct: false},
  { text:  "გ) 18 ხმოვანი",   correct: true},
  { text:  "დ) 9 ხმოვანი",     correct: false},
        ]
  },
  // 2
  {
      question: "რომელ საუკუნეში / როდის გვხვდება პირველი ისტორიული ცნობები სვანეთისა და სვანური ენის შესახებ?",
      answers: [
      { text:  "ა) IX საუკუნეში",   correct: false},
      { text:  "ბ) ანტიკურ პერიოდში ",   correct: true},
      { text:  "გ) V საუკუნეში",   correct: false},
      { text:  "დ) II საუკუნეში ",     correct: false},
            ]
      },
      // 3
      {
          question: " ჩამოთვლილთაგან რომელი არ აღნიშნავს კვირის დღეს? ",
          answers: [
          { text:  "ა) დშდიშ",   correct: false },
          { text:  "ბ) თახშ",   correct: false},
          { text:  "გ) საფტინ",   correct: false},
          { text:  "დ) მიშლადეღ",     correct: false},
          { text:  "ე) ნაგზი",     correct: true},
             ]
          },
  // 4  შესასწორებელი
      {
          question: "ჩამოთვლილი ფორმებიდან რომელი გამოხატავს „სწავლობს“ ზმნის მრავლობითი რიცხვის I პირს ? ",
          answers: [
          { text:  "ა) ხითვრიდ",   correct: false },
          { text:  "ბ) ლითვრიდ ",   correct: true},
          { text:  "გ) ითვრიხ  ",   correct: false},
          { text:  "დ) ხვითვრიდ",     correct: true},
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