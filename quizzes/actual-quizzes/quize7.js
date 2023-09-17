const questions = [
  // 1 
  {
  question: ".სვანური ენის ლექსიკონების ავტორები არიან",
  answers: [
  { text:  "ა) გიულდენშტედტი; თ. გამყრელიძე; გ. მაჭავარიანი; ეკ. ოსიძე",   correct:  false},
  { text:  "ბ) ა. არაბული, ი. ჩანტლაძე; ნ. ჩართოლანი; მ.საღლიანი",   correct: false},
  { text:  "გ) ბ. ნიჟარაძე; ვ.თოფურია; მ. ქალდანი; მ. უორდროპი კ. დონდუა; ა. ლიპარტელიანი, ჩ. გუჯეჯიანი, ლ. პალმაიტისი ",   correct: true},
  { text:  "დ) ივ. მარგიანი; ა. ონიანი; ნიკო მარი; გ. დეეტერსი",   correct: false},
        ]
  },

  // 2 
  {
      question: "რამდენი ბრუნვა აქვს სვანურს? ",
      answers: [
      { text:  "ა) თორმეტი",   correct: false},
      { text:  "ბ) შვიდი",   correct: false},
      { text:  "გ) ცხრა",   correct: false},
      { text:  "დ) ექვსი",     correct: true},
            ]
      },

      // 3 
      {
          question: "რიცხვითი სახელების რომელი თანმიმდევრობაა სწორი:",
          answers: [
          { text:  "ა) ჩხარა; ეშდ; ორი; ოხვიშდ; სმი; არა; ეშხუ; ოშთხვ; უსგვა; იშგვიდ. ",   correct: false},
          { text:  "ბ) ოშთხვ; უსგვა; იშგვიდ; ჩხარა; ეშდ; ორი; ორი; ოხვიშდ.",   correct: false},
          { text:  "გ) ეშხუ; ორი; სმი; ოშთხვ; ოხვიშდ; უსგვა; იშგვიდ; არა; ჩხარა; ეშდ. ",   correct: true},
          { text:  "დ) ოხვიშდ; სმი; არა; ეშხუ; ჩხარა; ეშდ; ორი; იშგვიდ; უსგვა.",     correct: false},
             ]
          },
  // 4  
      {
          question: "ჩამოთვლილთაგან რომელია კითხვითი ფორმა? ",
          answers: [
          { text:  "ა) ხიჭვდნიმა",   correct:  true},
          { text:  "ბ) ლხჭოდნ ",   correct: false},
          { text:  "გ) ლჭოდნას",   correct: false},
          { text:  "დ) ლმჭოდნინხვი ",     correct: false},
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