
var userName = prompt('What\'s your name?');
   console.log('Welcome to my site ' + userName);

   var questionOne = prompt('Was I born in Washington?');
   questionOne = questionOne.toLowerCase();

   if (questionOne === 'no'  || questionOne === 'n')
   {
     console.log('Correct, I was born in Ethiopia!');
   }
   else if (questionOne === 'yes'  || questionOne === 'y')
   {
     console.log('Not true, I was born in Ethiopia!');
   }
   else {

   }
   var questionTwo = prompt('Do you want to know me better');
   questionTwo = questionTwo.toLowerCase();

     if (questionTwo === 'yes'  || questionTwo === 'y') {
       console.log('Great, please read on ' + userName);
     } else if (questionTwo === 'no'  || questionTwo === 'n'){
       console.log('it is shown there keep on reading')
     }
     var questionThree = prompt('Do you like my photo?');
     questionThree = questionThree.toLowerCase();

       if (questionThree === 'yes'  || questionThree === 'y')
       {
       console.log('Thank you very much.Yo are so awesome too!');
     }
     else if (questionThree === 'no'  || questionThree === 'n')
     {
       console.log('oh boy better to like that!.');
     }
     var questionFour = prompt('Do you want to perform some music?');
     questionFour = questionFour.toLowerCase();

     if (questionFour === 'yes'  || questionFour === 'y')
     {
       console.log('come visit me.');

     }
     else if (questionFour === 'no'  || questionFour === 'n')
     {
       console.log('Don\'t  ask such question ');
     }
     var temprature=prompt('what is the temprature outside in degree Fahraniet');
     var Season=prompt('What is the season? Is that winter,Fall,spring,summer');

      if (temprature <60||season='winter')
       {
         console.log('wear a jacket');
     }
     else if (temprature>=60||season!='winter')
     {
       console.log('you can take off your jacket');
     }
