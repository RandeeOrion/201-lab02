'use strict';

var userName = prompt ('Hello! Thanks for visiting! What is your name?');
alert ('Welcome to Ally\'s Lab Project, ' + userName + '!');

var allyOrigin = prompt ('Was I originally from Hawaii?')
allyOrigin = allyOrigin.toLocaleLowerCase();
// console.log(allyOrigin);

if (allyOrigin === 'yes' || allyOrigin === 'y') {
    alert ('Ding Ding Ding! You are correct!')
}   else if (allyOrigin === 'no' || allyOrigin === 'n') {
    alert ('Wrong! I was from Oahu.')
}

var allyPet = prompt ('Do I have a cat?')
allyPet = allyPet.toLocaleLowerCase();
// console.log(allyPet);

if (allyPet === 'yes' || allyPet === 'y') {
    alert ('Wrong! I have a cute baby puppy named Mochiko!')
}   else if (allyPet === 'no' || allyPet === 'n') {
    alert ('Yay! You\'re right. I have a crazy puppy named Mochi!')
}

var jobInterest = prompt ('Did I want to be a hygienist?') 
jobInterest = jobInterest.toLocaleLowerCase();
// console.log(jobInterest);

if (jobInterest === 'yes' || jobInterest === 'y') {
    alert ('Yep, I wanted to be one up until recently!')
}   else if (jobInterest === 'no' || jobInterest === 'n') {
    alert ('Wrong, I actually did want to be one. :)')
}

var allyMajor = prompt ('Did I major in Psychology?')
allyMajor = allyMajor.toLocaleLowerCase();
// console.log(allyMajor);

if (allyMajor === 'yes' || allyMajor === 'y') {
    alert ('Ding Ding Ding! Yep, my major was psychology. It was pretty fun.')
}   else if (allyMajor === 'no' || allyMajor === 'n') {
    alert ('Nope! psychology WAS my major.')
}

var allyMochi = prompt ('Is mochi a food to me?')
allyMochi = allyMochi.toLocaleLowerCase();
// console.log(allyMochi)

if (allyMochi === 'yes' || allyMochi === 'y') {
    alert ('It is! You are correct! But I mostly think of my puppy when I hear Mochi.')
}   else if (allyMochi === 'no' || allyMochi === 'n') {
    alert ('Kind of right! It is my puppy first to me, then a delicious snack. :)')
}
 
var plsEnjoy = alert ('Please enjoy my project, ' + userName + '! Please let me know if there is something I missed or can improve on!')