
var startButton = document.getElementById("generate")

var numChar = [0,1,2,3,4,5,6,7,8,9]

var lowerCasechar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var upperCasechar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var symBolschar = ["!","@","#","$","%"]

var userChoices = []

startButton.addEventListener('click', function() {

var passwordLength = prompt("choose length of password btwn 8-128")


var numBr = confirm("would you like to add numbers")

if (numBr === true){
    userChoices = userChoices.concat(numChar)
    
}
var lowerCase = confirm("would you like to add lowerCase")

if (lowerCase === true){
    userChoices = userChoices.concat(lowerCasechar)
}
var upperCase = confirm("would you like to add upperCase")

if (upperCase === true){
    userChoices = userChoices.concat(upperCasechar)
}

var symBols = confirm("would you like to add symBols")

if (symBols === true){
    userChoices = userChoices.concat(symBolschar)
}    

var temp = ""

for (let i = 0; i < passwordLength; i++) {
    temp += userChoices[Math.floor(Math.random() * userChoices.length)]
}

document.getElementById("password").value = temp;

});

