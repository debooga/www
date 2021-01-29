let languageElements = {
	en: 
	{
		menu_op_one: "Main page",
		test: "test"
	},
	pl:
	{
		menu_op_one: "Strona główna",
		test: "TEST"
	}
}


let languageTag = document.documentElement.lang
let changeToEnglishButton = document.getElementById("changeToEnglish")
let changeToPolishButton = document.getElementById("changeToPolish")
 
function changeToEnglish() {
	document.documentElement.lang = "en"
	document.getElementById("test").innerHTML = languageElements.en.test
}
 
function changeToPolish() {
	document.documentElement.lang = "pl"
	document.getElementById("test").innerHTML = languageElements.pl.test
}
changeToEnglishButton.addEventListener("click", changeToEnglish)
changeToPolishButton.addEventListener("click", changeToPolish)