# QuizCode-Homework
File for my week 4 homework assignment
## Languages used
HTML, CSS, and JavaScript
## Summary
I created a Javascript code quiz: <br>
That cycles through an object array of questions and answers that are compared with the users input. <br>
That stores the correct answers along with the users initials
I only added 3 questions so far, will add more later. Just wanted to get everything working and turned in.
## Preview of the site
![image](https://github.com/OscarP76/QuizCode-Homework/blob/main/code-quiz-snip.PNG)
)
## Code Snippet (JavaScript Code)
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
