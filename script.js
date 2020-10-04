// Assignment Code
var generateBtn = document.querySelector("#generate");
// var generatePassword = confirm("welcome, click generate password button to get your secure password!")


//password possible characters
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+"];
var num = ["1", "2", "4", "5", "6", "7", "8", "9", "0"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
  "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q",
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var howMany = ["8-128"]

// newArr variable is an array placeholder for user gen length
let newArr = [];







//logging variables
// console.log(symbols);
// console.log(num);
// console.log(lower);
// console.log(upper);


//this will welcome and tell you what to do next
alert("Welcome to your secure password generator. Please click ok and click generate password button to start!")



// target generate password 

// generateBtn.addEventListener("click",userPrompts());

// function userPrompts() {



// symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "", "_", "+"];


// var possibleChar = specialChar.concat(num,alphabet);




// Write password to the #password input
function generatePassword() {

  let howMany = prompt("How many characters would you like your password to have between 8-128");
  howMany = parseInt(howMany);
  if (howMany >= 8 && howMany <= 128) {
    console.log(howMany)
  } else {
    // console.log("this is not a number between 8-128")
    alert("this is not a number between 8-128, please refresh the page and try again!")
    return;
  }
  //this will ask x if they would like to include symbols
  let symbolsYn = confirm("Would you like your password to include symbols ?");
  console.log(symbolsYn);
  if (symbolsYn) {
    newArr = newArr.concat(symbols);
    console.log(newArr);
  } 
  // else {
  //   // console.log("this is not a number between 8-128")
  //   alert("okay great, moving along WITHOUT symbols.")
  // }

  let upperYn = confirm("Would you like to include UPPERCASE letters?");
  console.log(upperYn);
  if (upperYn) {
    newArr = newArr.concat(upper);
    console.log(newArr)
  } else {
    // console.log("this is not a number between 8-128")
    alert("okay great, moving along WITHOUT uppercase letters.")
  }
  let lowerYn = confirm("Would you like to include lowercase letters?");
  console.log(lowerYn)
  if (lowerYn) {
    newArr = newArr.concat(lower)
    console.log(newArr)
  } else {
    // console.log("this is not a number between 8-128")
    alert("okay great, moving along WITHOUT lowercase letters.")
  }

  let numberYn = confirm("Would you like to include numbers?");
  console.log(numberYn);
  if (numberYn) {
    newArr = newArr.concat(num)
    console.log(newArr)
    // console.log(howMany)
  } else {
    // console.log("this is not a number between 8-128")
    alert("okay great, moving along WITHOUT numbers.")
  }

  if (!symbolsYn && !upperYn && !lowerYn && !numberYn) {
    alert("You must chooose at least one cat. please start over")
    return;

  }

  //this empty string will contain random password
  let randomPassword = [];


  //this tells computer to randomize password options
  for (i = 0; i < howMany; i++){
    randomPassword.push(newArr[Math.floor(Math.random() * newArr.length)]);
    // console.log(randomPassword)
  }
  console.log(randomPassword)
    return randomPassword.join("");
}
  
  


  function writePassword (){
    let password =  generatePassword();
    console.log(password)
    let passwordText = document.querySelector("#password");
    console.log(password)
    console.log(passwordText)
    passwordText.value = password;
  }

  




// function generatePassword(){
//   var password = generatePassword();

//   for (i=0; i< howMany; i++) {
//     password+
//   }
// }
// loop 
// create a string w a random character



// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// }





// function getRandomLower(){

// }







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
