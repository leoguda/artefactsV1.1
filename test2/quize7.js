const questions = [
    {
      question: "1. .სვანური ენის ლექსიკონების ავტორები არიან:  ",
      answers: ["ა) გიულდენშტედტი; თ. გამყრელიძე; გ. მაჭავარიანი; ეკ. ოსიძე", "ბ) ა. არაბული, ი. ჩანტლაძე; ნ. ჩართოლანი; მ.საღლიანი ", "გ) ბ. ნიჟარაძე; ვ.თოფურია; მ. ქალდანი; მ. უორდროპი კ. დონდუა; ა. ლიპარტელიანი, ჩ. გუჯეჯიანი, ლ. პალმაიტისი", "დ) ივ. მარგიანი; ა. ონიანი; ნიკო მარი; გ. დეეტერსი "],
      correctAnswers: [2], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
      question: "2. რამდენი ბრუნვა აქვს სვანურს?",
      answers: ["ა) თორმეტი ", "ბ) შვიდი ", "გ) ცხრა", "დ) ექვსი "],
      correctAnswers: [2], // Mestia-Ushguli Trek is the correct answer
      allowMultiple: false,
    },
    {
      question: "3. რიცხვითი სახელების რომელი თანმიმდევრობაა სწორი:",
      answers: ["ა) ჩხარა; ეშდ; ორი; ოხვიშდ; სმი; არა; ეშხუ; ოშთხვ; უსგვა; იშგვიდ. ", "ბ) ოშთხვ; უსგვა; იშგვიდ; ჩხარა; ეშდ; ორი; ორი; ოხვიშდ.", "გ) ეშხუ; ორი; სმი; ოშთხვ; ოხვიშდ; უსგვა; იშგვიდ; არა; ჩხარა; ეშდ. ", "დ) ოხვიშდ; სმი; არა; ეშხუ; ჩხარა; ეშდ; ორი; იშგვიდ; უსგვა"],
      correctAnswers: [2], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "4. ჩამოთვლილთაგან რომელია კითხვითი ფორმა? ",
      answers: ["ა) ხიჭვდნიმა", "ბ) ლხჭოდნ  ", " გ) ლჭოდნას", "დ) ლმჭოდნინხვი "],
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




  