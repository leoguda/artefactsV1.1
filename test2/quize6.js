const questions = [
    {
      question: "1.სვანური ენის საუნივერსიტეტო სახელმძღვანელოების ავტორები არიან",
      answers: ["ა) ალ. ონიანი; ვ. თოფურია; ზ. ჭუმბურიძე; ლ. ნიჟარაძე; რ. ქურდაძე ", "ბ) ა.შანიძე; ბ. ნიჟარაძე; ნიკო მარი; ივ. მარგიანი; ა. ლიპარტელიანი ", "გ) გ. მაჭავარიანი; რ.იოსელიანი; ი.ჩანტლაძე; ნ.აბესაძე; მ.სუხიშვილი"],
      correctAnswers: [0], // Shkhara is the correct answer
      allowMultiple: false,
    },
     {
      question: "2. რამდენი ხმოვანი გვაქვს სვანური ენის ლენტეხურ დიალექტში? ",
      answers: ["ა) 12 ხმოვანი ", "ბ) 9 ხმოვანი ", "გ) 6 ხმოვანი", "დ) 5 ხმოვანი"],
      correctAnswers: [1], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
        question: "3. ჩამოთვლილთაგან რომელია ზედსართავ სახელთა აღმატებითი ხარისხის ფორმა?",
        answers: ["ა) წრნი, მეშხე, ტებდი, თვეთნე", "ბ) ხოწრანა, ხოთთვენა, ხორჟა, ხომშხა", "გ) რჟი, ხოთთვენა, მეშხე, მთთვენე,", "დ) მთთვენე, მმშხე, მტბიდე, მაწრანე "],
        correctAnswers: [3], // Shkhara is the correct answer
        allowMultiple: false,
      },
      {
        question: "4. ზმნური პარადიგმის რომელი წყვილი გამოხატავს პირველ პირს? ",
        answers: ["ა) მი მალტ – სგ ჯალტხ ", "ბ) ეჯას ხალტ – სი ჯალტ ", "გ) ეჯრს ხალტხ – ნ ნალტ", "დ) მი მალტ –ნ გვალტ – ნ ნალტ "],
        correctAnswers: [3], // Shkhara is the correct answer
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




  