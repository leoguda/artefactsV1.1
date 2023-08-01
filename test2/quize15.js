const questions = [
    {
      question: "1. ჩამოთვლილი წინადადებებიდან რომელია აზრობრივად არასწორი?  ",
      answers: ["ა) სი ესღრი ქორ-თე – შენ მიდიხარ სახლ-ში", "ბ) სი ხრი ქორ-ს – შენს ხარ სახლ-ში. ", "გ) ჯაბექ აჩდ შვნ-თე – ჯაბექი წავიდა სვანეთში. ", "დ) ჯაბექ რი შვნ-თე – ჯაბექი არის სვანეთში. ", "ე) ჯაბექ რი შვნ-ს – ჯაბექი არის სვანეთში. "],
      correctAnswers: [3], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
      question: "2.  ხოჩა ლიღრლ ხოხახ ლატლრს – კარგი სიმღერა იციან ლატალელებმა. რომელ ბრუნვაში დგას სუბიექტი ამ წინადადებაში? ",
      answers: [" ა) სახელობითში ", "ბ) მოთხრობითში", "გ) ნათესაობითში", "დ) მიცემითში"],
      correctAnswers: [3], // Mestia-Ushguli Trek is the correct answer
      allowMultiple: false,
    },
    {
      question: "3. ლთ, ისგლადეღქა, ლეჰნრუს, ზავდ, ლდი, ეჩე, ამე, ჟბ – რომელი მეტყველების ნაწილია ჩამოთვლილი სიტყვები? ",
      answers: ["ა) ზედსართავი სახელი", "ბ) რიცხვითი სახელი", "გ) ზმნიზედა ", "დ) არსებითი სახელი"],
      correctAnswers: [2], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "4.ზმნური პარადიგმებიდან რომელი ფორმა არ გამოხატავს წარსულ დროს? ",
      answers: ["ა) მი ხვიღრლდს – ნ ლიღრლდად", " ბ) სგ ხიღრლდად – სი ხიღრლდს ", "გ) მი ხვიღრლ – ნ ლიღრლდ", "დ) ეჯა იღრლდა – ეჯრ იღრლდახ "],
      correctAnswers: [2], // Koshki is the correct answer
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




  