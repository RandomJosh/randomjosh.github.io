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

//changed the background colour upon selection

function changeBackgroundColour() {
	var eID = document.getElementById("bgColour");
	var colourtxt = eID.options[eID.selectedIndex].text;
	if (colourtxt == localStorage.getItem("fontColour")){
		alert("Cannot choose the same colour as the font! Please select another colour"); //alerts the user they cannot choose the same colour to avoid colour clash
	}else {
	document.body.style.backgroundColor = colourtxt;
	localStorage.setItem("backgroundColour", colourtxt); //sets the local storage for backgroundColour
	}
}

//changes the font colour upon selection

function changeFontColour() {
	var eID = document.getElementById("fontColour");
	var colourtxt = eID.options[eID.selectedIndex].text;
	if (colourtxt == localStorage.getItem("backgroundColour")){
		alert("Cannot choose the same colour as the background! Please select another colour"); //alerts the user they cannot choose the same colour to avoid colour clash
	}else {
	document.body.style.color = colourtxt;
	localStorage.setItem("fontColour", colourtxt); //sets the local storage for fontColour
	}
}

//Resets the styling options upon pressing the reset button and also resets the local storage data so it is not confused

function resetStyle(){
	var backgroundColour = "cornflowerblue";
	var fontColour = "black";
	document.body.style.backgroundColor = backgroundColour;
	document.body.style.color = fontColour;
	localStorage.setItem("backgroundColour", backgroundColour);
	localStorage.setItem("fontColour", fontColour);
	document.getElementById('bgColour').value=0;
	document.getElementById('fontColour').value=0;
}

//checks the styling options upon loading the page

function checkStyles(){
	document.body.style.backgroundColor = localStorage.getItem("backgroundColour");
	document.body.style.color = localStorage.getItem("fontColour");
	document.body.style.fontSize = localStorage.getItem("fontSize");
	
}

//Verification checks for contact form
//checks to ensure that the name meets the set criteria

function checkNameInput() {
	var name = document.getElementById("InputName").value;
	var letters = /^[A-Za-z ]+$/;

	if (name == ""){ //checks if its blank
		document.getElementById("nameAlertField").innerHTML = "Please enter your name";
		return false;
	}
	else if (name.length < 3) { //checks if it is below 3 characters
		document.getElementById("nameAlertField").innerHTML = "Please enter a valid name";
		return false;
	}
	else if (letters.test(name) == false) { //checks if it is only alphabetical characters used
		document.getElementById("nameAlertField").innerHTML = "Please enter a valid name";
		return false;
	}
	else {
		document.getElementById("nameAlertField").innerHTML = "";
		return true;
	}

}

//checks to ensure the email meets the set criteria

function checkEmailInput() {
	var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = document.getElementById("InputEmail").value;

	if (email == "") { //checks if its blank
		document.getElementById("emailAlertField").innerHTML = "Please enter your email";
		return false;
	}
	else if (emailPattern.test(email) == false) { //checks if it matches the email pattern
		document.getElementById("emailAlertField").innerHTML = "Please enter a valid email address";
		return false;
	}
	else {
		document.getElementById("emailAlertField").innerHTML = "";
		return true;

	}
}

//Checks the message to ensure that it meets the set criteria

function checkMessageInput() {
	var message = document.getElementById("InputMessage").value;
	if (message == ""){ //checks if its blank
		document.getElementById("messageAlertField").innerHTML = "Please enter a message";
		return false;
	}
	else if (message.length < 50) { //checks the length of the message input
		document.getElementById("messageAlertField").innerHTML = "Please enter a full message";
		return false;
	}
	else {
		document.getElementById("messageAlertField").innerHTML = "";
		return true;
	}
}

//checks the above functions to see if they return a true and will either allow or not allow them to submit

function buttonActivation() {
	if (checkMessageInput() && checkEmailInput() && checkNameInput()) {
		return true;
	}
	else {
		alert("Submission failed, please ensure all fields are filled");
		return false;
	}
}

//function to be used within the "entry page" which adds a personalised greeting

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
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
//Changes the navigation bar when screen width is of a certain size to allow for mobile support
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
