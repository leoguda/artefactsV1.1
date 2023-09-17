const questions = [
  // 1
  {
  question: "სვანური ენის დიალექტებია: ",
  answers: [
  { text:  "ა) ბალსზემოური, უშგულური, ლატალური, ლაშხური ",   correct: false },
  { text:  "ბ) ბალსზემოური, ბალსქვემოური, ლენტეხური, ლაშხური",   correct: true},
  { text:  "გ) ბალსქვემოური, ლენტეხური, ცხუმარული, ჩოლურული",   correct: false},
  { text:  "დ) ლაშხური, ლახამულური, ბალსზემოური, ცხუმარული",     correct: false},
        ]
  },
  // 2 შესასწორებელი
  {
      question: "ჩამოთვლილთაგან რომელი აღნიშნავს წელიწადის დროს:",
      answers: [
      { text:  "ა) ლიმრიე",   correct: false},
      { text:  "ბ) ლუფხვ",   correct: true},
      { text:  "გ) გვირკ",   correct: false},
      { text:  "დ) ლალხორშ ",     correct: false},
            ]
      },
      // 3 შესასწორებელი
      {
          question: " რომელია მცდარი ფორმა:",
          answers: [
          { text:  "ა) სი ხი შვნს.",   correct: false},
          { text:  "ბ) სი ხრი სტუდენტ.",   correct: true},
          { text:  "გ) სი ხრი შვნს.",   correct: false},
          { text:  "დ) სი ხი სტუდენტ.",     correct: false},
             ]
          },
  // 4  
      {
          question: "ჩამოთვლილ სახელთაგან რომელი არ აღნიშნავს სვანურში თვეს? ",
          answers: [
          { text:  "ა) ზავლადეღ",   correct:  true},
          { text:  "ბ) ქვხ",   correct: false},
          { text:  "გ) გვირკ",   correct: false},
          { text:  "დ) შშშობ / ლალხორშ",     correct: false},
          { text:  "ე) აპრილ",     correct: true},
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  