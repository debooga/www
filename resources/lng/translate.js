let languageElements = {
	en: 
	{
		menu_one: "Home",
		contact: "Contact"
	},
	pl:
	{
		menu_one: "Strona główna",
		contact: "Kontakt"
	}
}



let languageTag = document.documentElement.lang
let changeToEnglishButton = document.getElementById("changeToEnglish")
let changeToPolishButton = document.getElementById("changeToPolish")
 
function changeToEnglish() {
	document.documentElement.lang = "en"
	document.getElementById("menu_one").innerHTML = languageElements.en.menu_one
	document.getElementById("contact").innerHTML = languageElements.en.contact
}
 
function changeToPolish() {
	document.documentElement.lang = "pl"
	document.getElementById("menu_one").innerHTML = languageElements.pl.menu_one
	document.getElementById("contact").innerHTML = languageElements.pl.contact
}
changeToEnglishButton.addEventListener("click", changeToEnglish)
changeToPolishButton.addEventListener("click", changeToPolish)