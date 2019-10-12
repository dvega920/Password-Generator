// function to generate random password based on length of characters set by user
function randomPassword(length) {

    //stores the value of the password length chosen by user
    var passLength = parseInt(prompt('Set password length (8-128)'));
    console.log(passLength);

    var specChar = " `~!@#$%^&*()_+-=[]\{}|;':\",./<>?";
    var numeric = "0123456789";
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    var newArray = [];


    //validates user input to check for invalid characters, required character length and valid entries
    if (!passLength) {
        alert('must enter a number');
    } else
        if (passLength < 8 || passLength > 128) {
            alert('must be an integer 8-128 characters');
        } else {
            var confirmSpecChar = confirm('Click OK to confirm special characters')
            var confirmNum = confirm('Click OK to confirm numeric characters')
            var confirmLowerCase = confirm('Click OK to confirm lowercase characters')
            var confirmUpperCase = confirm('Click OK to confirm uppercase characters')
        }

    //Condition statements to confirm chosen character strings. 
    //Pushed character string variables into NEW empty array. 
    //Based on user confirmation(s), it will determine which character strings get pushed to the new array. 

    if (confirmSpecChar) {
        newArray.push(specChar);
    }
    if (confirmNum) {
        newArray.push(numeric);
    }
    if (confirmLowerCase) {
        newArray.push(lowerChar);
    }
    if (confirmUpperCase) {
        newArray.push(upperChar);
    }

    //for loop which uses the "length" parameter that is being passed into th function which contains the value of "passLength"
    //this sets the random number requirement from 0 to the value of the "length" parameter which is equal to "passLength".
    //first random number is made up of random number times the length of the newArray variable. 
    //second random number generates random number times the length of the newArray at a random index number.

    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * newArray.length);
        var random2 = Math.floor(Math.random() * newArray[random].length);
        password += newArray[random].charAt(random2);
    }

    // returns the value of password 
    return password;
}

var getTextEl = document.getElementById('password');
getTextEl.textContent += password.value;

var button = document.querySelector("#generate");
button.addEventListener('click', randomPassword);



// function call
// randomPassword(passLength);


