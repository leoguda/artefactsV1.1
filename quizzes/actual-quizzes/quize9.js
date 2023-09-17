const questions = [
  // 1 
  {
  question: "დალი / კოდორის ხეობის ისტორიული, ძველი სახელია:",
  answers: [
  { text:  "ა) მისიმიანეთი / მივსიანეთი",   correct:  true},
  { text:  "ბ) კულხა",   correct: false},
  { text:  "გ) აფხაზეთის „ოქროს გასაღები“",   correct: false},
  { text:  "დ) სკვიმნია",   correct: false},
        ]
  },

  // 2 
  {
      question: "ჩამოთვლილი ზმნებიდან რომელია ინკლუზიური ფორმა?  ",
      answers: [
      { text:  "ა) ნ ლაშდბად – ჩვენ ვმუშაობთ ",   correct: true},
      { text:  "ბ) ნ ხვიჭვდნიდ – ჩვენ ვკითხულობთ ",   correct: false},
      { text:  "გ) ნ ხვიზელლდ – ჩვენ დავდივართ",   correct: false},
      { text:  "დ) ნ ნალტ – ჩვენ გვიყვარს",     correct: false},
            ]
      },

      // 3 
      {
          question: "სვანურად ვიჭმ ლექსემით აღინიშნება: ",
          answers: [
          { text:  "ა) შიმშილობა ",   correct: false},
          { text:  "ბ) მარხვა, ქრისტეშობის მარხვა, დეკემბერი ",   correct: true},
          { text:  "გ) თიბვა, მკა, ლეწვა",   correct: false},
          { text:  "დ) პურობა, დაპურება, ტრაპეზი",     correct: false},
             ]
          },
  // 4  
      {
          question: "ჩამთვლილ ზმნათაგან რომელი გამოხატავს ბრძანებას მესამე პირისადმი?",
          answers: [
          { text:  "ა) ადერდ სგ! ",   correct:  false},
          { text:  "ბ) ლჭოდნას ეჯნემ!",   correct: true},
          { text:  "გ) ხეკვეს აჩე სი! ",   correct: false},
          { text:  "დ) ათგედ სგ!",     correct: false},
          { text:  "ე) აჩდდ სგ",     correct: false},
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