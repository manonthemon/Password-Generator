// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
let userInput;
let passwordLengthSelected = false;
let passwordArray = []

function generatePassword() {
  if (passwordLengthSelected !== true) {  //check if user typed in password length. If no, prompts the user. If yes and it's wrong, reloads the page.
  userInput = prompt("How long should the password be?");
  passwordLengthSelected = true; 

  if (userInput<10 || userInput>64  || isNaN(userInput)) {
        alert("Please enter a number between 10 and 64 (inclusive)")
        location.reload()} // checks if user input ins correct and if not reloads the page
  }
      lowerCase()
      upperCase() 
      numChars()
      specChars()
  
}

function lowerCase() {
  let lowerCase = confirm("Do you want to add lowercase characters to your password?")
  if (lowerCase == true) {  passwordArray.push(lowerCasedCharacters);
  return console.log(passwordArray);
  }
  }

function upperCase() {
 let upperCase = confirm("Do you want to add uppercase characters to your password?")
 if (upperCase == true) { passwordArray.push(upperCasedCharacters);
 return console.log(passwordArray);
}
}
  
function numChars() {
  let numChars = confirm("Do you want to add numbers to your password?")
  if (numChars == true) { passwordArray.push(numericCharacters);
  return console.log(passwordArray);
}
}
  
function specChars() {
 let specChars = confirm("Do you want to add special characters to your password?")
  if (specChars == true) { passwordArray.push(specialCharacters);
  return console.log(passwordArray);
}
}
  

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);