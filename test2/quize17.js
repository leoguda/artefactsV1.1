const questions = [
  // 1 
  {
  question: "ბეფშვილდ, ზურლდ, დშდლდ, მიჟლდ, სარგლ, სოფლდ – ნაწარმოებ სახელთა რომელ ჯგუფს განეკუთვნება ჩამოთვლილი  -ლდ სუფიქსიანი სახელები? ",
  answers: [
  { text:  "ა) ქონება-უქონლობისა ",   correct:  false},
  { text:  "ბ) წარმომავლობისა ",   correct: false},
  { text:  "გ) დანიშნულებისა",   correct: false},
  { text:  " დ) კნინობით-ალერსობითისა  ",   correct: true},
        ]
  },

  // 2 
  {
      question: "ეჯრს ხოხახ მახე ხოჩა ამბვ – იმათ იციან კარგი ახალი ამბავი. რომელ ბრუნვაში დგას სუბიქტი ამ წინადადებაში: ",
      answers: [
      { text:  " ა) მოთხრობითში",   correct: false},
      { text:  "ბ) ნათესაობითში  ",   correct: false},
      { text:  "გ) სახელობითში",   correct: false},
      { text:  "დ) მიცემითში ",     correct: true},
            ]
      },

      // 3 
      {
          question: "ჩამოთვლილი ზმნებიდან რომელია ექსკლუზიური ფორმა? ",
          answers: [
          { text:  "ა) სგ ჯწდუნიხ – თქვენ გენატრებათ",   correct: false},
          { text:  "ბ) ეჯრს ხწდუნიხ – იმათ ენატრებათ",   correct: false},
          { text:  "გ) ნ გვზნუნი – ჩვენ წასვლა გვინდა",   correct: false},
          { text:  "დ) ნ ნზნუნი – ჩვენ წასვლა გვინდა ",     correct: true},
          { text:  "ე) ნ გვწდუნი – ჩვენ გვენატრება ",     correct: false},
             ]
          },
  // 4  
      {
          question: "ხირლდ ხეკვეს ესხვდდდ მეედს – მხიარულად უნდა დახვდე მომსვლელს, სტუმარს. ამ წინადადებაში რომელ ბრუნვაში დგას ობიექტი [მეედს]? ",
          answers: [
          { text:  "ა) სახელობითში ",   correct:  false},
          { text:  "ბ) მოთხრობითში ",   correct: false},
          { text:  " გ) ნათესაობითში ",   correct: false},
          { text:  "დ) მიცემითში  ",     correct: true},
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  