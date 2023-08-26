const questions = [
  // 1 
  {
  question: "რომელ წელს მოხდა აჯანყება კლდესოფელ ხალდეში? ",
  answers: [
  { text:  "ა) 1801 წელს ",   correct:  false},
  { text:  "ბ) 1876 წელს ",   correct: true},
  { text:  "გ) 1783 წელს ",   correct: false},
  { text:  " დ) 1864 წელს   ",   correct: false},
        ]
  },

  // 2 
  {
      question: "ლესყნე, ლეგრგლი, ლეთრე, ლეზვებ, ლებნდლი – ჩამოთვლილ სახელებში ლე- თავსართი ღნიშნავს:",
      answers: [
      { text:  "ა) მოქმედების ადგილს ",   correct: false},
      { text:  "ბ) მოქმედების დროს ",   correct: false},
      { text:  "გ) ნიშან–თვისებას ",   correct: false},
      { text:  "დ) სამოქმედო საგანს ",     correct: true},
            ]
      },

      // 3 
      {
          question: "მ-სყნე, მ-გზდილე, მ-ბნდლი, მ-ზრე, მ-თმე, მ-გრგლი ჩამოთვლილ სახელებში მ- პრეფიქსი აღნიშნავს: ",
          answers: [
          { text:  "ა) ზომა-წონას",   correct: false},
          { text:  "ბ) ჯერობას ",   correct: false},
          { text:  "გ) მომქმედ სახელს ",   correct: true},
          { text:  "დ) უქონლობას ",     correct: false},
             ]
          },
  // 4  
      {
          question: "ჩამოთვლილი ზმნებიდან რომელია ინკლუზიური ფორმა?  ",
          answers: [
          { text:  "ა) ნ გვწდუნი – ჩვენ გვენატრება",   correct:  true},
          { text:  "ბ) ნ ნწდუნი – ჩვენ გვენატრება",   correct: false},
          { text:  "გ) ნ ნზნუნი – ჩვენ წასვლა გვინდა  ",   correct: false},
          { text:  "დ) სგ ჯზნუნიხ – ჩვენ წასვლა გვინდა  ",     correct: false},
          { text:  "ე) ეჯრს ხწდუნიხ – იმათ ენატრებათ  ",     correct: false},
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  