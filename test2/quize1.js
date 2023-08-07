const questions = [
    {
      question: "1.   რას შეისწავლის ქართველოლოგია?  მინიშნება: ქართველოლოგია არის ქართველებისა და საქართველოს შემსწავლელი ყველა ჰუმანიტარული სამეცნიერო დისციპლინა. ",
      answers: ["ა) ქართულ ენას ", "ბ) ქართულ კულტურას ", "  გ) საქართველოს ეთნოლოგიას ", "დ) ყველა პასუხი სწორია"],
      correctAnswers: [3], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
      question: "2.	ვის ეკუთვნის ტერმინი „ქართველური ენები“? ",
      answers: ["ა) ჰუგო შუხარტს", "ბ) აკაკი შანიძეს", "გ) გერჰარდ დეეტერსს", "დ) არნოლდ ჩიქობავას"],
      correctAnswers: [0], // Mestia-Ushguli Trek is the correct answer
      allowMultiple: false,
    },
    {
      question: "3. ჩამოთვლილთაგან რომელია მესამე პირის ნაცვალსახელები:",
      answers: ["ა) სგ – ეჯა", "ბ) მი – ნ", "გ) ნ – ეჯრ ", "დ) ეჯა – ეჯრ "],
      correctAnswers: [3], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "4.  ჩამოთვლილთაგან რომელია სვანური ენის დიალექტები?",
      answers: [" ა) უშგულური", "ბ) ბალსზემოური ", "გ) ლატალური ", "დ) ლაშხური ", "ე) მხოლოდ ა) და დ)", "ვ) მხოლოდ ბ) და დ)", "ზ) ყველა პასუხი სწორია "],
      correctAnswers: [6], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
        question: "5.	ჩამოთვლილთაგან რომელი შეიძლება გამოვიყენოთ მისალმების ფორმად",
        answers: ["ა) ხოჩა ლადეღ! ", "ბ) ივასუ ხრი! ", " გ) იმჟი ხრი! ", "დ) ღრბეთუ ლაჯშედა! "],
        correctAnswers: [0], // Koshki is the correct answer
        allowMultiple: false,
      }
    
  ];
  

  let currentQuestionIndex = 0;
  let score = 0;
  let isSubmitted = false;
  
  function showQuestion() {
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML = ""; // Clear existing content
  
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question");
    questionContainer.innerHTML = `<p>${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}</p>`;
  
    const answersContainer = document.createElement("div");
    answersContainer.classList.add("answers");
  
    questions[currentQuestionIndex].answers.forEach((answer, i) => {
      const answerElement = document.createElement("div");
      answerElement.classList.add("answer");
      const input = document.createElement("input");
      input.setAttribute("type", questions[currentQuestionIndex].allowMultiple ? "checkbox" : "radio");
      input.setAttribute("name", `q${currentQuestionIndex}`);
      input.setAttribute("value", i);
      answerElement.appendChild(input);
      answerElement.appendChild(document.createTextNode(answer));
      answersContainer.appendChild(answerElement);
    });
  
    questionContainer.appendChild(answersContainer);
  
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled = true;
  
    answersContainer.addEventListener("change", () => {
      nextButton.disabled = false;
    });
  
    nextButton.addEventListener("click", nextQuestion);
  
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  
    quizElement.appendChild(questionContainer);
    quizElement.appendChild(nextButton);
  }
  
  
  function nextQuestion() {
    const answerElements = document.querySelectorAll(`input[name=q${currentQuestionIndex}]:checked`);
    const question = questions[currentQuestionIndex];
    let questionScore = 1;
  
    answerElements.forEach((answerElement) => {
      const selectedAnswer = parseInt(answerElement.value);
  
      if (question.correctAnswers.includes(selectedAnswer)) {
        if (question.correctAnswers.length === 1) {
          questionScore = 0.8; // Both correct answers selected, full credit
        } else {
          questionScore = 0; // Only one correct answer selected, half credit
        }
      }
    });
  
    score += questionScore;
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex === questions.length) {
      showResults();
    } else {
      showQuestion();
    }
  }
  


  function showResults() {
    isSubmitted = true;
    const quizElement = document.getElementById("quiz");
    quizElement.style.display = "none";
  
    const resultsElement = document.getElementById("results");
    resultsElement.innerHTML = `<p>Your final score is: ${calculatePercentage(score, questions.length)}%</p>`;

  function calculatePercentage(score, total) {
        const percentage = (score / total) * 100;
        return Math.min(100, percentage).toFixed(2);
      }
  }

 
  document.addEventListener("DOMContentLoaded", showQuestion);




  