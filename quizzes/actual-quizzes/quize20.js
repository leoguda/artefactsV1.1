const questions = [
  // 1 
  {
  question: "დიშის სახარება ქართული ოთხთავებიდან ყველაზე ძველი შატბერდში გადაწერილი თარიღიანი ხელნაწერია. რომელ წელსა გადაწერილი ადიშის ოთხთავი? ",
  answers: [
  { text:  " ა) 897 წელს. ",   correct:  true},
  { text:  "ბ) 864 წელს. ",   correct: false},
  { text:  "გ) 936 წელს. ",   correct: false},
  { text:  " დ) 555 წელს.   ",   correct: false},
        ]
  },

  // 2 
  {
      question: "ზმნური პარადიგმებიდან რომელი წყვილი არ არის წარსული დროის ფორმა: ",
      answers: [
      { text:  "ა) ნ ხვიზგად – სი ხიზგს",   correct: false},
      { text:  "ბ) ეჯა იზგა – ეჯრ იზგახ ",   correct: false},
      { text:  "გ) სი ხიზგს – სგ ხიზგად",   correct: false},
      { text:  "დ) მი ხვიზგს – სგ ხიზგად",     correct: false},
      { text:  "ე) ეჯა იზგე – ეჯრ იზგეხ ",     correct: true},
            ]
      },

      // 3 
      {
          question: "ქართველური ენებია: ",
          answers: [
          { text:  "ა) ქართლი, სვანური, მეგრულ-ჭანური / ზანური",   correct: true},
          { text:  "ბ) ქართული, არამეული, იაფეტური",   correct: false},
          { text:  "გ) იბერიულ-კავკასიური, ფინიკიური, სირიული",   correct: false},
          { text:  "დ) ქართული, ინდოევროპული, სემიტური ",     correct: false},
             ]
          },
  // 4  
      {
          question: "ზმნური პარადიგმის რომელი ფორმა გამხატავს მეორე პირს?  ",
          answers: [
          { text:  "ა) მი მანწმნ – ეჯრს ხანწმნხ",   correct:  false},
          { text:  "ბ) ეჯას ხანწმნ – ეჯრს ხანწმნხ",   correct: false},
          { text:  "გ) სი ჯანწმნ – სგ ჯანწმნხ",   correct: true},
          { text:  "დ) სი ჯანწმნ – ნ გვანწმნ",     correct: false},
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