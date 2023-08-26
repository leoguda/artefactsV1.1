const questions = [
  // 1 შესასწორებელი
  {
  question: "ვის არის ავტორი სვანურის პირველი გრამატიკული მიმოხილვისა: ",
  answers: [
  { text:  "ა) მარი ბროსე",   correct:  false},
  { text:  "ბ) ნიკო მარი",   correct: false},
  { text:  "გ) ბესარიონ ნიჟარაძე",   correct: true},
  { text:  "დ) გეორგ როზენი",     correct: true},
        ]
  },

  // 2 
  {
      question: "რამდენი ხმოვანი გვაქვს სვანური ენის ლაშხურ დიალექტში",
      answers: [
      { text:  "ა) 5 ხმოვანი",   correct: false},
      { text:  "ბ) 9 ხმოვანი",   correct: false},
      { text:  "გ) 12 ხმოვანი ",   correct: true},
      { text:  "დ) 10 ხმოვანი",     correct: false},
            ]
      },

      // 3 
      {
          question: "პარადიგმის რომელი წყვილი გამოხატავს პირველ პირს: ",
          answers: [
          { text:  "ა) ხიზგე – ხიზგედ",   correct: false},
          { text:  "ბ) ხვიზგე – ლიზგედ",   correct: true},
          { text:  "გ) იზგე – ხვიზგედ ",   correct: false},
          { text:  "დ) ხიზგედ – იზგეხ",     correct: false},
             ]
          },
  // 4  
      {
          question: "პარადიგმის რომელი წყვილი გამოხატავს ახლანდელ დროს?",
          answers: [
          { text:  "ა) მი მუღვა ხვ ლრ ",   correct:  true},
          { text:  "ბ) ეჩას ხუღვნ ხვ ლრ",   correct: false},
          { text:  "გ) სი ჯუღვნ ხვ ლრ ",   correct: false},
          { text:  "დ) ეჩას ხაღვნა ხვ ლრ ",     correct: false},
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  