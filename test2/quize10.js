const questions = [
    {
      question: "1. .რომელ საუკუნეებს მოიცავს სვანეთის წერილობითი ძეგლები? ",
      answers: ["ა) V – XV საუკუნეებს", "ბ) XII – XVIII საუკუნეებს ", "გ) VII – XVII საუკუნეებს ", "დ) X – XVIII საუკუნეებს "],
      correctAnswers: [3], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
      question: "2. რომელ ბრუნვაში დგას სუბიექტი [მსძელდ] ამ წინადადებაში: მსძელდ სგა წსე მუშგვრლ ქორთე – სტუმრები სახლში შეიპატიჟა მასპინძელმა",
      answers: ["ა) სახელობითში", "ბ) მოთხრობითში", "გ) მიცემითში ", "დ) ვითარებითში "],
      correctAnswers: [1], // Mestia-Ushguli Trek is the correct answer
      allowMultiple: false,
    },
    {
      question: "3. ჩამოთვლილი ზმნებიდან რომელია ექსკლუზიური ფორმა?",
      answers: ["ა) ნ ლაშდბად – ჩვენ ვმუშაობთ ", "ბ) ნ ხვიჭვდნიდ – ჩვენ ვკითხულობთ", "გ) ნ ლიზელლდ – ჩვენ დავდივართ ", "დ) ნ გვალტ – ჩვენ გვიყვარს", "ე) ნ ლაგემდ – ჩვენ ვაშენებთ "],
      correctAnswers: [1], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "4. ზმნური პარადიგმებიდან რომელი წყვილი გამოხატავს მეორე პირს ?",
      answers: ["ა) ეჯა იღრლ – ნ ლიღრლდ ", "ბ) მი ხვიღრლ – ნ ხვიღრლდ ", "გ) სი ხიღრლ – სგ ხიღრლდ", "დ) ეჯა იღრლ – ეჯრ იღრლხ "],
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




  