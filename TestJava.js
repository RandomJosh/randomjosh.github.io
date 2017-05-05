function changeFontSize(size) {
	var div = document.body;
	div.style.fontSize = size + "px";
}

function TestFunction() {

	alert("Hello!!");

}

function checkNameInput() {
	var name = document.getElementById("InputName").value;
	var letters = /^[A-Za-z ]+$/;

	if (name == ""){
		document.getElementById("nameAlertField").innerHTML = "Please enter your name";
		return false;
	}
	else if (name.length < 3) {
		document.getElementById("nameAlertField").innerHTML = "Please enter a valid name";
		return false;
	}
	else if (letters.test(name) == false) {
		document.getElementById("nameAlertField").innerHTML = "Please enter a valid name";
		return false;
	}
	else {
		document.getElementById("nameAlertField").innerHTML = "";
		return true;
	}

}

function checkEmailInput() {
	var emailPattern = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
	var email = document.getElementById("InputEmail").value;

	if (email == "") {
		document.getElementById("emailAlertField").innerHTML = "Please enter your email";
		return false;
	}
	else if (!email.value.match(emailPattern)) {
		document.getElementById("emailAlertField").innerHTML = "Please enter a valid email address";
		return false;
	}
	else {
		document.getElementById("emailAlertField").innerHTML = "";
		return true;

	}
}

function checkMessageInput() {
	var message = document.getElementById("InputMessage").value;
	if (message == ""){
		document.getElementById("messageAlertField").innerHTML = "Please enter a message";
		return false;
	}
	else if (message.length < 50) {
		document.getElementById("messageAlertField").innerHTML = "Please enter a full message";
		return false;
	}
	else {
		document.getElementById("messageAlertField").innerHTML = "";
		return true;
	}

function buttonActivation() {
	if (checkMessageInput() == true && checkEmailInput() == true && checkNameInput == true) {
		document.getElementById("submit").disabled = false;
	}
	else {
		document.getElementById("submit").disabled = true;
	}
}

}