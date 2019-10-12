//stores the value of the password length chosen by user
var passLength = parseInt(prompt('Set password length (8-128)'));

// function to generate random password based on length of characters set by user
function randomPassword(length) {
    var specChar = " `~!@#$%^&*()_+-=[]\{}|;':\",./<>?";
    var numeric = "0123456789";
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charset = " `~!@#$%^&*()_+-=[]\{}|;':\",./<>?0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var password = "";


    if (!passLength) {
        alert('must enter a number');
    } else
        if (passLength < 8) {
            alert('must be an integer 8-128 characters');
        } else {
            var confirmSpecChar = confirm('Click OK to confirm special characters')
            var confirmNum = confirm('Click OK to confirm numeric characters')
            var confirmLowerCase = confirm('Click OK to confirm lowercase characters')
            var confirmUpperCase = confirm('Click OK to confirm uppercase characters')
        }
    if (
        (confirmSpecChar) &&
        (confirmNum) &&
        (confirmLowerCase) &&
        (confirmUpperCase)) {

        for (var i = 0; i < length; i++) {
            var random = Math.floor(Math.random() * length);
            // password += specChar.charAt(random);
            // password += numeric.charAt(random);
            // password += lowerChar.charAt(random);
            // password += upperChar.charAt(random);
            password += charset.charAt(i);
        }
    }
    return password;
}


// Having trouble structuring my conditionals. 

// function call to run random password generator
// randomPassword(passLength);










































// var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var specChar = [' ', '!', '\"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '\[', '\\', '\]', '^', '_', '`', '{', '|', '}', '~',]
// var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var alphaUp = [];
// var newCharArray = [];
// var password = '';





// //function to convert alpha array to upper case
// function alphaUpper() {
//     for (var i = 0; i < alpha.length; i++) {
//         alphaUp.push(alpha[i].toUpperCase());
//     }
// }
// alphaUpper();

// genPass(passLength);





