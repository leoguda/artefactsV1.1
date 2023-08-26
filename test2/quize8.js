const questions = [
  // 1 
  {
  question: " ვინ ჩამოაყალიბა სვანეთში პირველი ფოლკლორული ანსამბლი?",
  answers: [
  { text:  "ა) ივანე მარგიანმა",   correct:  true},
  { text:  "ბ) მურზაყან დადეშქელიანმა",   correct: false},
  { text:  " გ) პლატონ დადვანმა",   correct: false},
  { text:  "დ) ვახტანგ ფილფანმა",   correct: false},
        ]
  },

  // 2 
  {
      question: "რიცხვით სახელთა (ათეულების) რომელი თანმიმდევრობაა სწორი? ",
      answers: [
      { text:  "ა)აშირ, ეშდ, უსგვშდ, სემეშდ, იშგვდშდ, ოხვშდშდ, ოშთხვეშდ, ერვეშდ, ჩხარშდ, არშდ, ",   correct: false},
      { text:  "ბ)სემეშდ, ოშთხვეშდ, არშდ, ჩხარშდ, აშირ, ეშდ, ერვეშდ, უსგვშდ, იშგვდშდ, ოხვშდშდ ",   correct: false},
      { text:  "გ)არშდ, აშირ, ეშდ, უსგვშდ, იშგვდშდ, ოხვშდშდ, სემეშდ, ოშთხვეშდ, ერვეშდ, ჩხარშდ",   correct: false},
      { text:  "დ) ეშდ, ერვეშდ, სემეშდ, ოშთხვეშდ, ოხვშდშდ, უსგვშდ, იშგვდშდ, არშდ,  ჩხარშდ, აშირ ",     correct: true},
            ]
      },

      // 3 
      {
          question: "ჩამოთვლილთაგან რომელია რთული სიტყვა ანუ კომპოზიტი:",
          answers: [
          { text:  "ა) ჯაბექ ი ბექნუ ",   correct: false},
          { text:  "ბ) ბიძ-ნიბშინ ",   correct: true},
          { text:  "გ) ხოჩმდ იღრლ",   correct: false},
          { text:  "დ) ხქლხ გაცხდ ",     correct: false},
             ]
          },
  // 4  
      {
          question: "ჩამოთვლილ ფორმათაგან რომელი არ გამოხატავს ბრძანებით კილოს? ",
          answers: [
          { text:  "ა) ლქვინ ეჯნემ",   correct:  true},
          { text:  "ბ) ლქვახ ეჯრდ მლე",   correct: false},
          { text:  "გ) ლხღირლ სი",   correct: false},
          { text:  "დ) ამერინ შვნთე",     correct: false},
          { text:  "ე) ლხღირლედ სგ ",     correct: false},
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  