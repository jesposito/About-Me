'use strict';

//welcome the user and ask them if they're ready to take the quiz.
var confirmed = confirm('Welcome! Before you go any further, I\'d like to find out how well you know me. Are you ready for a quiz?');
//determine whether or not they're ready and respond.
if(confirmed === true){
  console.log('The user is ready!');
  //let the user know we heard them.
  alert('Great! Get ready for the first question.');
  } else {
    //let the user know we can't stop it now.
    console.log('The user said they were not ready... but we\'re gonna start anyway.');
    alert('Ah nuts. I already sen\'t for the quiz master. He\'ll be here any minute. Be a doll and do it anyway, will ya?');
}
//introduce the quiz maaster who will be asking the questions.
alert('You called? Who needs quizzing?');
//razz the user a little for fun.
alert('Oh... it\'s this one. (sigh) alright then. Let\'s get it over with.');

prompt('Question 1: Has Jed ever eaten a live squid?');


document.querySelector('.answers').innerHTML = '<p>Answer 1: ' + q1 + '<br>Answer 2: ' + q2+ '</p>'
