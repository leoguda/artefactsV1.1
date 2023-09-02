const questions = [
  // 1 
  {
  question: "ჩამოთვლილ სახელებში: ლი-სრვინე, ლი-სტრუნლ, ლი-სმწლ, ლი-ედ ... ლი- თავსართი არის მაწარმოებელი: ",
  answers: [
  { text:  "ა) დანიშნულების სახელებისა",   correct:  false},
  { text:  "ბ) საწყისისა",   correct: true},
  { text:  " გ) მოთხრობითი ბრუნვისა",   correct: false},
  { text:  "დ) წარმომავლობის სახელებისა",   correct: false},
        ]
  },

  // 2 
  {
      question: "მუჭხვი; ტფხელ; ტებდი; ხოჩა; მცხი; მეკვშდე; ხოლა; ჯდი – მეტყველების რომელ ნაწილს განეკუთვნება ეს ლექსემები?  ",
      answers: [
      { text:  "ა) არსებით სახელს",   correct: false},
      { text:  "ბ) ზმნიზედას ",   correct: false},
      { text:  "გ) ნაცვალსახელს",   correct: false},
      { text:  "დ) ზედსართავ სახელს",     correct: true},
            ]
      },

      // 3 
      {
          question: "გუნ ხოჩა ლიმბვლ ხოხალდა ჯაბექს – კარგი საუბარი იცოდა ჯაბექმა. რომელ ბრუნვაში დგას სუბიექტი ამ წინადადებაში? ",
          answers: [
          { text:  "ა) მოთხრობითში",   correct: false},
          { text:  "ბ) მიცემითში",   correct: true},
          { text:  "გ) სახელობითში ",   correct: false},
          { text:  "დ) ნათესაობითში ",     correct: false},
             ]
          },
  // 4  
      {
          question: "ზმნური პარადიგმებიდან პირველი პირის ფორმებია: ",
          answers: [
          { text:  "ა) მი ხვიმზირდს – ნ ხვიმზირდად",   correct:  true},
          { text:  "ბ) სი ხიმზირდს – ეჯრ იმზირდახ  ",   correct: false},
          { text:  "გ) მი ხვიმზირდს – სი ხიმზირდს",   correct: false},
          { text:  "დ) ეჯა იმზირდა – მი ხვიმზირდს ",     correct: false},
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
  
  
  
  
  