// function ValidateLoginForm() {
// 	RemoveAllErrorMessage();

// var LoginEmail = document.getElementById('LoginEmail').value;
// var LoginPassword = document.getElementById('LoginPassword').value;
// var playerrEmail= localStorage.getItem('Email');
// var playerrPassword= localStorage.getItem('password');


// 	var PasswordValidationMessage="Password Error , Please Fill it Again";
// 	var	emailValidationMessage="Email Doesnt Exist , Please Register";

// 	if(LoginEmail != playerrEmail){
// 		ShowErrorMessage('LoginEmail',emailValidationMessage);
// 		return false;
// 	}


// 	if(LoginPassword !=playerrPassword){
// 		ShowErrorMessage('LoginPassword',PasswordValidationMessage);
// 		return false;
// 	}

// 	return true;
// }

// function ValidateRegistrationForm(){

// 	RemoveAllErrorMessage();

// 	var RegiName = document.getElementById('RegiName').value;
// 	var RegiEmailAddres = document.getElementById('RegiEmailAddres').value;
// 	var RegiPassword = document.getElementById('RegiPassword').value;
// 	var RegiConfirmPassword = document.getElementById('RegiConfirmPassword').value;

// 	var PasswordValidationMessage;
// 	var ConfirmPasswordMessage;
// 	var	emailValidationMessage;

// 	if(RegiName == ""){
// 		ShowErrorMessage('RegiName',"Please fill the filed.");
// 		return false;
// 	}else if(RegiName.length < 3 || RegiName.length > 20){
// 		ShowErrorMessage('RegiName',"Name should be minimum 3 and maximum 20 characters long.");
// 		return false;
// 	}
// 	else{
// 		localStorage.setItem("name",RegiName);

// 	}

// 	emailValidationMessage = isValidEmail(RegiEmailAddres);

// 	if(emailValidationMessage != "valid"){
// 		ShowErrorMessage('RegiEmailAddres',emailValidationMessage);
// 		return false;
// 	}

// 	PasswordValidationMessage = isValidPassword(RegiPassword);
// 	if(PasswordValidationMessage != "valid"){
// 		ShowErrorMessage('RegiPassword',PasswordValidationMessage);
// 		return false;
// 	}

// 	ConfirmPasswordMessage = isValidPassword(RegiConfirmPassword);
// 	if(ConfirmPasswordMessage != "valid"){
// 		ShowErrorMessage('RegiConfirmPassword',ConfirmPasswordMessage);
// 		return false;
// 	}

// 	if(RegiPassword != RegiConfirmPassword){
// 		ShowErrorMessage('RegiConfirmPassword',"Password not match.");
// 		return false;
// 	}

// 	ShowLoginForm();
// }


// function ValidateForgotPasswordForm(){

// 	RemoveAllErrorMessage();

// 	var forgotPassEmail = document.getElementById('forgotPassEmail').value;

// 	var	emailValidationMessage;
// 	emailValidationMessage = isValidEmail(forgotPassEmail);

// 	if(emailValidationMessage != "valid"){
// 		ShowErrorMessage('forgotPassEmail',emailValidationMessage);
// 		return false;
// 	}
// }



// function ValidateResetPasswordForm(){

// 	RemoveAllErrorMessage();

// 	var NewPassword = document.getElementById('NewPassword').value;
// 	var ConfirmNewPassword = document.getElementById('ConfirmNewPassword').value;

// 	var PasswordValidationMessage;
// 	var ConfirmPasswordMessage;

// 	PasswordValidationMessage = isValidPassword(NewPassword);
// 	if(PasswordValidationMessage != "valid"){
// 		ShowErrorMessage('NewPassword',PasswordValidationMessage);
// 		return false;
// 	}

// 	ConfirmPasswordMessage = isValidPassword(ConfirmNewPassword);
// 	if(ConfirmPasswordMessage != "valid"){
// 		ShowErrorMessage('ConfirmNewPassword',ConfirmPasswordMessage);
// 		return false;
// 	}

// 	if(NewPassword != ConfirmNewPassword){
// 		ShowErrorMessage('ConfirmNewPassword',"Password not match.");
// 		return false;
// 	}

// 	return true;
// }

// function RemoveAllErrorMessage(){

// 	var allErrorMessage = document.getElementsByClassName('error-message');
// 	var allErrorFiled = document.getElementsByClassName('error-input');
// 	var i;

// 	for(i=(allErrorMessage.length - 1); i>=0; i--){
// 		allErrorMessage[i].remove();
// 	}

// 	for(i=(allErrorFiled.length-1);i>=0;i--){
// 		allErrorFiled[i].classList.remove('error-input');
// 	}
// }

// function ShowErrorMessage(InputBoxID,Message){

// 	var InputBox = document.getElementById(InputBoxID);
// 	InputBox.classList.add('error-input');
// 	InputBox.focus();

// 	var ErrorMessageElement = document.createElement("p");
// 	ErrorMessageElement.innerHTML = Message;
// 	ErrorMessageElement.classList.add('error-message');
// 	ErrorMessageElement.setAttribute("id",InputBoxID+'-error');

// 	InputBox.parentNode.insertBefore(ErrorMessageElement, InputBox.nextSibling);

// }

// function isValidEmail(email){

// 	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 	if(email == ""){
// 		return "Please fill the field.";
// 	}

// 	if(emailRegex.test(email) == false){
// 		return "This is not a valid email.";
// 	}
//      localStorage.setItem("Email",email);
// 	return "valid";
// }

// function isValidPassword(password) {

// 	const minLength = 4;
// 	const maxLength = 32;
// 	const letterNumberRegexSpecialChar = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{4,}$/;

// 	if(password == ""){
// 		return "Please fill the field."
// 	}

// 	if (password.length < minLength || password.length > maxLength) {
// 		return "Password length should be minimum 4 & maximum 32 characters.";
// 	}

// 	if (!letterNumberRegexSpecialChar.test(password)) {
// 		return "Password should contain alphabetic, numeric and special characters.";
// 	}
// 	localStorage.setItem("password",password);
// 	return "valid";
// }

///////////////////////registration////////////////////////

var RegiName = document.getElementById("RegiName")
var mail = document.getElementById("RegiEmailAddres")
var pass = document.getElementById("RegiPassword")
var repass = document.getElementById("RegiConfirmPassword")

var lap = document.getElementById("lap")
var lap2 = document.getElementById("lap2")
var lap4 = document.getElementById("lap4")


function blo() {
	if (RegiName.value.length < 3) {
		RegiName.style.border = "solid 5px red"
		lap.innerText = "invalid name"
	} else {
		localStorage.setItem("name", RegiName.value);
		lap.innerText = ""
	}
}

function checkpass() {
	if (repass.value !== pass.value) {
		lap4.innerText = "password and repeat password should be the same"
	} else {
		localStorage.setItem("password", repass.value);
		lap4.innerText = ""
	}
}

function checkmail() {
	if (mail.value.indexOf('@') < 0) {
		mail.style.border = "solid 5px red"
		lap2.innerText = "invalid email"
	}
	else {
		localStorage.setItem("Email",mail.value);
		lap2.innerText = ""
	}
}

//////////////////login///////////////////

var lap5 = document.getElementById("lap5")
var lap6 = document.getElementById("lap6")


function ValidateLoginForm() {
var LoginEmail = document.getElementById('LoginEmail').value;
var LoginPassword = document.getElementById('LoginPassword').value;

var playerrEmail= localStorage.getItem('Email');
var playerrPassword= localStorage.getItem('password');



	if(LoginEmail !== playerrEmail){
		lap5.innerText = "uncorrect email"
		return false;
	}


	if(LoginPassword !== playerrPassword){
		lap6.innerText = "uncorrect password"
		return false;
	}

	return true;
}
