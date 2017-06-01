'use strict';

var position = 0;
var correct = 0;
var quizStatus, question;

//this array contains the question text and correct and incorrect feedback for each question
var questions = [
['question 1 text', 'incorrect response 1', 'correct response 1', 'correct answer'],
['question 2 text', 'incorrect response 2', 'correct response 2', 'correct answer'],
['question 3 text', 'incorrect response 3', 'correct response 3', 'correct answer'],
['question 4 text', 'incorrect response 4', 'correct response 4', 'correct answer'],
['question 5 text', 'incorrect response 5', 'correct response 5', 'correct answer']
];

//iterate through the questions array logging each question once
for (i = 0; i < questions.length; i++) {
  console.log(questions[i][0]);
}
