
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "What is Darcy-Weisbach formula for heat loss due to friction? Where, f = Darcy's coefficient of friction",
      answers: {
        a: "hf = (f l V2) / (g d)",
        b: "hf = (f l V2) / (2 g d)",
        c: "hf = (16 f l V2) / (2 g d)",
        d: "hf = (4 f l V2) / (2 g d)"
      },
      correctAnswer: "d"
    },

    {
      question: "Minor losses do not make any serious effect in",
      answers: {
        a: "Long pipes",
        b: "Short pipes",
        c: "Both the short as well as long pipes",
        d: "Cannot say"
      },
      correctAnswer: "a"
    },

    {
      question: "What is the effect of change in Reynold's number on friction factor in turbulent flow?",
      answers: {
        a: "As the Reynold's number increases the friction factor increases in turbulent flow",
        b: "Change in Reynold's number does not affect the friction factor in turbulent flow",
        c: "As the Reynold's number increases the friction factor decreases in turbulent flow",
        d: "Unpredictable"
      },
      correctAnswer: "c"
    },
    {
      question: "The friction factor in fluid flowing through pipe depends upon",
      answers: {
        a: "Reynold's number",
        b: "Relative roughness of pipe surface",
        c: "Both a and b",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "The head loss through fluid flowing pipe due to friction is",
      answers: {
        a: "The minor loss",
        b: "The major loss",
        c: "Both a and b",
        d: "None of these"
      },
      correctAnswer: "b"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
