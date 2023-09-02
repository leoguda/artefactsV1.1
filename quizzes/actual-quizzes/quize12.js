const questions = [
  // 1 
  {
  question: "რას სწავლობს ონომასტიკა? ",
  answers: [
  { text:  "ა) გვარ-სახელთა სისტემას; ",   correct:  false},
  { text:  " ბ) ტოპონიმიას – გეოგრაფიულ სახელებს;",   correct: false},
  { text:  " გ) თეონიმიას – ღმერთების, წმინდანების, ღვთაებების სახელებს; ",   correct: false},
  { text:  " დ) ყველა პასუხი სწორია",   correct: true},
        ]
  },

  // 2 
  {
      question: "რომელ ბრუნვაშია ადგილის გარემოება [მესტია] შემდეგ წინადადებებში? სი ხიზგე მესტიას – შენ ცხოვრობ მესტიაში. ეჯა იშვმნე მესტიას – ის ისვენებს მესტიაში. ",
      answers: [
      { text:  "ა) სახელობითში ",   correct: false},
      { text:  "ბ) ვითარებითში ",   correct: false},
      { text:  "გ) მოქმედებითში ",   correct: false},
      { text:  "დ) მიცემითში",     correct: true},
            ]
      },

      // 3 
      {
          question: "ჩამოთვლილ ზედსართავ სახელთაგან რომელია ანტონიმები?  ",
          answers: [
          { text:  "ა) მუჭხვი – მხიმ, ხოჩა – ხოლა, ჯდი – მეკვშდე, ტებდი – მცხი",   correct: true},
          { text:  "ბ) მუჭხვი, ტებდი, მცხი, მურგვლ, ტფხელ, ტაფშუ, მეგჭე ",   correct: false},
          { text:  "გ) ტებდი – მცხი, ტფხელ, ტაფშუ, მეგჭე, მურგვლ ",   correct: false},
          { text:  "დ) ტებდი, მცხი, მურგვლ, ტფხელ, ტაფშუ, მეგჭე  ",     correct: false},
             ]
          },
  // 4  
      {
          question: "ჩამოთვლილი ზმნური პარადიგმებიდან რომელია „ვლოცულობთ“ ზმნის ინკლუზიური ფორმა? ",
          answers: [
          { text:  "ა) მი ხვიმზირ – ეჯრ იმზირხ ",   correct:  false},
          { text:  "ბ) ნ ხვიმზირდ – სგ ხიმზირდ  ",   correct: false},
          { text:  "გ) ეჯრ იმზირხ – ეჯა იმზირ  ",   correct: false},
          { text:  "დ) მი ხვიმზირ – ნ ლიმზირდ",     correct: true},
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  