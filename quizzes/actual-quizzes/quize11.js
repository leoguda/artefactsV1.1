const questions = [
  // 1 
  {
  question: ".რომელი საუკუნის ძეგლია „მატიანე სუანეთისა კრებისა“?",
  answers: [
  { text:  "ა) XIII საუკუნის",   correct:  true},
  { text:  "ბ) VIII საუკუნის",   correct: false},
  { text:  "გ) X საუკუნის",   correct: false},
  { text:  "დ) VII საუკუნის",   correct: false},
        ]
  },

  // 2 
  {
      question: "ჩამოთვლილ ფორმათაგან რომელი გამოხატავს ზედსართავი სახელების უფროობით ხარისხს: ",
      answers: [
      { text:  "ა) კლთხი, ჯდი, მაშრი, ნახვწი, მახე, ნეცინ",   correct: false},
      { text:  "ბ) ხოკლათხა, ხონხუწა, ხომხა, ხონცინა, ხომშარა, ხოჯვდა",   correct: true},
      { text:  "გ) ჯვინელ, მეგრე, მნშგვე, მუჭხვი, კადრ, მჟირ",   correct: false},
      { text:  "დ) მხიმ, ბგი, სგელ, დთხელ, ზსყი, მეჩი, ფრი",     correct: false},
            ]
      },

      // 3 
      {
          question: "რომელ ბრუნვაში დგას ქვემდებარე [ლეჭშრიდ] წინადადებაში: ლექურწილ კაბ წვილს ლეჭშრიდ ხეკვეს ოხყიდას – საქორწილო კაბა პატარძალს უნდა უყიდოს საქმრომ. ",
          answers: [
          { text:  "ა) მოქმედებითში",   correct: false},
          { text:  "ბ) ვითარებითში ",   correct: false},
          { text:  "გ) მოთხრობითში",   correct: true},
          { text:  "დ) სახელობითში",     correct: false},
             ]
          },
  // 4  
      {
          question: "რას გამოხატავს -მა ნაწილაკი ამ წინადადებაში? გეზლრ ჯინრიხ-მა ლაშდაბთე ი ჯიმურჯიხ-მა? ",
          answers: [
          { text:  "ა) სიბრალულს ",   correct:  false},
          { text:  "ბ) თანაგრძნობას",   correct: false},
          { text:  "გ) ერთადობას, თანაობას",   correct: false},
          { text:  "დ) კითხვითობას ",     correct: true},
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