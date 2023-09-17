const questions = [
  // 1 
  {
  question: "ჩამოთვლილთაგან რომელი არ არის რთული სიტყვა ანუ კოპმოზიტი?",
  answers: [
  { text:  "ა) ლიმზირ-ლიჴრლ – ლოცვა-ვედრება ",   correct:  false},
  { text:  "ბ) კინჩხიქვცა – შერცხვენა",   correct: false},
  { text:  "გ) ქვინისდა – გადარჩენა",   correct: false},
  { text:  " დ) ბოლკდა – ამოწყვეტა  ",   correct: false},
  { text:  "  ე) ჯიმ ი დირ – პურ-მარილი ",   correct: false},
  { text:  " ვ) ლილხვრი – მთაში ცხოვრება ",   correct: true},
        ]
  },

  // 2 
  {
      question: "ლაქთალრ, ლახმრ, ლაბტრ, ლადრ, ლაჩაიჟრ, ლაღუნვრ – ჩამოთვლილ სახელებში ლა- თავსართი აღნიშნავს: ",
      answers: [
      { text:  "ა) კუთვნილებას",   correct: false},
      { text:  "ბ) დანიშნულებას ",   correct: true},
      { text:  "გ) უქონლობას ",   correct: false},
      { text:  "დ) კნინობითობას  ",     correct: false},
            ]
      },

      // 3 
      {
          question: "ჰდშს ათხე იზგე ჩხარა მეზგე – ჰადიშში ახლა ცხოვრობს ცხრა კომლი / ცხრა ოჯახი. ამ წინადადებაში რომელ ბრუნვაში დგას ადგილის გარემოება? ",
          answers: [
          { text:  "ა) სახელობითში",   correct: false},
          { text:  "ბ) ნათესაობითში",   correct: false},
          { text:  "გ) ვითარებითში",   correct: false},
          { text:  "დ) მიცემითში ",     correct: true},
             ]
          },
  // 4  
      {
          question: "მალატ ი მსისგ ჟი ესერ დს მოშ ხოწნა. ეს სვანური ანდაზა ქართულად ნიშნავს:  ",
          answers: [
          { text:  "ა) კარგი სტუმრის მოსვლა კერასაც უხარიაო ",   correct:  false},
          { text:  "ბ) სიყვარული და სიძულვილი ვერავის აუწონიაო",   correct: true},
          { text:  "გ) უუფროსო სახლში ყველა უფროსია.  ",   correct: false},
          { text:  "დ) სიყვარული ნემსის ყუნწში გამძვრენიაო. ",     correct: false},
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