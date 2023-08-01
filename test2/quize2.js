const questions = [
    {
      question: "1. რამდენი ხმოვანი გვაქვს სვანური ენის ბალსზემოურ დიალექტში?  ",
      answers: [" ა) 12 ხმოვანი", " ბ) 5 ხმოვანი", "  გ) 18 ხმოვანი ", "დ) 9 ხმოვანი "],
      correctAnswers: [2], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
      question: "2. რომელ საუკუნეში / როდის გვხვდება პირველი ისტორიული ცნობები სვანეთისა და სვანური ენის შესახებ? ",
      answers: ["ა) IX საუკუნეში ", "ბ) ანტიკურ პერიოდში ", " გ) V საუკუნეში ", "დ) II საუკუნეში"],
      correctAnswers: [2], // Mestia-Ushguli Trek is the correct answer
      allowMultiple: false,
    },
    {
      question: "3. ჩამოთვლილთაგან რომელი არ აღნიშნავს კვირის დღეს? ",
      answers: ["ა) დშდიშ ", "ბ) თახშ", "გ) საფტინ", "დ) მიშლადეღ", "ე) ნაგზი"],
      correctAnswers: [4], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "4. ჩამოთვლილი ფორმებიდან რომელი გამოხატავს „სწავლობს“ ზმნის მრავლობითი რიცხვის I პირს ? ",
      answers: ["ა) ხითვრიდ", "ბ) ლითვრიდ ", " გ) ითვრიხ ", "დ) ხვითვრიდ"],
      correctAnswers: [1, 2], // Mestia and Ushguli are both correct answers
      allowMultiple: true,
      distributePercentage: true, // Add a property to indicate equal distribution of percentage
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




  