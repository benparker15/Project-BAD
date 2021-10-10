const name = document.getElementById('Name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');
const radio = document.getElementsByName('gender');
const error = document.getElementById('lblError');
const form = document.querySelector('.fReg');
const region = document.getElementById('region');
const category = document.getElementById('category');
const file = document.getElementById('file');

let errorMessages = [];

form.addEventListener('submit', (e) => {

    errorMessages = [];

    validateName(); 
    validateEmail();
    validateUsername();
    validateAddress();
    validateGender();
    validateRegion();
    validateCategory();
    validateFile();


    
    if(errorMessages.length > 0){
        error.innerText = errorMessages[0];
        e.preventDefault();
    }else {
        //No error
        error.innerHTML = "submit sucess";
    }
    
})
    //

function validateName(){
    let value = Name.value.trim();

    //Validate Empty
    if (value === ''){
        errorMessages.push('Name must be filled!')
    }else if(value.length <5 || value.lenght >20){
        errorMessages.push("Name must be 5 - 20 characters long!")
    }else if(containsNumber(value)){
        errorMessages.push("Name must be alphabet only!")
    }

    function containsNumber(value){
        for (let i = 0; i < value.length; i++) {
            if(!isNaN (value[i])){
                return true;
            }
        }
        return false;
    }
}


function validateEmail(){
    let value = email.value.trim();

    //Validate Empty
    if (value === ''){
        errorMessages.push('Email must be filled!')
    }else if(!value.includes("@")){
        errorMessages.push("Email must have @")
    }else if(!value.endsWith(".com")){
        errorMessages.push("Email must end with .com")
    }
    
}

function validateUsername(){
    let value = username.value.trim();

    //Validate Empty
    if (value === ''){
        errorMessages.push('Username must be filled!')
    }else if (!value.startsWith("@")){
        errorMessages.push("Username must start with @")
    }
}

function validateAddress(){
    let value = address.value.trim();

    if(value === ''){
       errorMessages.push("Address must be filled!");
    }else if(countWords(value) <5){
        errorMessages.push("Address must be atleast 5 word!")
    }else if(!document.getElementById("address").value.includes("street")){
        errorMessages.push("Address must contain street!")
    }
    // else if(isAlphanumeric(value) == false){
    //     errorMessages.push("Address must be alphanumeric only!")
    // }
}


function validateGender(){
     //Gender validation
     let valid = false;
     for (let i = 0; i < radio.length; i++) {
          if (radio[i].checked == true){
              valid = true;
             return true;    
         }    
     }
     if(valid == false){
         errorMessages.push ('Gender must be chosen!')
     }
}

function validateRegion(){
    //Region validation
    if(region.value == ''){
        errorMessages.push('Region must be chosen!')
    }
}

function validateCategory(){
    //Region validation
    if(category.value == ''){
        errorMessages.push('Music category must be chosen!')
    }
}

function validateFile(){
    //File validation
    if(file.files.length <= 0){
        errorMessages.push ('Insert identity card!')
    }
}


// FUNCTION
function countWords(param){
    return param.split(' ').length;
}

function containNumber(param){
    for (let i = 0; i < param.length; i++) {
        if(param.charCodeAt(i) >= 48 && param.charCodeAt(i) <= 57){
            return true;
        }
    }
    return false;
}

function containCharacter(param){
    param = param.toLowerCase();
    for (let i = 0; i < param.length; i++) {
        if(param.charCodeAt(i) >= 97 && param.charCodeAt(i) <= 122){
            return true;
        }
    }
    return false;
}

function containOtherThanNumberAndCharacter(param){
    param = param.toLowerCase();
    for (let i = 0; i < param.length; i++) {
        if((param.charCodeAt(i) < 48 || param.charCodeAt(i) > 57) 
        && (param.charCodeAt(i) < 97 || param.charCodeAt(i) > 122)){ 
            return true;
        }
    }
    return false;
}

function isAlphanumeric(param){
    //containNumber
    if (containNumber(param) == false){
        return false;
    }
    //containCharacter
    if (containCharacter(param) == false){
        return false;
    }
    //Not contain both of them
    if(containOtherThanNumberAndCharacter(param)){
       return false;
    }
}