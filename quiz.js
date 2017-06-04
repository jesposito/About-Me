'use strict';

var space = ' ';
var inQuote = ' \"';
var outQuote = '\" ';
var outQuote2 = '\"';
var apostrophe = '\'';
var position = 0;
var totalQuestions = 7;
var correct = 0;
var quizStatus;

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

//wrap into a function
function questionSet1 (array) {

  for (var i = 1; i <= questions.length - 1; i++) {
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
      document.querySelector('.answer' + i).innerHTML = '<p>The Quiz Master asked, ' + inQuote + questions[i][0] + outQuote + 'You responded with' + space + questions[i][4] + '. ' + questions[i][1] + '</p>';
    } else {
      document.querySelector('.answer' + i).innerHTML = '<p>The Quiz Master asked, ' + inQuote + questions[i][0] + outQuote + 'You responded with' + inQuote + questions[i][4] + outQuote2 + '. ' + questions[i][1] + '</p>';
    }
  }
}
//call the function
questionSet1(questions);
//log the current position to the console
console.log('current position is ' + position);

//Question 6
function questionNumber6() {
//Grab a random number between 1 and 30
  var randNum = Math.floor(Math.random() * 30) + 1;
  //Log the random number for debugging/cheating purposes
  console.log('The chosen number is' + randNum);

  //give the user four chances to guess the random number
  alert('Alright, smarty-pants. If you know Jed so well, let\'s see if you can guess what number he\'s thinking of.');
  var q6 = prompt('I\'ll even give you a hint. It\s between 1 and 30');
  var q6Result = false;
  //loop will give the user 4 chances to get the question correct before moving on.
  for (var j = 3; j > 0; j--) {
    //shot or shots? Grammar is important. Let's find out!
    if (j === 1) {
      var shot = 'shot';
    } else {
      var shot = 'shots';
    }
    //Now we'll see if they guessed correctly.
    if (q6 != randNum) {
      if (q6 < randNum) {
        q6 = prompt('Not quite. Guess higher. You\'ve got ' + j + ' ' + shot + ' left.');
      } else if (q6 > randNum ) {
        q6 = prompt('Not quite. Guess lower. You\'ve got ' + j + ' ' + shot + ' left.');
      } else if (isNaN(q6) === true) {
        q6 = prompt('That\'s not a number, fool. Try again.');
      }
    }
    else {
      console.log('Bingo! You got it ' + name + '! Time for question #7.' );
      q6Result = true;
      position++;
      correct++;
    }
    console.log('j = ' + j);
  }
  if (q6Result == true){
    document.querySelector('.answer6').innerHTML = '<p>The Quiz Master asked you to guess a number between 1 and 30 . You nailed it.</p>';
  }else{
    document.querySelector('.answer6').innerHTML = '<p>The Quiz Master asked you to guess a number between 1 and 30 . You didn\'t manage to guess the number ' + randNum + '.' + '</p>';
  }
};
questionNumber6();

//start q7
function questionNumber7() {
  var q7array = [ 'Can you guess a state that I\'ve lived in besides Washington?', ['ARIZONA','ILLINOIS','NEVADA'], 'user answer'];
  console.log(q7array[2]);
  q7array.splice(2,1,prompt(q7array[0]));
  //check for some edge cases and fix
  if (q7array[2].toUpperCase() == 'AZ' || q7array[2].toUpperCase() == 'IL' || q7array[2].toUpperCase() == 'NV'){
    if (q7array[2].toUpperCase() == 'AZ') {
      q7array[2] = 'ARIZONA';
    } else if (q7array[2].toUpperCase() == 'IL') {
      q7array[2] = 'ILLINOIS';
    } else {
      q7array[2] = 'NEVADA';
    }
  }
  else {
    //do nothing
  }
  //now see if they're right or not
  console.log(q7array[2]);
  //adjust the user's answer to account for edge cases
  if (q7array[2].toUpperCase() == q7array[1][0] || q7array[2].toUpperCase() == q7array[1][1] || q7array[2].toUpperCase() == q7array[1][2]) {
    console.log('right!');
    document.querySelector('.answer7').innerHTML = '<p>The Quiz Master asked you to guess where else Jed has lived. You correctly guessed' + q7array[2] + '.</p>';
  } else {
    document.querySelector('.answer7').innerHTML = '<p>The Quiz Master asked you to guess where else Jed has lived. Your last guess (incorrect) was ' + q7array[2] + '.</p>';
    console.log('wrong');
    q7array[2] = prompt('Try again!');
  }
};
questionNumber7();
quizStatus = correct + ' correct out of ' + totalQuestions;
//write the quiz status to the page.
document.querySelector('.score').innerHTML = '<p>' + name + ', ' + 'you got ' + quizStatus + '.' + '</p>';
