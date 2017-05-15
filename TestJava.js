//Accessibility buttons which are on the navigation bar

function changeFontSize(size) {
	document.body.style.fontSize = size + "px";
	var sections = document.getElementsByClassName("module.content");
	var i;
	for (i = 0; i < sections.length; i++) {
		sections[i].style.fontSize = size + "px";
	}
	localStorage.setItem("fontSize", size);
}

/*function changeBackgroundColour(colour) {
	var fontColour = document.body.style.color.text;

	if (fontColour == colour){
		alert("Cannot choose same colour as the font");
	}
	else {
		document.body.style.backgroundColor = colour;
		localStorage.setItem("backgroundColour", colour);
	}

}*/

function changeBackgroundColour() {
	var eID = document.getElementById("bgColour");
	var colourtxt = eID.options[eID.selectedIndex].text;
	if (colourtxt == localStorage.getItem("fontColour")){
		alert("Cannot choose the same colour as the font! Please select another colour");
	}else {
	document.body.style.backgroundColor = colourtxt;
	localStorage.setItem("backgroundColour", colourtxt);
	}
}


/*function changeFontColour(colour){
	var backgroundColour = document.body.style.backgroundColor.text;

	if (backgroundColour == colour){
		alert("Cannot choose same colour as the background");
	}
	else {
		document.body.style.color = colour;
		localStorage.setItem("fontColour", colour);
	}
}*/

function changeFontColour() {
	var eID = document.getElementById("fontColour");
	var colourtxt = eID.options[eID.selectedIndex].text;
	if (colourtxt == localStorage.getItem("backgroundColour")){
		alert("Cannot choose the same colour as the background! Please select another colour");
	}else {
	document.body.style.color = colourtxt;
	localStorage.setItem("fontColour", colourtxt);
	}
}

function resetStyle(){
	var backgroundColour = "cornflowerblue";
	var fontColour = "black";
	document.body.style.backgroundColor = backgroundColour;
	document.body.style.color = fontColour;
	localStorage.setItem("backgroundColour", backgroundColour);
	localStorage.setItem("fontColour", fontColour);
}

function checkStyles(){
	document.body.style.backgroundColor = localStorage.getItem("backgroundColour");
	document.body.style.color = localStorage.getItem("fontColour");
	document.body.style.fontSize = localStorage.getItem("fontSize");
	
}

function TestFunction() {

	alert("Hello!!");

}

//Verification checks for contact form

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
	var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = document.getElementById("InputEmail").value;

	if (email == "") {
		document.getElementById("emailAlertField").innerHTML = "Please enter your email";
		return false;
	}
	else if (emailPattern.test(email) == false) {
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
}

function buttonActivation() {
	if (checkMessageInput() && checkEmailInput() && checkNameInput()) {
		return true;
	}
	else {
		alert("Submission failed, please ensure all fields are filled");
		return false;
	}
}

function nameInput() {
	var Name = prompt("Please enter your name below")

	if (Name != ""){
		document.getElementById("entryMessage").innerHTML = "Welcome " + Name + "! Enjoy your stay on my website!"; 
	}
	else {
		document.getElementById("entryMessage").innerHTML = ""
	}
}

//Image Slideshow code so it automatically shifts

	var slideIndex = 0;
    showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
