const questions = [
    {
      question: "1.ჩამოთვლილთაგან რომელი არ არის რთული სიტყვა ანუ კოპმოზიტი?  ",
      answers: ["ა) ლიმზირ-ლიჴრლ – ლოცვა-ვედრება ", "ბ) კინჩხიქვცა – შერცხვენა ", "გ) ქვინისდა – გადარჩენა ", "დ) ბოლკდა – ამოწყვეტა ", "ე) ჯიმ ი დირ – პურ-მარილი ", "ვ) ლილხვრი – მთაში ცხოვრება"],
      correctAnswers: [5], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
      question: "2.ლაქთალრ, ლახმრ, ლაბტრ, ლადრ, ლაჩაიჟრ, ლაღუნვრ – ჩამოთვლილ სახელებში ლა- თავსართი აღნიშნავს: ",
      answers: ["ა) კუთვნილებას ", "ბ) დანიშნულებას ", "გ) უქონლობას", "დ) კნინობითობას"],
      correctAnswers: [1], // Mestia-Ushguli Trek is the correct answer
      allowMultiple: false,
    },
    {
      question: "3. ჰდშს ათხე იზგე ჩხარა მეზგე – ჰადიშში ახლა ცხოვრობს ცხრა კომლი / ცხრა ოჯახი. ამ წინადადებაში რომელ ბრუნვაში დგას ადგილის გარემოება?",
      answers: ["ა) სახელობითში ", "ბ) ნათესაობითში", "გ) ვითარებითში", "დ) მიცემითში  "],
      correctAnswers: [3], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "4.მალატ ი მსისგ ჟი ესერ დს მოშ ხოწნა. ეს სვანური ანდაზა ქართულად ნიშნავს: ",
      answers: ["ა) კარგი სტუმრის მოსვლა კერასაც უხარიაო.  ", "ბ) სიყვარული და სიძულვილი ვერავის აუწონიაო", "გ) უუფროსო სახლში ყველა უფროსია. ", "დ) სიყვარული ნემსის ყუნწში გამძვრენიაო. "],
      correctAnswers: [1], // Koshki is the correct answer
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




  