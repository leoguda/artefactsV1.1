const questions = [
    {
      question: "1. ვის ეკუთვნის სვანური ლექსიკის პირველი სამეცნიერო ჩანაწერები? ",
      answers: ["ა) გიულდენშტედტს", "ბ) ნიკო მარს ", "გ) მარი ბროსეს", "დ) გერჰარდ დეეტერსს"],
      correctAnswers: [0], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
        question: "2. პარადიგმის რომელი წყვილი გამოხატავს „ცხოვრობს“ ზმნის მესამე პირს?",
        answers: ["ა) ხვიზგე – ხვიზგედ", "ბ) იზგე – ხვიზგედ", "გ) ხიზგედ – ხიზგე", "დ) იზგე – იზგეხ "],
        correctAnswers: [3], // Shkhara is the correct answer
        allowMultiple: false,
      },
      {
        question: "3. რამდენი ხმოვანი გვაქვს სვანური ენის ბალსქვემოურ დიალექტში? ",
        answers: ["ა) 7 ხმოვანი ", "ბ) 9 ხმოვანი ", "გ) 12 ხმოვანი ", "დ) 18 ხმოვანი "],
        correctAnswers: [1], // Shkhara is the correct answer
        allowMultiple: false,
      },
      {
        question: "4. ჩამოთვლილ ფორმათაგან რომელი გამოხატავს მომავალ დროს:",
        answers: ["ა) მი მირი – სი ჯარდნა ", "ბ) ეჩას ხორდა – სი ჯირი", "გ) სი ჯერდი – მი მერდი ", "დ) სი ჯირი – ეჩას ხარდნა "],
        correctAnswers: [2], // Shkhara is the correct answer
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




  