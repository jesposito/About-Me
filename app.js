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
var q1 = prompt('Question 1: Has Jed ever eaten a live squid?');
q1 = q1.toUpperCase();
console.log(q1);
//determine whether the user answered yes or no.
if(q1 == 'Y'||q1 == 'YES') {
  console.log(q1);
  var a1 = 'Yes';
  var a1Result = 'correctly';
  console.log('Hm... this person might know Jed.');
  alert('MmHmm, MmHmm, very interesting.');
  }
  else if (q1 == 'N'||q1=='NO') {
    var a1 = 'No';
    var a1Result = 'incorrectly';
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
    }
    else {
      var a1 = q1;
      var a1Result = 'something that made no sense.';
    };

//declare and ask the second question.
var q2 = prompt('Question 2: Has Jed ever been to Paris?');
q2 = q2.toUpperCase();
//determine whether the user answered yes or no.
if(q2 == 'N'||q2 =='NO') {
  var a2 = 'No';
  var a2Result = 'correctly';
  console.log('Not yet, anyway.');
  alert('MmHmm, MmHmm, very interesting.');
} else  if (q2 == 'Y'||q2=='YES') {
      var a2 = 'Yes';
      var a2Result = 'incorrectly';
      console.log('Strike!');
      alert('MmHmm, MmHmm, very interesting.');
  }

//declare and ask the third question.
var q3 = prompt('Question 3: If Jed were an animal, would he be a Polar Bear?');
q3 = q3.toUpperCase();
//determine whether the user answered yes or no.
if(q3 == 'Y'||q3=='YES') {
  var a3 = 'Yes';
  var a3Result = 'correctly';
  console.log('YES, BECAUSE THEY ARE THE BEST.');
  alert('MmHmm, MmHmm, very interesting.');
} else  if (q3 == 'N'||q3=='NO') {
      var a3 = 'No';
      var a3Result = 'incorrectly';
      console.log('Strike!');
      alert('MmHmm, MmHmm, very interesting.');
  }

//declare and ask the fourth question.
var q4 = prompt('Question 4: When Jed shares his profession, do people usually look at him quizically?');
var q4 = q4.toUpperCase();
//determine whether the user answered yes or no.
if(q4 == 'Y'||q4=='YES') {
  var a4 = 'Yes';
  var a4Result = 'correctly';
  console.log('What\'s an Instructional Designer?');
  alert('MmHmm, MmHmm, very interesting.');
} else  if (q4 == 'N'||q4=='NO') {
      var a4 = 'No';
      var a4Result = 'incorrectly';
      console.log('Strike!');
      alert('MmHmm, MmHmm, very interesting.');
  }

//declare and ask the fifth question.
var q5 = prompt('Question 5: Do you like Polar Bears, too?');
var q5 = q5.toUpperCase();
//determine whether the user answered yes or no.
if(q5 == 'Y'||q5=='YES') {
  var a5 = 'Yes';
  var a5Result = 'correctly';
  console.log('HECK YES YOU DO, BECAUSE THEY\'RE FREAKING AWESOME!');
  alert('MmHmm, MmHmm, very interesting.');
} else  if (q5 = 'N'||q5=='NO') {
      var a5 = 'No';
      var a5Result = 'incorrectly';
      console.log('Strike!');
      alert('MmHmm, MmHmm, very interesting.');
  }




//Write the user's answers to the page as they answer
document.querySelector('.answer1').innerHTML = '<p>The Quiz Master asked you whether Jed has ever eaten a live squid. You ' + a1Result + ' said ' +'\"'+a1+'\".'+'</p>'
document.querySelector('.answer2').innerHTML = '<p>He then asked whether Jed has been to paris or not. You ' + a2Result + ' said ' +'\"'+a2+'\".'+'</p>'
document.querySelector('.answer3').innerHTML = '<p>This next one was strange. How are you supposed to know whether or not Jed would choose to be a Polar Bear? You ' + a3Result + ' said ' +'\"'+a3+'\".'+'</p>'
document.querySelector('.answer4').innerHTML = '<p>Next, he asked whether people knew generally knew what an Instructional Designer was. You ' + a4Result + ' said ' +'\"'+a4+'\".'+'</p>'
document.querySelector('.answer5').innerHTML = '<p>Thank goodness this was the last question. That quizmaster has terrible breath. He brought up the Polar Bear again, asking whether or not you like them. You ' + a5Result + ' said ' +'\"'+a5+'\".'+'</p>'
