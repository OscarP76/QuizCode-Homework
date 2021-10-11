// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts 

var timeleft = 20;
var i = 0;
var playerScore = {
  numCorrect: 0,
  numMistakes: 0,
}
var question = document.getElementById('question1')
var answer1 = document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
var initials = document.getElementById('initials-box')

var clockStart


// and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question

var quizQuestions = [
  {
    question: 'What is 10/2?',
    answers: [
      '3',
      '5',
      '115'
    ],
    correctAnswer: '5'
  },
  {
    question: 'What is 30/3?',
    answers: [
      '3',
      '5',
      '10'
    ],
    correctAnswer: '10'
  },
  {
    question: 'What is 12/4?',
    answers: [
      '1',
      '2',
      '3'
    ],
    correctAnswer: '3'
  },
];

function setQuestion() {
  question.innerHTML = quizQuestions[i].question;
  answer1.innerHTML = quizQuestions[i].answers[0];
  answer2.innerHTML = quizQuestions[i].answers[1];
  answer3.innerHTML = quizQuestions[i].answers[2];
}

function gameOver() {
  clearInterval(clockStart);
  question.innerHTML = 'Thanks for playing, you got ' + playerScore.numCorrect + ' answers correct! ' +
    'you made ' + playerScore.numMistakes + ' mistakes.';
  answer1.innerHTML = '';
  answer2.innerHTML = '';
  answer3.innerHTML = '';
}

function checkAnswer() {
  // wrong answer
  if (this.innerHTML !== quizQuestions[i].correctAnswer) {
    playerScore.numMistakes++;
    timeleft -= 5
    // right answer
  } else if (quizQuestions[i + 1] !== undefined) {
    playerScore.numCorrect++;
    i++;
    setQuestion();
  } else {
    playerScore.numCorrect++;
    gameOver();
  }
}

answer1.onclick = checkAnswer;
answer2.onclick = checkAnswer;
answer3.onclick = checkAnswer;


setQuestion(i);


// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

document.getElementById('start-button').addEventListener('click', function () {
  clockStart = setInterval(function function1() {
    document.getElementById('countdown').innerHTML = timeleft + '' + ' seconds remaining';

    timeleft -= 1;
    if (timeleft <= -1) {
      clearInterval(clockStart);
      document.getElementById('countdown').innerHTML = "Time's up!"
      initials.removeAttribute('class');
    }
  }, 1000);
});


// WHEN the game is over
// THEN I can save my initials and my score

var button = document.getElementById('save')
var highScoreButton = document.getElementById('highscores')


button.addEventListener('click', function () {
  localStorage.setItem(document.getElementById('initials').value, playerScore.numCorrect)
})

showHighScore.addEventListener('click', function () {
  for (var key in localStorage) {
    if (typeof localStorage[key] === 'string') {
      var pEl = document.createElement('p')
      pEl.innerHTML = 'Name: ' + key + ' Score:' + localStorage[key]

      document.getElementById('highscores').appendChild(pEl)
    }
  }
});





















