const questions = [
    {
      question: "1. დიშის სახარება ქართული ოთხთავებიდან ყველაზე ძველი შატბერდში გადაწერილი თარიღიანი ხელნაწერია.  რომელ წელსა გადაწერილი ადიშის ოთხთავი?",
      answers: [" ა) 897 წელს. ", "ბ) 864 წელს. ", "გ) 936 წელს. ", " დ) 555 წელს. "],
      correctAnswers: [0], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
      question: "2. ზმნური პარადიგმებიდან რომელი წყვილი არ არის წარსული დროის ფორმა: ",
      answers: ["ა) ნ ხვიზგად – სი ხიზგს ", "ბ) ეჯა იზგა – ეჯრ იზგახ ", "გ) სი ხიზგს – სგ ხიზგად ", "დ) მი ხვიზგს – სგ ხიზგად ", "ე) ეჯა იზგე – ეჯრ იზგეხ"],
      correctAnswers: [4], // Mestia-Ushguli Trek is the correct answer
      allowMultiple: false,
    },
    {
      question: "3. ქართველური ენებია: ",
      answers: ["ა) ქართლი, სვანური, მეგრულ-ჭანური / ზანური", "ბ) ქართული, არამეული, იაფეტური ", "გ) იბერიულ-კავკასიური, ფინიკიური, სირიული ", "დ) ქართული, ინდოევროპული, სემიტური "],
      correctAnswers: [0], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "4. ზმნური პარადიგმის რომელი ფორმა გამხატავს მეორე პირს? ",
      answers: ["ა) მი მანწმნ – ეჯრს ხანწმნხ", "ბ) ეჯას ხანწმნ – ეჯრს ხანწმნხ", "გ) სი ჯანწმნ – სგ ჯანწმნხ", "დ) სი ჯანწმნ – ნ გვანწმნ  "],
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




  