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

$('.multiplier').on('change', function() {
  $('#multi-value').text($('.multiplier').val() + 'x');
})

export const populateSurveyAndAnswers = (survey) => {
  $('.survey').css('display', 'flex').html(`
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

export const clearInput = (playerNum) => {
  $(`.player${playerNum}-answer-input`).val('');
}

export const disableAnswerInput = (playerNum) => {
  $(`.player${playerNum}-answer-input`).prop('disabled', true);
  $(`.player${playerNum}-submit-answer`).prop('disabled', true);
  $(`.player${playerNum}-screen`).removeClass('player-glow');
  $(`.player${playerNum}-screen`).addClass('inactive-player');
}

export const enableAnswerInput = (playerNum) => {
  $(`.player${playerNum}-answer-input`).prop('disabled', false);
  $(`.p${playerNum}-submit-answer`).prop('disabled', false);
  $(`.player${playerNum}-screen`).addClass('player-glow');
  $(`.player${playerNum}-screen`).removeClass('inactive-player');
}

export const updatePlayerTotalScore = (playerNum, score) => {
  $(`.player${playerNum}-total-score`).text(`${score}`);
}

export const updatePlayerRoundScore = (playerNum, score) => {
  $(`.player${playerNum}-round-score`).text(`${score}`);
}

export const endOfRound = () => {
  $('.end-round-wrap').css('display', 'flex');
  $('.survey').css('display','none').html('');
}

export const showPanicRoundScreen = () => {
  $('.game-screen').css('display', 'none');
  $('.panic-round').css('display', 'flex');
}

export const populatePanicPlayerInfo = (player) => {
  $(`.panic-player-info`).html(`
    <h3>${player.name}</h3>
    <p>Total Score: ${player.totalPoints}</p>
  `);
}