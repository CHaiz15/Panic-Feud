import $ from 'jquery';



$('.prepare-self').click(function() {
  $('.main-menu').fadeOut(500);
  $('.instructions')
    .delay(500)
    .css("display", "flex")
    .hide()
    .fadeIn(500);
  });

$('.lets-begin').click(function() {
  $('.instructions').fadeOut(500);
  $('.game-screen')
    .delay(500)
    .css("display", "grid")
    .hide()
    .fadeIn(500);
});

export const populateSurveyAndAnswers = (round) => {
  console.log(round);
  $('.survey').html(`
  <h2 class="survey-question">${round.survey.question}</h2>
    <div class="survey-answer-wrapper">
      <div class="survey-answer answer1">
        <h3>${round.answers[0].answer}</h3>
        <p>${round.answers[0].respondents}</p>
      </div>
      <div class="survey-answer answer2">
        <h3>${round.answers[1].answer}</h3>
        <p>${round.answers[1].respondents}</p>
      </div>
      <div class="survey-answer answer3">
        <h3>${round.answers[2].answer}</h3>
        <p>${round.answers[2].respondents}</p>
      </div>
    </div>
  `)
}

export const populatePlayerInformation = (player, num) => {
  $(`.player${num}-screen`).html(`
    <h3>${player.name}</h3>
    <p>Total Score: 0</p>
    <p>Round Score: 0</p>
    <form>
      <input class="player${num}-answer-input" type="text">
      <button class="submit-answer">Submit Answer</button>
    </form>
    <div class="player${num}-multiplier multiplier">Multiplier Selector</div>
    <p>Incorrect guesses:</p>
    <div class="player${num}-wrong-guesses wrong-guesses">
    </div>
  `)
}

