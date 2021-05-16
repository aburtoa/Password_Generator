// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create a array for upper case alpha, lower case alpha, special character, and number

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">","/", "~", "=", "+"]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"]
var numericalCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;

}


// adds event listener
generateBtn.addEventListener("click", writePassword);

// gets value from array
function random(arr) {
  let randomindex = Math.floor(Math.random()*arr.length)
  return arr[randomindex]
} 

function passwordOptions() {
  //Prompts for password length
  let passwordLength = parseInt(prompt ("How many characters would you like your password ? (has to be between 8 and 128 characters)"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Password length must be between 8 to 128 Characters.")
    return passwordOptions()
  }
    
 // Prompts user for options
 let uppers = confirm("Would you like to include Uppercase Letters?")
 let lowers = confirm("Would you like to include Lowercase Letters?")
 let numbers = confirm("Would you like to include Numbers?")
 let specchar = confirm("Would you like to include Special Characters?")
  
  let options = {
    passwordLength, uppers, lowers, numbers, specchar
  }
  return options
}
//These define the names of functions and objects

function generatePassword() {
  let options = passwordOptions();
  let concats = []
  let guaranted = []
  let finalpassword = []



if (options.numbers) {
  concats = concats.concat(numericalCharacter)
  guaranted.push(random(numericalCharacter))
}

if (options.specchar) {
  concats =[...concats, ...specialCharacter]
  guaranted.push(random(specialCharacter))
  }

if (options.uppers) {
    concats = concats.concat(upperLetters)
    guaranted.push(random(upperLetters))
  }

if (options.lowers) {
  concats = concats.concat(lowerLetters)
  guaranted.push(random(lowerLetters))
}

console.log(concats)
console.log(guaranted)


for(let i = 0; i < options.passwordLength; i++) {
finalpassword.push(random(concats))
}
for(let i = 0; i < guaranted.length; i++) {
  finalpassword[i] = guaranted[i]
  }
return finalpassword.join("")
}

