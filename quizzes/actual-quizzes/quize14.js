const questions = [
  // 1 
  {
  question: "ტურისტლდ ადთრვეხ მთელ შვნ მურყვმლ – ამ წინადადებაში მრავლობით რიცხვში წარმოდგენილია არსებითი სახელი: ",
  answers: [
  { text:  " ა) შვნ ",   correct:  false},
  { text:  "ბ) ტურისტლდ",   correct: false},
  { text:  "  გ) ადთრვეხ",   correct: false},
  { text:  " დ) მურყვმლ",   correct: true},
        ]
  },

  // 2 
  {
      question: "ვოშა/ოშა მეზგე იზგე ათხე ისგუ სოფელს? – წინადადებაში რომელია კითხვითი სიტყვა? ",
      answers: [
      { text:  " ა) მეზგე",   correct: false},
      { text:  "ბ) ათხე  ",   correct: false},
      { text:  "გ) ვოშა/ოშა ",   correct: true},
      { text:  "დ) ისგუ ",     correct: false},
            ]
      },

      // 3 
      {
          question: "ზმნური პარადიგმებიდან რომელი ფორმა არ გამოხატავს წარსულ დროს? ",
          answers: [
          { text:  "ა) სგ ხიზგად – მი ხვიზგს",   correct: false},
          { text:  "ბ) ნ ხვიზგად – სი ხიზგს",   correct: false},
          { text:  "გ) ეჯა იზგე – ეჯრ იზგეხ",   correct: true},
          { text:  "დ) ნ ლიზგად – ნ ხვიზგად ",     correct: false},
             ]
          },
  // 4  
      {
          question: "ლიდივ-ლიგზლ; ლისმაქ; ლიბოფშვ; ლიფუსდ; ლისვნ, ლივდულ – ჩამოთვლილ ფორმათაგან რომელი არის რთული სიტყვა ანუ კომპოზიტი?",
          answers: [
          { text:  "ა) ლისმაქ, ლიბოფშვ",   correct:  false},
          { text:  "ბ) ლისვნ ",   correct: false},
          { text:  "გ) ლიფუსდ",   correct: false},
          { text:  "დ) ლიდივ-ლიგზლ ",     correct: true},
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
  
  