const questions = [
  // 1
  {
  question: "ვის ეკუთვნის სვანური ლექსიკის პირველი სამეცნიერო ჩანაწერები? ",
  answers: [
  { text:  "ა) გიულდენშტედტს",   correct:  true},
  { text:  "ბ) ნიკო მარს ",   correct: false},
  { text:  "გ) მარი ბროსეს ",   correct: false},
  { text:  "დ) გერჰარდ დეეტერსს",     correct: false},
        ]
  },
  // 2 
  {
      question: "პარადიგმის რომელი წყვილი გამოხატავს „ცხოვრობს“ ზმნის მესამე პირს?",
      answers: [
      { text:  "ა) ხვიზგე – ხვიზგედ",   correct: false},
      { text:  "ბ) იზგე – ხვიზგედ",   correct: false},
      { text:  "გ) ხიზგედ – ხიზგე",   correct: false},
      { text:  "დ) იზგე – იზგეხ",     correct: true},
            ]
      },

      // 3 
      {
          question: "რამდენი ხმოვანი გვაქვს სვანური ენის ბალსქვემოურ დიალექტში?",
          answers: [
          { text:  "ა) 7 ხმოვანი",   correct: false},
          { text:  "ბ) 9 ხმოვანი",   correct: true},
          { text:  "გ) 12 ხმოვანი ",   correct: false},
          { text:  "დ) 18 ხმოვანი",     correct: false},
             ]
          },
  // 4  
      {
          question: "ჩამოთვლილ ფორმათაგან რომელი გამოხატავს მომავალ დროს:",
          answers: [
          { text:  "ა) მი მირი – სი ჯარდნა",   correct:  false},
          { text:  "ბ) ეჩას ხორდა – სი ჯირი",   correct: false},
          { text:  "გ) სი ჯერდი – მი მერდი",   correct: true},
          { text:  "დ) სი ჯირი – ეჩას ხარდნა",     correct: false},
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  