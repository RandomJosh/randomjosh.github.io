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
	}
	else if (name.length < 3) {
		document.getElementById("nameAlertField").innerHTML = "Please enter a valid name";
	}
	else if (letters.test(name) == false) {
		document.getElementById("nameAlertField").innerHTML = "Please enter a valid name";
	}
	else {
		document.getElementById("nameAlertField").innerHTML = "";
	}

}

function checkEmailInput() {

}

function checkMessageInput() {
	var message = document.getElementById("InputMessage").value;
	if (message == ""){
		document.getElementById("messageAlertField").innerHTML = "Please enter a message";
	}
	else if (message.length < 50) {
		document.getElementById("messageAlertField").innerHTML = "Please enter a full message";
	}

}