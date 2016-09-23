'use strict';
// FUNCTION GREETING.
function myFunction(){
  return ( 'welcome to my site,' + names);
}
var names = prompt('what is your name?');
alert(myFunction());

//Four Yes Or NO questions
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
//function on area and volume calculation
var questionEight = parseInt(prompt('Calculate the size of a volume and area for width=3,height=5 and depth=6,Put your answer as area,volume'));
function getSize(width,height,depth){
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area,volume];
  return sizes;
}
getSize(3,5,6);
if (questionEight === 15,90) {
  alert('you got the answer');
}
else {
  alert('you got the wrong answer');
}





// function myFunction(userName){
//   return ( 'welcome to my site,' + userName);
// }
// var varName = prompt('who are you?');
// alert(myFunction(varName));

// var userName = prompt('What\'s your name?');
// var today = new Date();
// var curHr = today.getHours();
// if (curHr < 12) {
//   alert('Good morning' + '  ' + userName + ',' + 'Welcome to my site!');
// }else if (curHr < 18)
//    {
//   alert('Good afternoon' + '  ' + userName + ',' + 'Welcome to my site!');
// }else{
//   alert('Good evening' + '  ' + userName + ',' + 'Welcome to my site!');
// }
//PREVIOUS CODE For REFERENCE
// var questionOne = prompt('Was I born in the USA?').toLowerCase();
// //questionOne = questionOne.toLowerCase();
// if (questionOne === 'no' || questionOne === 'n'){
//   alert('Correct, I was born in Ethiopia!');
// }else if (questionOne === 'yes' || questionOne === 'y'){
//   alert('Guess what, I was born in Ethiopia!');
// }else {
//   alert('invalid input');
// }
// var questionTwo = prompt('Do you want to know me better').toLowerCase();
// //questionTwo = questionTwo.toLowerCase();
// if (questionTwo === 'yes' || questionTwo === 'y') {
//   alert('Great, please go through my profile.' + userName );
// } else if (questionTwo === 'no' || questionTwo === 'n'){
//   alert('I wish if you know me better but no worries.Keep on guessing the other questions');
// }else {
//   alert('invalid input');
// }
// var questionThree = prompt('Do you like my photo?').toLowerCase();
// //questionThree = questionThree.toLowerCase();
//
// if (questionThree === 'yes' || questionThree === 'y'){
//   alert('Thank you very much.You are so awesome too!');
// }else if (questionThree === 'no' || questionThree === 'n'){
//   alert('I wish if you like my photo.');
// }else {
//   alert('invalid input');
// }
// var questionFour = prompt('do I have backend technology experience?').toUpperCase();
// //questionFour = questionFour.toUpperCase();
//
// if (questionFour === 'YES' || questionFour === 'Y'){
//   alert('correct,come visit me and we can write some querries together.');
// }else if (questionFour === 'No' || questionFour === 'N'){
//   alert('you don\'t  know me. I was SQL dev before a couple of years ago ');
// }else {
//   alert('invalid input');
