
// setting up variables
let myInput, otherInput;

let myInputVowels = 0;
let otherInputVowels = 0;

let difference = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  fill(0);
  textSize(20);

  myInput = createInput('');
  myInput.position(28, 75);


  otherInput = createInput('');
  otherInput.position(28, 150);
}

function draw() {
  background(255);
  text("Input a word or phrase:", 20, 65);
  text("Input another word or phrase: ", 20, 140);

  // getting the amount of vowels
  myInputVowels = checkVowels(myInput.value());
  otherInputVowels = checkVowels(otherInput.value());

  // getting the difference
  difference = myInputVowels - otherInputVowels;

  // if its negative convert to positive
  if (difference < 0) {
    difference *= -1;
  }
  // checking if the inputs have over 3 characters
  if (myInput.value().length >= 3 && otherInput.value().length >= 3) {

    text(myInput.value() + " has " + myInputVowels + " vowels.", 20, 250);
    text(otherInput.value() + " has " + otherInputVowels + " vowels.", 20, 300);
    text("The difference is: " + difference, 20, 350);
  }
  // not enough characters display this
  else {
    text("Not enough characters in one of the inputs!", 20, 350);
  }

}

function checkVowels(wordToCheck) {
  let vowelNum = 0
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  // loop through the word
  for (let i = 0; i < wordToCheck.length; i++) {
    // check if that character is a vowels
    if (vowels.includes(wordToCheck[i])) {
      // it is, add one to the number of vowels
      vowelNum += 1
    }
  }
  // return the amount of values
  return vowelNum

}
