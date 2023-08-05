const questions = [
    {
      question: "1.  სვანური ენის დიალექტებია: ",
      answers: ["ა) ბალსზემოური, უშგულური, ლატალური, ლაშხური ", "ბ) ბალსზემოური, ბალსქვემოური, ლენტეხური, ლაშხური", "გ) ბალსქვემოური, ლენტეხური, ცხუმარული, ჩოლურული", "დ) ლაშხური, ლახამულური, ბალსზემოური, ცხუმარული"],
      correctAnswers: [1], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
      question: "2. ჩამოთვლილთაგან რომელი აღნიშნავს წელიწადის დროს:",
      answers: ["ა) ლიმრიე ", "ბ) ლუფხვ", "გ) გვირკ", "დ) ლალხორშ", "ე) მუჟღვერ "],
      correctAnswers: [1, 4], // Mestia and Ushguli are both correct answers
      allowMultiple: true,
      distributePercentage: true, // Add a property to indicate equal distribution of percentage
    },
    {
        question: "3. რომელია მცდარი ფორმა: ",
        answers: ["ა) სი ხი შვნს. ", "ბ) სი ხრი სტუდენტ.", "გ) სი ხრი შვნს", "დ) სი ხი სტუდენტ. "],
        correctAnswers: [0, 1], // Mestia and Ushguli are both correct answers
        allowMultiple: true,
        distributePercentage: true, // Add a property to indicate equal distribution of percentage
      },
      {
        question: "4. ჩამოთვლილ სახელთაგან რომელი არ აღნიშნავს სვანურში თვეს? ",
        answers: ["ა) ზავლადეღ ", "ბ) ქვხ ", "გ) გვირკ ", "დ) შშშობ / ლალხორშ ", "ე) აპრილ"],
        correctAnswers: [0], // Shkhara is the correct answer
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




  