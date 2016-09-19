   var userName = prompt('What\'s your name?');
   var today = new Date();
   var curHr = today.getHours();
   if (curHr < 12) {
     alert('Good morning' + '  ' + userName + ',' + 'Welcome to my site!');
   }else if (curHr < 18)
   {
     alert('Good afternoon' + '  ' + userName + ',' + 'Welcome to my site!');
   }else{
     alert('Good evening' + '  ' + userName + ',' + 'Welcome to my site!');
   }
   var questionOne = prompt('Was I born in the USA?');
   questionOne = questionOne.toLowerCase();

   if (questionOne === 'no' || questionOne === 'n'){
     alert('Correct, I was born in Ethiopia!');
   }else if (questionOne === 'yes' || questionOne === 'y'){
     alert('Guess what, I was born in Ethiopia!');
   }else {
     alert('invalid input');
   }
   var questionTwo = prompt('Do you want to know me better');
   questionTwo = questionTwo.toLowerCase();

   if (questionTwo === 'yes' || questionTwo === 'y') {
     alert('Great, please go through my profile.' + userName );
   } else if (questionTwo === 'no' || questionTwo === 'n'){
     alert('I wish if you know me better but no worries.Keep on guessing the other questions');
   }else {
     alert('invalid input');
   }
   var questionThree = prompt('Do you like my photo?');
   questionThree = questionThree.toLowerCase();

   if (questionThree === 'yes' || questionThree === 'y'){
     alert('Thank you very much.You are so awesome too!');
   }else if (questionThree === 'no' || questionThree === 'n'){
     alert('I wish if you like my photo.');
   }else {
     alert('invalid input');
   }
   var questionFour = prompt('do I have backend technology experience?');
   questionFour = questionFour.toUpperCase();

   if (questionFour === 'Yes' || questionFour === 'Y'){
     alert('correct,come visit me and we can write some querries together.');
   }else if (questionFour === 'No' || questionFour === 'N'){
     alert('you don\'t  know me. I was SQL dev before a couple of years ago ');
   }else {
     alert('invalid input');
   }
   var questionFive = prompt('Did your name length acceptable in my culture?what is your name?');
   if (questionFive.length <= 2 || questionFive.length >= 7){
     alert('No,too small or too long names are not recommended in our culture');
   }else {
     alert('yes,your name in the range');
   }
   var questionSix = prompt('guess my favourite background color');
   questionSix = questionSix.toLowerCase();
   var funColor = ['red','green','blue'];
   if (funColor.indexOf(questionSix) === -1){
     alert('you got a wrong answer');
   }else{
     alert('you got a correct answer and the index is' + '' + funColor.indexOf(questionSix));
   }
  //  var questionSeven = prompt('How many questions you got?');
