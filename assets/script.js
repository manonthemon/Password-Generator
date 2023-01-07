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
let passwordArray = []
let flatPasswordArray = []


// Function to generate password with user input
function generatePassword() {

//first the code checks if user typed in the password length. 
// If no, prompts the user to enter number of characters.
if (passwordLengthSelected !== true) {  
  userInput = prompt("How long should the password be?");

// If yes, checks if correct value entered.
// if no, alerts user and reloads the page.
passwordLengthSelected = true; 
  if (userInput<10 || userInput>64  || isNaN(userInput)) {
        alert("Please enter a number between 10 and 64 (inclusive)")
        location.reload()} 
  }

// Calls function checking prompting user to select password characters.
  charCheck()
  // Calls function to create a random password.
  createPassword()
  location.reload()
  
}

// function prompting user to specify types of password characters and pushing selection to new array.
function charCheck() {
  let lowerCase = confirm("Do you want to add lowercase characters to your password?")
    if (lowerCase == true) { passwordArray.push(lowerCasedCharacters);}
      let upperCase = confirm("Do you want to add uppercase characters to your password?")
        if (upperCase == true) { passwordArray.push(upperCasedCharacters);}
           let numChars = confirm("Do you want to add numbers to your password?")
              if (numChars == true) { passwordArray.push(numericCharacters);}
               let specChars = confirm("Do you want to add special characters to your password?")
                  if (specChars == true) { passwordArray.push(specialCharacters);}    
                  
// Checks if user made at least one selection. 
// If no, alerts user and reloads the page.
// If yes, creates a new, flat array with user-selected character types.

if (passwordArray.length == 0) {
  alert("You password needs at least one type of character.")
  location.reload()}
else {
  flatPasswordArray = passwordArray.flat()
  } return console.log(flatPasswordArray)
} 

//function to generate a random password from the array of character types selected by the user
function createPassword() {
  let password = '';
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
