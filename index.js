'use strict';
// FUNCTION GREETING.
function greeting(){
  return ( 'welcome to my site,' + names);
}
var names = prompt('what is your name?');
alert(greeting());
//guessingYesOrNoQuestions
var questions = ['Was I born in Ethiopia?','Do I Speak French?','am I a software tester?','do I have a backend technology experience?'];
var totalNumberOfQuestions = questions.length;
var correctAnswerForQuestions = ['yes' || 'y','no' || 'n','yes' || 'y','yes' || 'y'];
var alertsToCorrectAnswers = ['yes you are correct,I was born in Ethiopia','yes I don\'t speak French','yes I am QA tester','yes I got some SQL know how'];
var alertsToIncorrrectAnswers = ['incorrect','No,but i have some limited communication skill on spanish','ofcourse I am a tester','wrong,I have the knoweledge'];
var storeCorrectAnswers = [];
var storeIncorrectResponse = [];
var i = 0;
function guessingYesOrNoQuestions(){
  if (i < 4) {
    var userResponse = prompt(questions[i]).toLowerCase();
    if (userResponse === correctAnswerForQuestions[i]) {
      alert(alertsToCorrectAnswers[i]);
      storeCorrectAnswers.push(userResponse);
      i ++;
      guessingYesOrNoQuestions();
    }
    else if (userResponse !== correctAnswerForQuestions[i]) {
      alert(alertsToIncorrrectAnswers[i]);
      storeIncorrectResponse.push(userResponse);
      i++;
      guessingYesOrNoQuestions();
    }else {
      alert('invalid input');
      guessingYesOrNoQuestions();
    }
  }
}
guessingYesOrNoQuestions();
alert('your results for the guessing game is' + ' ' + storeCorrectAnswers.length + ' ' + 'out of' + totalNumberOfQuestions );

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
for(i = 0;i < trial;i++){
  var questionSeven = parseInt(prompt('Guess a Number between 20 and 25'));
  if (questionSeven === num){
    alert('you got the answer');
    break;}
}

//function on volume calculation
var questionEight = parseInt(prompt('Calculate the size of a volume for width=3,height=5 and depth=6'));
function getSize(width,height,depth){
  volume = width * height * depth;
  return volume;
}
getSize(3,5,6);
if (questionEight === volume) {
  alert('you got the answer');
}
else {
  alert('you got the wrong answer');
}
