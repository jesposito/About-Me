'use strict';

//welcome the user and ask them if they're ready to take the quiz.
var confirmed = confirm('Welcome! Before you go any further, I\'d like to find out how well you know me. Are you ready for a quiz?');
//determine whether or not they're ready and respond.
if(confirmed === true){
  console.log('The user is ready!');
  //let the user know we heard them.
  alert('Great! I\'ll call the Quiz Master over.');
  } else {
    //let the user know we can't stop it now.
    console.log('The user said they were not ready... but we\'re gonna start anyway.');
    alert('Ah nuts. I already sen\'t for the Quiz Master. He\'ll be here any minute. Be a pal and do it anyway, will ya?');
}
//introduce the quiz maaster who will be asking the questions.
alert('You called? Who needs quizzing?');
//razz the user a little for fun.
alert('Oh... it\'s this one. (sigh) alright then. Let\'s get it over with.');

//declare and ask the first question.
var a1 = prompt('Question 1: Has Jed ever eaten a live squid?');
//determine whether the user answered yes or no.
if(a1.toUpperCase === 'Y'||'YES') {
  var a1Result = 'correctly';
  console.log('Hm... this person might know Jed.');
  alert('MmHmm, MmHmm, very interesting.');
  } else {
    var a1Result = 'incorrectly';
    console.log('Strike 1!');
    alert('MmHmm, MmHmm, very interesting.');
}


//Write the user's answers to the page as they answer
document.querySelector('.answers').innerHTML = '<p>The Quiz Master asked you whether Jed has ever eaten a live squid. You ' + a1Result + ' said ' +'\"'+a1+'\".'+'</p>'
