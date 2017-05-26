'use strict';

var confirmed = confirm('Are you ready to rock and roll?');

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready... but we\'re gonna start anyway.');
}

document.querySelector('.answers').innerHTML = '<p>Answer 1: ' + q1 + '<br>Answer 2: ' + q2+ '</p>'
