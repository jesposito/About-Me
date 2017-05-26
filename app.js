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
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
}

//declare and ask the second question.
var a2 = prompt('Question 2: Has Jed ever been to Paris?');
//determine whether the user answered yes or no.
if(a2.toUpperCase === 'N'||'NO') {
  var a1Result = 'correctly';
  console.log('Not yet, anyway.');
  alert('MmHmm, MmHmm, very interesting.');
  } else {
    var a2Result = 'incorrectly';
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
}

//declare and ask the third question.
var a3 = prompt('Question 3: If Jed were an animal, would he be a Polar Bear?');
//determine whether the user answered yes or no.
if(a3.toUpperCase === 'Y'||'YES') {
  var a1Result = 'correctly';
  console.log('YES, BECAUSE THEY ARE THE BEST.');
  alert('MmHmm, MmHmm, very interesting.');
  } else {
    var a3Result = 'incorrectly';
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
}

//declare and ask the fourth question.
var a4 = prompt('Question 4: When Jed shares his profession, do people usually look at him quizically?');
//determine whether the user answered yes or no.
if(a4.toUpperCase === 'Y'||'YES') {
  var a4Result = 'correctly';
  console.log('What\'s an Instructional Designer?');
  alert('MmHmm, MmHmm, very interesting.');
  } else {
    var a4Result = 'incorrectly';
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
}

//declare and ask the fifth question.
var a5 = prompt('Question 5: Do you like Polar Bears, too?');
//determine whether the user answered yes or no.
if(a5.toUpperCase === 'Y'||'YES') {
  var a5Result = 'correctly';
  console.log('HECK YES YOU DO, BECAUSE THEY\'RE FREAKING AWESOME!');
  alert('MmHmm, MmHmm, very interesting.');
  } else {
    var a5Result = 'incorrectly';
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
}

//Write the user's answers to the page as they answer
document.querySelector('.answer1').innerHTML = '<p>The Quiz Master asked you whether Jed has ever eaten a live squid. You ' + a1Result + ' said ' +'\"'+a1+'\".'+'</p>'
document.querySelector('.answer2').innerHTML = '<p>He then asked whether Jed has been to paris or not. You ' + a2Result + ' said ' +'\"'+a2+'\".'+'</p>'
document.querySelector('.answer3').innerHTML = '<p>This next one was strange. How are you supposed to know whether or not Jed would choose to be a Polar Bear?. You ' + a3Result + ' said ' +'\"'+a3+'\".'+'</p>'
document.querySelector('.answer4').innerHTML = '<p>Next, he asked whether people knew generally knew what an Instructional Designer was. You ' + a4Result + ' said ' +'\"'+a4+'\".'+'</p>'
document.querySelector('.answer5').innerHTML = '<p>Thank goodness this was the last question. That quizmaster has terrible breath. He brought up the Polar Bear again, asking whether or not you like them. You ' + a5Result + ' said ' +'\"'+a5+'\".'+'</p>'
