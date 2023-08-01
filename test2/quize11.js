const questions = [
    {
      question: "1. რომელი საუკუნის ძეგლია „მატიანე სუანეთისა კრებისა“?",
      answers: ["ა) XIII საუკუნის ", "ბ) VIII საუკუნის", "გ) X საუკუნის ", "დ) VII საუკუნის "],
      correctAnswers: [0], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
      question: "2. ჩამოთვლილ ფორმათაგან რომელი გამოხატავს ზედსართავი სახელების უფროობით ხარისხს: ",
      answers: ["ა) კლთხი, ჯდი, მაშრი, ნახვწი, მახე, ნეცინ", "ბ) ხოკლათხა, ხონხუწა, ხომხა, ხონცინა, ხომშარა, ხოჯვდა", "გ) ჯვინელ, მეგრე, მნშგვე, მუჭხვი, კადრ, მჟირ", "დ) მხიმ, ბგი, სგელ, დთხელ, ზსყი, მეჩი, ფრი "],
      correctAnswers: [1], // Mestia-Ushguli Trek is the correct answer
      allowMultiple: false,
    },
    {
      question: "3.  რომელ ბრუნვაში დგას ქვემდებარე [ლეჭშრიდ] წინადადებაში: ლექურწილ კაბ წვილს ლეჭშრიდ ხეკვეს ოხყიდას – საქორწილო კაბა პატარძალს უნდა უყიდოს საქმრომ. ",
      answers: ["ა) მოქმედებითში ", "ბ) ვითარებითში ", "გ) მოთხრობითში ", "დ) სახელობითში"],
      correctAnswers: [2], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "4. რას გამოხატავს -მა ნაწილაკი ამ წინადადებაში?  გეზლრ ჯინრიხ-მა ლაშდაბთე ი ჯიმურჯიხ-მა?  ?",
      answers: ["ა) სიბრალულს ", "ბ) თანაგრძნობას", "გ) ერთადობას, თანაობას", "დ) კითხვითობას"],
      correctAnswers: [3], // Koshki is the correct answer
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




  