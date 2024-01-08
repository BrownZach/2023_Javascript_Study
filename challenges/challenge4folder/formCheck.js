// Gain Access to form elements
const submitButton = document.getElementById('submit');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm(){
    /*
        In this method check whether name, email, and phone number have input.
        If they are blank turn the fields red.  Otherwise do nothing.
     */
    if(nameField === ""){
        nameField.style.background = "red";
    }
    if(emailField === ""){
        emailField.style.background = "red";
    }
    if(phoneField === ""){
        phoneField.style.background = "red";
    }
    alert("It is hooked up!");
}