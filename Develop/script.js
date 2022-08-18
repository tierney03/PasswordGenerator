// Assignment code here
var passwordLength = 12;

//Options for the password characters
var upperCaseLetters = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var lowerCaseLetters = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var specialCharacters = ("!", "#", "$", "%", "&", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[]", "^", "_", "`", "{", "|", "}", "~");
var finalPassword = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", createPassword);

function passwordOptions() {
  finalPassword = [];

//Learned about parseInt from Leah.
passwordLength = parseInt(prompt ("What is your preferred password length from 8-128? "));

if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Incorrect Length. Please select one between 8-128.");
  return false;
}

if(confirm ("Do you want UpperCase letters?")) {
  finalPassword = finalPassword.concat(lowerCaseLetters);
}

if(confirm ("Do you want LowerCase letters?")){
  finalPassword = finalPassword.concat(upperCaseLetters);
}

if(confirm ("Do you want numbers included?")) {
  finalPassword = finalPassword.concat(numbers);
}

if(confirm ("Do you want special characters included?")) {
  finalPassword = finalPassword.concat(specialCharacters);
}

return true
}

function createPassword() {
  var password = "";
  for (var i=0; i <passwordLength, i++;) {
    var randomIndex = Math.floor(Math.random() * finalPassword.length);
    password = password + finalPassword(randomIndex);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var passwordPrompts = passwordOptions();
  var passwordText = document.querySelector("#password");
  
  if(passwordPrompts) {
    var newPassword = createPassword();
  }

  passwordText.value = password;

}


