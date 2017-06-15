function main() {
  $('.site_title').hide();
  $('.doors').hide();
  $('.site_title').fadeIn(2000);
  $('.doors').fadeIn(2000);
  $('.description_text').hide();

  var doorsReady = true;
  var winningDoor = generateWinningDoor();
  var guessedRight = 0;
  var attempts = 0;

  var firstAttempt = true;

  $('.doors').hover(function(){
    $(this).css("color", "#f5f5f5");
    }, function(){
    $(this).css('color', 'rgb(0, 0, 0)');
  });

  //if info button is clicked...
  $('.info').on('click', function() {
    $('.description_text').slideToggle(400);
  });

  //if reset button is clicked...
  $('.reset_button').on('click', function() {
    $('.doors').css('background-color', '#B6CAC0');

    doorsReady = true;
    firstAttempt = true;
    winningDoor = generateWinningDoor();
    $('.hint').text('Click on a door to find the price!');
  });

  //if reset count button is clicked
  $('.reset_count').on('click', function() {
    guessedRight = 0;
    attempts = 0;
    $('.probability').text(guessedRight + '/' + attempts);
  });

  //other behavior...
  $('.doors').on('click', function() {
    if (firstAttempt) {
      var doorChosen = $(this).attr('id');
      $(this).css('background-color', 'rgb(223, 188, 36)');
      firstAttempt = false;
      giveHint(winningDoor,doorChosen);
    } else {
      if (doorsReady && $(this).attr('id') === 'one') {
        attempts++;
        if (openDoor('one',winningDoor)) {
          guessedRight++;
          $('.probability').text(guessedRight + '/' + attempts + ' = ' + (guessedRight/attempts).toFixed(3));
          $(this).css('background-color', 'rgb(38, 116, 81)');
        } else {
          $('.probability').text(guessedRight + '/' + attempts + ' = ' + (guessedRight/attempts).toFixed(3));
          $(this).css('background-color', 'rgb(182, 39, 39)');
        }
        doorsReady = false;
      } else if (doorsReady && $(this).attr('id') === 'two') {
        attempts++;
        if (openDoor('two',winningDoor)) {
          guessedRight++;
          $('.probability').text(guessedRight + '/' + attempts + ' = ' + (guessedRight/attempts).toFixed(3));
          $(this).css('background-color', 'rgb(38, 116, 81)');
        } else {
          $('.probability').text(guessedRight + '/' + attempts + ' = ' + (guessedRight/attempts).toFixed(3));
          $(this).css('background-color', 'rgb(182, 39, 39)');
        }
        doorsReady = false;
      } else if (doorsReady && $(this).attr('id') === 'three') {
        attempts++;
        if (openDoor('three',winningDoor)) {
          guessedRight++;
          $('.probability').text(guessedRight + '/' + attempts + ' = ' + (guessedRight/attempts).toFixed(3));
          $(this).css('background-color', 'rgb(38, 116, 81)');
        } else {
          $('.probability').text(guessedRight + '/' + attempts + ' = ' + (guessedRight/attempts).toFixed(3));
          $(this).css('background-color', 'rgb(182, 39, 39)');
        }
        doorsReady = false;
      }
    }

  });
}

function generateWinningDoor() {
  var index =  Math.floor(Math.random() * 3) + 1;
  return index;
}

function openDoor(id, winningDoor) {
  if (winningDoor === 1 && id === 'one') {
    return true;
  } else if (winningDoor === 2 && id === 'two') {
    return true;
  } else if (winningDoor === 3 && id === 'three') {
    return true;
  }
  return false;
}

function giveHint(winningDoor,doorChosen) {
  var wrongDoor = Math.floor(Math.random() * 3) + 1;

  while(wrongDoor === winningDoor || (wrongDoor === 1 && doorChosen === 'one') || (wrongDoor === 2 && doorChosen === 'two') || (wrongDoor === 3 && doorChosen === 'three')) {
    wrongDoor = Math.floor(Math.random() * 3) + 1;
  }
  var theText = '\nMonty Hall says: Behind door number ' + wrongDoor + ' there is a GOAT... Do you want to switch doors? Decide!';
  $('.hint').text(theText);

}

$(document).ready(main);
