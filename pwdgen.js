// var userInput = prompt("How many characters should your password be? (8-128)");

var charAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

function toUpperCase() {
    var arrayUpper = [];

    for (var i = 0; i < charAlpha.length; i++) {
        arrayUpper.push(charAlpha[i]);
        // console.log(arrayUpper[i].toUpperCase());
    }
};

toUpperCase();

var userInput = parseInt(prompt("Set your password length (8-128)"));

confirm('You selected ' + userInput + ' characters');

var specChar = confirm("Click OK to confirm including special characters");

var numeric = confirm("Click OK to confirm including numeric characters");

var lowerCase = confirm("Click OK to confirm including lower case characters");

var upperCase = confirm("Click OK to confirm including upper case characters");

