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
  question.innerHTML = 'Thanks for playing, you got ' + playerScore.numCorrect + ' answers correct! ' +
  'you made ' + playerScore.numMistakes + ' mistakes.';
  answer1.innerHTML = '';
  answer2.innerHTML = '';
  answer3.innerHTML = '';
}

function checkAnswer() {
  // console.log(this.innerHTML);
  // console.log(quizQuestions[0].correctAnswer);
  // wrong answer
  console.log(i);
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

// var choice = document.createElement('button')

// choice.innerHTML = quizQuestions[0].answers[0]

// document.getElementById('quiz-container').appendChild(choice)


// console.log('Question!! choices', quizQuestions[0].answers)






// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

document.getElementById('start-button').addEventListener('click', function(){
  var clockStart = setInterval(function function1(){
    document.getElementById('countdown').innerHTML = timeleft + '' + ' seconds remaining';
    
    timeleft -= 1;
    if (timeleft <= -1) {
      clearInterval(clockStart);
      document.getElementById('countdown').innerHTML = "Time's up!"
      initials.removeAttribute('class');
    } else if (i == 2) {
      console.log(i);
      clearInterval(clockStart);
      document.getElementById('countdown').innerHTML = 'All questions answered!'
      initials.removeAttribute('class');
    }
  }, 1000);
});



// function (){
  //   console.log(quizQuestions[0].question)
  //   console.log(countdown);
  // }


// WHEN the game is over
// THEN I can save my initials and my score

























