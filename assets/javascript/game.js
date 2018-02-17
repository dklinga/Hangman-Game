//There was a ton I could not figure out.  got stumped with the updating of the underscores and why the first letters of the chosen word did not populate to the correct array 

//create and array of words
var wordBank = ['Horse', 'Buckaro', 'Chuckwagon', 'Wrangler', 'Bronco', 'Peacemaker'];
//choose random word
var word = Math.floor(Math.random() * wordBank.length);
//Variables 
var chosenWord = wordBank[word];
var rightWord = [];
var wrongWord = [];
var underScore = [];


 // Grab DOM/HTML Elements and store in variables
var docUnderScore = document.getElementsByClassName('underScore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

console.log(chosenWord);


//create underscores based on length of word
var generateUnderScore = () => {
  for (var i = 0; i < chosenWord.length; i++) {
    underScore.push('_');
  }
  return underScore;
}
console.log(generateUnderScore());

//Users guess 
document.addEventListener('keypress', (event) => {
  var keyWord = String.fromCharCode(event.keyCode);
//user guess right 
  if(chosenWord.indexOf(keyWord) > -1) {
    rightWord.push(keyWord);
    console.log(rightWord);
//replace underscore with right letter 
    underScore[chosenWord.indexOf(keyWord)] = keyWord;
    docUnderScore[0].innerHtml = underScore.join('');
    docRightGuess[0].innerHTML = rightWord;
console.log(underScore);
//checks to see if user word matches guess
    if(underScore.join('') == chosenWord) {
      alert('You Win');
    }
  }
  else {
    wrongWord.push(keyWord);
    docWrongGuess[0].innerHTML = wrongWord;
    console.log(keyWord);
    console.log(wrongWord);
    console.log(chosenWord);
  }
});

docUnderScore[0].innerHTML = underScore.join(' ');