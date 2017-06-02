'use strict';

var inQuote = ' \"';
var outQuote = '\" ';
var outQuote2 = '\"';
var apostrophe = '\'';
var position = 0;
var totalQuestions = 7;
var correct = 0;
var quizStatus = correct + ' correct out of ' + totalQuestions;

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

//ask the user for their name and store it.
var name = prompt('Oh! I almost forgot. What should I call you?');

//introduce the quiz maaster who will be asking the questions.
alert('Quiz Master: You called? Who needs quizzing?');
//razz the user a little for fun.
alert('Quiz Master: Oh... it\'s this one. (sigh) alright then, ' + name + '. Let\'s get it over with.');

//an array to store each of the first 5 questions and all of the associated brikabrak
var questions = [
  [],
//Question text:[i][0]    Incorrect feedback:[i][1]    Correct feedback:[i][2]    Correct Answer(yes || no):[i][3]    The user's response:[i][4]
['Has Jed ever eaten a live squid?', 'Wrong! No need to get into it here, but he did.', 'Good guess. He did indeed. Do not try it yourself if you can avoid it.', 'yes', 'user answer'],
['Has Jed ever been to Paris?', 'Whoops. Not yet, but he plans to go soon!', 'Correct. He plans to go soon, though.', 'no', 'user answer'],
['If Jed were an animal, would he be a Polar Bear?', 'WRONG! There is no better animal. Period.', 'HECK YES HE WOULD!', 'yes', 'user answer'],
['When Jed shares his profession, do people usually look at him quizically?', 'Unfortunately, most people have no idea what an Instructional Designer is.', 'That\'s right. Nobody knows.', 'yes', 'user answer'],
['Do you like Polar Bears, too?', 'What is wrong with you?', 'HECK YES YOU DO!', 'yes', 'user answer']
];

//iterate through the questions array, asking each question, recording the answer and providing feedback
// noprotect
for (var i = 1; i <= questions.length; i++) {
  //adjust the user's position in the quiz.
  position++;
  //ask the question and place the user's response into the appropriate place in the questions array
  questions[i].splice(4,1,prompt(questions[i][0]));
  //adjust the user's answer to account for edge cases
  if(questions[i][4].toLowerCase() == 'y' || questions[i][4].toLowerCase() == 'yes'){
    questions[i].splice(4,1,'yes');
  } else if (questions[i][4].toLowerCase() == 'n' || questions[i][4].toLowerCase() == 'no') {
    questions[i].splice(4,1,'no');
  } else if (questions[i][4] === '') {
    questions[i].splice(4,1,'a silent, steely-eyed stare');
  } else {
    questions[i].splice(4,1,'something nonsensical');
  }
  //log the user's answer to check if fixes were applied to edge cases.
  console.log(questions[i][4]);
  console.log('i is currently ' + i);
  //check the user's answer against the answer in the array. If it matches do something. If not, do something else.
  if(questions[i][4] == questions[i][3]) {
    //add a point to the correct variable
    correct++;
    //write the user's answer to the page and let them know if it was right or wrong.
    document.querySelector('.answer' + i).innerHTML = '<p>The Quiz Master asked, ' + inQuote + questions[i][0] + outQuote + 'You responded with' + inQuote + questions[i][4] + outQuote2 + '. ' + questions[i][2] + '</p>';
  } else if (questions[i][4] == 'a silent, steely-eyed stare') {
    document.querySelector('.answer' + i).innerHTML = '<p>The Quiz Master asked, ' + inQuote + questions[i][0] + outQuote + 'You responded with' + questions[i][4] + '. ' + questions[i][1] + '</p>';
  } else {
    document.querySelector('.answer' + i).innerHTML = '<p>The Quiz Master asked, ' + inQuote + questions[i][0] + outQuote + 'You responded with' + inQuote + questions[i][4] + outQuote2 + '. ' + questions[i][1] + '</p>';
  }
}
//log the current position to the console
console.log(position);

//Grab a random number between 1 and 30
var randNum = Math.floor(Math.random() * 30) + 1;
//give the user four chances to guess the random number
