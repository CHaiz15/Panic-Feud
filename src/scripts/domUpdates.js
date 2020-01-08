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

export const populateSurveyAndAnswers = (survey) => {
  $('.survey').html(`
  <h2 class="survey-question">${survey.question}</h2>
    <div class="survey-answer-wrapper">
      <div class="survey-answer answer1">
        <h3>${survey.answers[0].answer}</h3>
        <p>${survey.answers[0].respondents}</p>
      </div>
      <div class="survey-answer answer2">
        <h3>${survey.answers[1].answer}</h3>
        <p>${survey.answers[1].respondents}</p>
      </div>
      <div class="survey-answer answer3">
        <h3>${survey.answers[2].answer}</h3>
        <p>${survey.answers[2].respondents}</p>
      </div>
    </div>
  `)
}

export const populatePlayerInformation = (player, num) => {
  $(`.player${num}-name`).text(`${player.name}`);
}

$('.multiplier').on('change', function() {
  $('#multi-value').text($('.multiplier').val() + 'x');
})