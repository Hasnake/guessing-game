   var userName = prompt('What\'s your name?');
   alert('Welcome to my site ' + userName);

   var questionOne = prompt('Was I born in Washington?');
   questionOne = questionOne.toLowerCase();

   if (questionOne === 'no'  || questionOne === 'n')
   {
     alert('Correct, I was born in Ethiopia!');
   }
   else if (questionOne === 'yes'  || questionOne === 'y')
   {
     alert('Guess what, I was born in Ethiopia!');
   }
   else {
     alert('incorrect input');
   }
    var questionTwo = prompt('Do you want to know me better');
   questionTwo = questionTwo.toLowerCase();

     if (questionTwo === 'yes'  || questionTwo === 'y') {
       alert('Great, please go through my profile.' + userName+"!");
     } else if (questionTwo === 'no'  || questionTwo === 'n'){
       alert('No worries and I wish if you know me better.');
     }
     else {
       alert('incorrect input');
     }
     var questionThree = prompt('Do you like my photo?');
     questionThree = questionThree.toLowerCase();

       if (questionThree === 'yes'  || questionThree === 'y')
       {
       alert('Thank you very much.Yo are so awesome too!');
     }
     else if (questionThree === 'no'  || questionThree === 'n')
     {
       alert('oh boy better to like that!.');
     }
     else {
       alert('incorrect input');
     }
     var questionFour = prompt('Do you want to perform some music?');
     questionFour = questionFour.toLowerCase();

     if (questionFour === 'yes'  || questionFour === 'y')
     {
       alert('come visit me.');

     }
     else if (questionFour === 'no'  || questionFour === 'n')
     {
       alert('Don\'t  ask such question ');
     }
     else {
       alert('incorrect input');
     }
     var temprature=prompt('what is the temprature outside in degree Fahraniet');
     var season=prompt('What is the season? Is that winter,Fall,spring,summer');
if (temprature <=60 && season==='winter')
       {
         alert('wear a jacket');
     }
     else
     {
       alert('you can take off your jacket');
     }
     var questionSix=prompt('guess the fundamental color ');
     var funColor=['red','green','blue'];
     if (funColor.indexOf(questionSix)===-1)
     {
       alert('you got a wrong answer');
     }
     else
     {
        alert('you got a correct answer and the index is'+" "+funColor.indexOf(questionSix));
      }
