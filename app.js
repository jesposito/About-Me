'use strict';

//Forget this escaping quotes all the dang time! wuahahaha!
var inQuote = ' \"';
var outQuote = '\" ';

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

var name = prompt('Oh! I almost forgot. What should I call you?');

//introduce the quiz maaster who will be asking the questions.
alert('You called? Who needs quizzing?');
//razz the user a little for fun.
alert('Oh... it\'s this one. (sigh) alright then, ' +name+ '. Let\'s get it over with.');

//declare and ask the first question.
var q1 = prompt('Question 1: Has Jed ever eaten a live squid?');
q1 = q1.toUpperCase();
//log this for troubleshooting
console.log(q1);
//determine whether the user answered yes or no.
if(q1 == 'Y'||q1 == 'YES') { //checking for either y or yes.
  console.log(q1);
  var a1 = inQuote+'Yes'+outQuote;
  var a1Result = ' which was correct';
  console.log('Hm... this person might know Jed.');
  alert('MmHmm, MmHmm, very interesting.');
} else if (q1 == 'N'||q1=='NO') {
    var a1 = inQuote+'No'+outQuote;
    var a1Result = ' which was incorrect';
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
  } else if (q1 == '') {
      var a1 = 'nothing, ';
      var a1Result = ' which was kind of weird'
    } else {
        var a1 = inQuote+q1+outQuote;
        a1 = a1.toLowerCase();
        var a1Result =  ' which made no sense';
      };

//declare and ask the second question.
var q2 = prompt('Question 2: Has Jed ever been to Paris?');
q2 = q2.toUpperCase();
//determine whether the user answered yes or no.
if(q2 == 'N'||q2 =='NO') {
  var a2 = inQuote+'No'+outQuote;
  var a2Result = ' which was correct';
  console.log('Not yet, anyway.');
  alert('MmHmm, MmHmm, very interesting.');
} else  if (q2 == 'Y'||q2=='YES') {
    var a2 = inQuote+'Yes'+outQuote;
    var a2Result = ' which was incorrect';
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
  } else if (q2 == '') {
      var a2 = 'nothing, ';
      var a2Result = ' which was kind of weird'
    } else {
        var a2 = inQuote+q2+outQuote;
        a2 = a2.toLowerCase();
        var a2Result = ' which made no sense';
      };

//declare and ask the third question.
var q3 = prompt('Question 3: If Jed were an animal, would he be a Polar Bear?');
q3 = q3.toUpperCase();
//determine whether the user answered yes or no.
if(q3 == 'Y'||q3=='YES') {
  var a3 = inQuote+'Yes'+outQuote;
  var a3Result = ' which was correct';
  console.log('YES, BECAUSE THEY ARE THE BEST.');
  alert('MmHmm, MmHmm, very interesting.');
} else  if (q3 == 'N'||q3=='NO') {
    var a3 = inQuote+'No'+outQuote;
    var a3Result = ' which was incorrect';
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
  } else if (q3 == '') {
      var a3 = 'nothing, ';
      var a3Result = ' which was kind of weird'
    } else {
        var a3 = inQuote+q3+outQuote;
        a3 = a3.toLowerCase();
        var a3Result =  ' which made no sense';
      };

//declare and ask the fourth question.
var q4 = prompt('Question 4: When Jed shares his profession, do people usually look at him quizically?');
var q4 = q4.toUpperCase();
//determine whether the user answered yes or no.
if(q4 == 'Y'||q4=='YES') {
  var a4 = inQuote+'Yes'+outQuote;
  var a4Result = ' which was correct';
  console.log('What\'s an Instructional Designer?');
  alert('MmHmm, MmHmm, very interesting.');
} else  if (q4 == 'N'||q4=='NO') {
    var a4 = inQuote+'No'+outQuote;
    var a4Result = ' which was incorrect';
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
  } else if (q4 == '') {
      var a4 = 'nothing, ';
      var a4Result = ' which was kind of weird';
    } else {
        var a4 = inQuote+q4+outQuote;
        a4 = a4.toLowerCase();
        var a4Result = ' which made no sense';
      };

//declare and ask the fifth question.
var q5 = prompt('Question 5: Do you like Polar Bears, too?');
var q5 = q5.toUpperCase();
//determine whether the user answered yes or no.
if(q5 == 'Y'||q5=='YES') {
  var a5 = inQuote+'Yes'+outQuote;
  var a5Result = ' which was correct';
  console.log('HECK YES YOU DO, BECAUSE THEY\'RE FREAKING AWESOME!');
  alert('MmHmm, MmHmm, very interesting.');
} else  if (q5 == 'N'||q5=='NO') {
    var a5 = inQuote+'No'+outQuote;
    var a5Result = ' which was incorrect';
    console.log('Strike!');
    alert('MmHmm, MmHmm, very interesting.');
  } else if (q5 == '') {
      var a5 = 'nothing, ';
      var a5Result = ' which was kind of weird'
    } else {
        var a5 = inQuote+q5+outQuote;
        a5 = a5.toLowerCase();
        var a5Result = ' which made no sense';
      };



//Write the user's answers to the appropriate divs on the page as they answer
document.querySelector('.answer1').innerHTML = '<p class="a-p">The Quiz Master asked you whether Jed has ever eaten a live squid. You said ' + a1 + a1Result +'.</p>'

document.querySelector('.answer2').innerHTML = '<p class="a-p">He then asked whether Jed has been to Paris or not. You said ' + a2 + a2Result +'.</p>'

document.querySelector('.answer3').innerHTML = '<p class="a-p">This next one was strange. How are you supposed to know whether or not Jed would choose to be a Polar Bear? You said ' + a3 + a3Result +'.</p>'

document.querySelector('.answer4').innerHTML = '<p class="a-p">Next, he asked whether people generally knew what an Instructional Designer was. You said ' + a4 + a4Result +'.</p>'

document.querySelector('.answer5').innerHTML = '<p class="a-p">Thank goodness this was the last question. That Quiz Master fool has terrible breath. He brought up the Polar Bear again, asking whether or not you like them. You said ' + a5 + a5Result +'.</p>'
