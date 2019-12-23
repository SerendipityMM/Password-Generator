// Assignment Code
var generateBtn = document.querySelector("#generate");
// Alert a Welcome Message
alert("Welcome to your Password Generator!");
// Prompt the User
var lengthPass = prompt("Please enter the length of your new password , which must be between 8-128 characters long:")
var symbolsInput = confirm("Would you like to include special characters?");
var numbersInput = confirm("Would you like to include Numbers?");
var lowercaseInput = confirm("Would you like to include Lowercase letters?");
var uppercaseInput = confirm("Would you like to include Uppercase letters?");

window.onload = function (){
  var generateBtn = document.querySelector('#generate');
  generateBtn.addEventListener('click', function(){				
    document.querySelector('#password').value = generate();
  });
}


// Generator Functions 
function generate( length=lengthPass ){
   var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var lowercase = 'abcdefghijklmnopqrstuvwxyz';
   var numbers = '0123456789';
   var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

   var all = uppercase + lowercase + numbers + symbols;

   var password = '';

   if (all === 0) {
     return '';
   }

   for (var i = 0; i < length; i++) {
       var character = Math.floor(Math.random() * all.length);
       password += all.substring(character, character + 1);
   }

   return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword(symbolsInput,numbersInput,lowercaseInput,uppercaseInput,lengthPass);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}



function copyToClipboard() {
// Copy the text received
  var copyText = document.getElementById("password");

 
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}


