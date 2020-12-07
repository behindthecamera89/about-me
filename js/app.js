'use strict';

var userName = prompt('What is your Name?');
alert(userName + ', Welcome to my site!');
var anwserdCorrectly = 0;

function questionOne() {
  var nameStartLetter = prompt('Does your name start with the letter A?').toLowerCase();
  if (nameStartLetter === 'yes' || nameStartLetter === 'y') {
    anwserdCorrectly++;
    alert(nameStartLetter + ', ' + 'your name starts with the letter A, just like mine!');
  }
  else {
    alert('Looks like we dont have this in common!' );
  }
}
questionOne();

function questionTwo() {
  var older30 = prompt('Are you older then 30?').toLowerCase();
  if (older30 === 'yes' || older30 === 'y') {
    anwserdCorrectly++;
    alert('Congrats! ' + userName + ' I\'m older then 30 too!');
  }
  else {
    alert ('Lucky you! 😀');
  }
}
questionTwo();

function questionThree() {
  var outOfCountry = prompt('Have you been out of the Country?').toLowerCase();
  if (outOfCountry === 'yes' || outOfCountry === 'y') {
    anwserdCorrectly++;
    alert(userName + ', ' + 'we have something in common!');
  }
  else {
    alert('we need to fix that when covid is over!');
  }
}
questionThree();

function questionFour() {
  var ownCat = prompt('Do you own a Cat?').toLowerCase();
  if (ownCat === 'yes' || ownCat === 'y') {
    anwserdCorrectly++;
    alert(userName + ', im so glad we have that in common, my cats name is Oakley');
  }
  else {
    alert(userName + ', you should get one!');
  }
}
questionFour();

function questionFive() {
  var likePhoto = prompt('Do you like to take photos?').toLowerCase();
  if (likePhoto === 'no' || likePhoto === 'n') {
    anwserdCorrectly++;
    alert(likePhoto + ', seriously! That\'s a shame!');
  }
  else {
    alert('we should shoot some time!');
  }
}
questionFive();

alert(userName + ', thank you for visiting my site! A lot of work needs to be done still!');

function questionSix() {
  var correctNumber = 3;
  var guessCorrectly = false;
  alert('Lets play a guessing game!');
  for (var i = 0; i < 4; i++) {
    var guess = parseInt(prompt(`${userName}, Please input a number between 1 & 5!`));
    if (guess === correctNumber) {
      anwserdCorrectly++;
      guessCorrectly = true;
      break;
    }
    if (guess < correctNumber) {
      alert(`${userName}, that number is too low!, try again`);
    }
    else if (guess > correctNumber) {
      alert(`${userName}, that number is too high!, try again`);
    }
  }
  if (guessCorrectly) {
    alert('correct anwser');
  }
  else alert(`The correct number is ${correctNumber}!`);
}
questionSix();

function questionSeven() {
  alert('Let\'s play a game with multiple right anwsers between 1-10');
  var correctAnwser = [3, 6, 9];
  var guess = prompt('whats your guess?');
  for (var i = 0; i < 6; i++) {
    if (correctAnwser[0] == guess || correctAnwser[1] == guess || correctAnwser[2] == guess){
      alert('you guessed correctly'); 
      break;
    } else {
      guess = prompt('wrong, guess again!');
    }
  }
}
questionSeven();

