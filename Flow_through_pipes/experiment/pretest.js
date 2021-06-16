
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
      question: "For hydraulically smooth pipe, the resistance to flow depends only on the?",
      answers: {
        a: "Absolute roughness",
        b: "Flow Reynolds number",
        c: "Reynolds number and relative roughness",
        d: "Relative roughness"
      },
      correctAnswer: "c"
    },

    {
      question: "Two identical pressure gauges at the foot of two storage tanks that are at the same elevation, the water levels in the tanks are the same, one tank holds 1,00,000 litre (tank 1), the other holds 1000 litre (tank 2). Say which one is true?",
      answers: {
        a: "Pressure gauge reading of tank 1 and that of tank 2 are same",
        b: "Pressure gauge reading of tank 2 is greater than that of tank 1",
        c: "Pressure gauge reading of tank 1 is greater than that of tank 2",
      },
      correctAnswer: "a"
    },

    {
      question: "Applying a pressure drop across a capillary results in a volumetric flow rate Q under laminar flow conditions. The flow rate, for the same pressure drop, in a capillary of the same length but half the radius is.",
      answers: {
        a: "Q/16",
        b: "Q/8",
        b: "Q/4",
        b: "Q/2"
      },
      correctAnswer: "b"
    },
    {
        question: "Under otherwise uniform conditions Fanning friction factor for a rough pipe is?",
        answers: {
          a: "Equal to that for a smooth pipe",
          b: "Smaller than that for a smooth pipe",
          c: "Smaller than that for a smooth pipe",
        },
        correctAnswer: "c"
      },
    { 
        question: "For laminar flow in a pipe, the Fanning friction factor depends on Reynolds number according to the relation? ",
    answers: {
          a: "None",
          b: "f = 16/ Re",
          b: "f = 18.5/ Re",
          b: "f = 24/ Re"
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
