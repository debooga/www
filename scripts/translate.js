let languageElements = {
	en: 
	{
		home: "Home",
		contact: "Contact",
		project: "Project"
	},
	pl:
	{
		home: "Strona główna",
		contact: "Kontakt",
		project: "Projekt"
	}
}

let languageTag = document.documentElement.lang
let changeToEnglishButton = document.getElementById("changeToEnglish")
let changeToPolishButton = document.getElementById("changeToPolish")
 
function changeToEnglish() {
	document.documentElement.lang = "en"
	document.getElementById("home").innerHTML = languageElements.en.home
	document.getElementById("contact").innerHTML = languageElements.en.contact
	document.getElementById("project").innerHTML = languageElements.en.project
}
 
function changeToPolish() {
	document.documentElement.lang = "pl"
	document.getElementById("home").innerHTML = languageElements.pl.home
	document.getElementById("contact").innerHTML = languageElements.pl.contact
	document.getElementById("project").innerHTML = languageElements.pl.project
}
changeToEnglishButton.addEventListener("click", changeToEnglish)
changeToPolishButton.addEventListener("click", changeToPolish)