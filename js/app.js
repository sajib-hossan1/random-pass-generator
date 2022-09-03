const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$%^&*()_+/";

// selectors
const passwordBox = document.getElementById('pass-box');
const totalPassLength = document.getElementById('total-char');
const upperInput = document.getElementById('uppercase');
const lowerInput = document.getElementById('lowercase');
const numberInput = document.getElementById('containsNumber');
const symbolInput = document.getElementById('containsSymbols');


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password += getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }
    if(password.length < totalPassLength.value){
        return generatePassword(password);
    }
    passwordBox.innerText = trimfunc(password, totalPassLength.value);
}


document.getElementById('generate-btn').addEventListener(
    'click',
    function(){
        generatePassword();
    }
);

document.getElementById('pass-box-copy').addEventListener(
    'click',
    function(){
        navigator.clipboard.writeText(passwordBox.innerText);
        alert("Password Copied😉!")
    }
);


const trimfunc = (str, num) => {
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }
    else{
        return str;
    };
};


generatePassword();