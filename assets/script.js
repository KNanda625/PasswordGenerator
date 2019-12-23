var charactersLower = "abcdefghijklmnopqrstuvwxyz";
var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()-_";


var password = document.querySelector("#password");
var copy = document.querySelector("#copy");
var securePwd = document.querySelector("#securepwd");
var passwordLength = document.querySelector("#length")
var numberSelect = document.querySelector("#number-select")
var symbolSelect = document.querySelector("#symbol-select")
var lower = document.querySelector("#lowercase")
var upper = document.querySelector("#uppercase")


function randomPwd() {
    var bank = "";
    
    if (numberSelect.checked === true) {
         bank += numbers;
    }
    if (symbolSelect.checked === true) {
        bank += symbols;
    }
    if (lower.checked === true) {
        bank += charactersLower;
    }
    if (upper.checked === true) {
        bank += charactersUpper;
    }
    if (bank === "") {
        alert ("Please check Uppercase, Lowercase, Number, and/or Symbol to generate password.");
    }

    // console.log('bank: ' + bank)
    // console.log('randomPwd');
    
    var pwd = "";
    // console.log('passwordLength: ' + passwordLength);
    // console.log('passwordLength.value: ' + passwordLength.value);

    for (var x = 0; x < passwordLength.value; x++) {
        var i = Math.floor(Math.random() * bank.length);
        pwd += bank.charAt(i);
        //console.log(pwd);
    }
    //console.log(pwd)
    return pwd;
}


function generate() {
    console.log(securePwd)
    securePwd.value = randomPwd();
}


function copyPassword() {
    document.getElementById("securepwd").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}
