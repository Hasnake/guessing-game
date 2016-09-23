'use strict';
// FUNCTION GREETING.
function greeting(){
  return ( 'welcome to my site,' + names);
}
var names = prompt('what is your name?');
alert(greeting());
//YES OR NO
var questions = ['Was I born in Ethiopia?','Do I Speak Amharic?','am I a software tester?','do I have a backend technology experience?'];
for (i = 0;i < questions.length;i++){
  var questionsAnswer = prompt(questions[i]);
  questionsAnswer = questionsAnswer.toLowerCase();
  if (questionsAnswer === 'yes' || questionsAnswer === 'y'){
    alert('correct');
  }else
     alert('Incorrect');
}
   //array length
var questionFive = prompt('Did your name length acceptable in my culture?what is your name?');
if (questionFive.length <= 2 || questionFive.length >= 7){
  alert('No,too small or too long names are not recommended in our culture');
}else {
  alert('yes,your name in the range');
}
//working on arrays and indexOf
var questionSix = prompt('guess my favourite background color');
questionSix = questionSix.toLowerCase();
var funColor = ['red','green','blue'];
if (funColor.indexOf(questionSix) === -1){
  alert('you got a wrong answer');
}else{
  alert('you got a correct answer and the index is' + '' + funColor.indexOf(questionSix));
}
//guessing a number
var num = 23;
var trial = 4;
for(var i = 0;i < trial;i++){
  var questionSeven = parseInt(prompt('Guess a Number between 20 and 25'));
  if (questionSeven === num){
    alert('got answer');
    break;}
}
