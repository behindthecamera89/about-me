'use strict';

'use strict';

var userName = prompt('What is your Name?');
alert(userName + ', Welcome to my site!');
// console.log('the username is ' + userName);
var anwserdCorrectly = 0;

// Im asking 5  y/n or yes or no question - responses can be entered lower case or upper case
function questionOne() {
  // Question 1
  var nameStartLetter = prompt('Does your name start with the letter A?').toLowerCase();
  // // logging result to see that it works
  // // console.log (nameStartLetter);
  if (nameStartLetter === 'yes' || nameStartLetter === 'y') {
    anwserdCorrectly++;
    //   // console.log(nameStartLetter + ', ' + 'your name starts with the letter A, just like mine!);
    alert(nameStartLetter + ', ' + 'your name starts with the letter A, just like mine!');
  }
  else {
    alert('Wrong Anwser');
  }
}
questionOne();

function questionTwo() {
  // Question 2
  var older30 = prompt('Are you older then 30?').toLowerCase();
  if (older30 === 'yes' || older30 === 'y') {
    anwserdCorrectly++;
    //   // console.log('Congrats!' + userName + 'I\'m older then 30 too!');
    alert('Congrats! ' + userName + ' I\'m older then 30 too!');
  }
}
questionTwo();

function questionThree() {
  // Question 3
  var outOfCountry = prompt('Have you been out of the Country?').toLowerCase();
  if (outOfCountry === 'yes' || outOfCountry === 'y') {
    anwserdCorrectly++;
    //   // console.log(userName +', ' + 'we have something in common!');
    alert(userName + ', ' + 'we have something in common!');
  }
  else {
    alert('we need to fix that when covid is over!');
  }
}
questionThree();

function questionFour() {
  // Question 4
  var ownCat = prompt('Do you own a Cat?').toLowerCase();
  if (ownCat === 'yes' || ownCat === 'y') {
    anwserdCorrectly++;
    //   //   // console.log(userName + ', im so glad we have that in common, my cats name is Oakley');
    alert(userName + ', im so glad we have that in common, my cats name is Oakley');
  }
  else {
    alert(userName + ', you should get one!');
  }
}
questionFour();

function questionFive() {
  // Question 5
  var likePhoto = prompt('Do you like to take photos?').toLowerCase();
  // console.log(likePhoto + ', seriously! That\'s a shame!');
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
  // Question 6
  // Create a Guessing game with 4 numbers

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
  // Question 7
  // Create a guessing game with multiple anwsers

  var correctNumbers = [2, 4, 6, 8, 10];
  // var guessCorrectly2 = false;
  alert('Lets play a guessing game that has multiple right anwsers!');
  loop1: for (var c = 0; c < 6; c++) {
    var guess2 = parseInt(prompt(`${userName}, Please pick a number between 1 and 20. There are multiple right anwsers`));
    // console.log(correctNumbers[c]);
    // console.log(guess2, 'guess 2');
    for (var j = 0; j < correctNumbers.length; j++) {
      if (guess2 === correctNumbers[j]) {
        anwserdCorrectly++;
        alert('You guessed correctly');
        // guessCorrectly2 = true;
        break loop1;
      }
      else if (guess2 !== correctNumbers[c]) {
        alert(`${userName}, try another number!`);
        break;
      }
    }
    // else if (guessCorrectly2) {
    //   alert('You chose a correct number!');
    // }
  }
  // alert(`The correct anwsers are ${correctNumbers}`);
}
questionSeven();

alert(`you got ${anwserdCorrectly} out of 7 correct!`);

  // loop1: for (var c = 0; c < 6; c++) {
  //   var guess2 = parseInt(prompt(`${userName}, Please pick a number between 1 and 20. There are multiple right anwsers`));
  //   for (var j = 0; j < correctNumbers.length; j++) {
  //       if (guess2 === correctNumbers[j]) {
  //         anwserdCorrectly++;
  //         alert('You guessed correctly');
  //         break loop1;
  //       }
  //       else if (guess2 !== correctNumbers[c]) {
  //         alert(`${userName}, try another number!`);
  //         break;
  //       }
  //     }
  //   }
  // {

  //   for (var i = 0; i < 6; i++) {
//     var guess = parseInt(prompt(`${userName}, Please pick a number between 1 and 20. There are multiple right anwsers`));
//     if (guess === correctNumbers) {
//       anwserdCorrectly++;
//       guessCorrectly = true;
//       break;
//     }
//     if (guessCorrectly !== correctNumbers) {
//       alert(`${userName}, try another number!`);
//       break;
//     }
//   }
//   if (guessCorrectly) {
//     alert('correct answer');
//   }
//   else alert('The correct answers are 2 or 4 or 6 or 8 or 10');
// }
// // function questionSeven() {
//   var correctNumbers = [2, 4, 6, 8, 10];
//   var guessCorrectly = false;
//   alert('Lets play a guessing game that has multiple right anwsers!');
//   for (var i = i; i < 6; i++); {
//     var guess = parseInt(prompt(`${userName}, Please pick a number between 1 and 20. There are multiple right anwsers`));
//     while (guess !== correctNumbers) {
//       alert('try again');
//       if (guess === correctNumbers)
//         anwserdCorrectly++;
//       guessCorrectly === true;
//       alert('guessed correctly');
//       break;
//     }
//     if (guess !== correctNumbers); {
//       alert('try again');
//     }
//   }
// }
// questionSeven();
  // var correctNumbers = [2, 4, 6, 8, 10]
  // var guess;
  // var correctGuess = false;
  // do {
  //   guess = prompt(`${userName}, Please pick a number between 1 and 20. There are multiple right anwsers`);
  //   anwserdCorrectly++;
  //   if (parseInt(guess) === correctNumbers) {
  //     correctGuess = true;
  //   }
  // } while (!correctGuess) {
  //   alert('correct anwser');


  // alert(`you got ${anwserdCorrectly} out of 7 correct!`);


