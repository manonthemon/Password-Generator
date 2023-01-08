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

// variables in the global scope
let userInput;
let passwordLengthSelected = false;
let passwordArray = [];
let flatPasswordArray = [];
flatPasswordArray.length = 0;

// Calls function to generate password with user input
function generatePassword() {

// Calls function prompting user to select password length.
lengthPrompt()

// Calls function prompting user to select password characters.
charPrompts()

// Calls function checking pif user selected at least one character type
checkInput()

// Calls function to create a random password and reload the page.
createPassword()

}

// Function prompting user to specify the length of the password.

function lengthPrompt() {

  if (!passwordLengthSelected) {
    userInput = prompt("How many characters would you like in your password?");
  }
  if (userInput < 10) {
    alert("Your password must have at least 10 characters.");
    location.reload()}
  if (userInput > 64) {
    alert("Your password can't have more than 64 characters.");
    location.reload() }
  if (isNaN(userInput)) {
    alert("Please enter a number between 10 and 64 (inclusive)");
    location.reload();
  }
}

// Function prompting user to specify types of password characters and pushing selection to new array.

function charPrompts() {
  let lowerCase = confirm("Do you want to add lowercase characters to your password?")
  if (lowerCase) { passwordArray.push(lowerCasedCharacters); }
  let upperCase = confirm("Do you want to add uppercase characters to your password?")
  if (upperCase) { passwordArray.push(upperCasedCharacters); }
  let numChars = confirm("Do you want to add numbers to your password?")
  if (numChars) { passwordArray.push(numericCharacters); }
  let specChars = confirm("Do you want to add special characters to your password?")
  if (specChars) { passwordArray.push(specialCharacters); }
  return passwordArray
}

// Function to check if user made at least one selection. 

function checkInput() {
  if (passwordArray.length == 0) {
    alert("You password needs at least one type of character.")
    location.reload()
  }
  else {
    flatPasswordArray = passwordArray.flat()
  }
}

//Function to generate a random password from the array of character types selected by the user
function createPassword() {
  let password = "";
  for (let i = 0; i < userInput; i++) {
    let randomIndex = Math.floor(Math.random() * flatPasswordArray.length);
    let randomChar = flatPasswordArray[randomIndex];
    password += randomChar;
  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = createPassword()
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
