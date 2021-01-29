let languageElements = {
	en: 
	{
		test: "T   ES  t ",
		menu_one: "Main page"
	},
	pl:
	{
		test: "Test",
		menu_one: "Strona główna"
	}
}

let languageTag = document.documentElement.lang
let changeToEnglishButton = document.getElementById("changeToEnglish")
let changeToPolishButton = document.getElementById("changeToPolish")
 
function changeToEnglish() {
	document.documentElement.lang = "en"
	document.getElementById("test").innerHTML = languageElements.en.test
	document.getElementById("menu_one").innerHTML = languageElements.en.menu_one
}
 
function changeToPolish() {
	document.documentElement.lang = "pl"
	document.getElementById("test").innerHTML = languageElements.pl.test
	document.getElementById("menu_one").innerHTML = languageElements.pl.menu_one
}
changeToEnglishButton.addEventListener("click", changeToEnglish)
changeToPolishButton.addEventListener("click", changeToPolish)