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
    alert('Wrong Anwser');
  }
}
questionOne();

function questionTwo() {
  var older30 = prompt('Are you older then 30?').toLowerCase();
  if (older30 === 'yes' || older30 === 'y') {
    anwserdCorrectly++;
    alert('Congrats! ' + userName + ' I\'m older then 30 too!');
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
  var correctNumbers = [2, 4, 6, 8, 10];
  alert('Lets play a guessing game that has multiple right anwsers!');
  loop1: for (var c = 0; c < 6; c++) {
    var guess2 = parseInt(prompt(`${userName}, Please pick a number between 1 and 20. There are multiple right anwsers`));
    for (var j = 0; j < correctNumbers.length; j++) {
      if (guess2 === correctNumbers[j]) {
        anwserdCorrectly++;
        alert('You guessed correctly');
        break loop1;
      }
      else if (guess2 !== correctNumbers[c]) {
        alert(`${userName}, try another number!`);
        break;
      }
    }
  }
}
questionSeven();

alert(`you got ${anwserdCorrectly} out of 7 correct!`);
