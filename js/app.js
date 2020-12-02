'use strict';

var userName = prompt('What is your Name?');
alert(userName + ', Welcome to my site!');
// console.log('the username is ' + userName);

// Im asking 5  y/n or yes or no question - responses can be entered lower case or upper case
// Question 1
var nameStartLetter = prompt('Does your name start with the letter A?').toUpperCase().toLowerCase();
// // logging result to see that it works
// // console.log (nameStartLetter);
if (nameStartLetter === 'yes' || nameStartLetter === 'y') {
  //   // console.log(nameStartLetter + ', ' + 'your name starts with the letter A, just like mine!);
  alert(nameStartLetter + ', ' + 'your name starts with the letter A, just like mine!');
}
else {
  alert('Wrong Anwser');
}

// Question 2
var older30 = prompt('Are you older then 30?').toUpperCase().toLowerCase();
if (older30 === 'yes' || older30 === 'y') {
  //   // console.log('Congrats!' + userName + 'I\'m older then 30 too!');
  alert('Congrats!' + userName + 'I\'m older then 30 too!');
}

// Question 3
var outOfCountry = prompt('Have you been out of the Country?').toUpperCase().toLowerCase();
if (outOfCountry === 'yes' || outOfCountry === 'y') {
  //   // console.log(userName +', ' + 'we have something in common!');
  alert(userName + ', ' + 'we have something in common!');
}
else {
  alert('we need to fix that when covid is over!');
}

// Question 4
var ownCat = prompt('Do you own a Cat?').toUpperCase().toLowerCase();
if (ownCat === 'yes' || ownCat === 'y') {
  //   //   // console.log(userName + ', im so glad we have that in common, my cats name is Oakley');
  alert(userName + ', im so glad we have that in common, my cats name is Oakley');
}
else {
  alert(userName + ', you should get one!');
}

// Question 5
var likePhoto = prompt('Do you like to take photos?').toUpperCase().toLowerCase();
// console.log(likePhoto + ', seriously! That\'s a shame!');
if (likePhoto === 'no' || likePhoto === 'n') {
  alert(likePhoto + ', seriously! That\'s a shame!');
}
else {
  alert('we should shoot some time!');
}

alert(userName + ', thank you for visiting my site! A lot of work needs to be done still!');

