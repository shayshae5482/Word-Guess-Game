var name;
name = prompt("Please enter your name");


document.write(name + " choose a letter and guess the words below.")


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var words = [
    "valentines day",
    "halloween",
    "christmas",
    "easter",
    "fourth of july",
];

var rightGuesses = 0;
var wrongGuesses = 0;
var remainingGuesses = 0;



for (var i = 0; i < letters.length; i++) {
    console.log(letters[i]);
};
