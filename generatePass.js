
function generatePass() {

  var passLength = prompt("How many characters do you want to use to create your password? Choose between 8 - 128");

  //if the user do not enter a character, or length is less than 8 or more than 128 
  if (passLength === "" || passLength < 8 || passLength > 128) {
    alert ("Character length must be between 8 and 128");
  }

  else {

  var addNumbers = confirm("Include numbers?");
  var addUpperCase = confirm("Include uppercase characters?");
  var addLowerCase = confirm("Include lowercase characters?");
  var addSpecial = confirm("Include special characters?");

  //Variables for each type of characters, that the user can add
  var stringNumbers = "0123456789";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var stringSpecial = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";

  var newPassword = "";
  var newString = "";

    if (addSpecial) {
      newString += stringSpecial;
    }
    
    if (addNumbers) {
      newString += stringNumbers;
    }
      
    if (addUpperCase) {
      newString += uppercase;
    }
        
    if (addLowerCase) {
      newString += lowercase;
    }
  
  }

  for (var i = 0; i < passLength; i++) {

  newPassword = newPassword + newString.charAt(Math.floor(Math.random() * Math.floor(newString.length))); 

  }
  document.getElementById("password").value = newPassword;

}

//Select and copy text
function copyToClipboard() {
    
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.getElementById("password").value = "Password copied to clipboard"
  
  }