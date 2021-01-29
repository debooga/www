let languageElements = {
	en: 
	{
		menu_op_one: "Main page"
	},
	pl:
	{
		menu_op_one: "Strona główna"
	}
}

let languageTag = document.documentElement.lang
let changeToEnglishButton = document.getElementById("changeToEnglish")
let changeToPolishButton = document.getElementById("changeToPolish")
 
function changeToEnglish() {
	document.documentElement.lang = "en"
	document.getElementById("menu_op_one").innerHTML = languageElements.en.menu_op_one
}
 
function changeToPolish() {
	document.documentElement.lang = "pl"
	document.getElementById("menu_op_one").innerHTML = languageElements.pl.menu_op_one
}
changeToEnglishButton.addEventListener("click", changeToEnglish)
changeToPolishButton.addEventListener("click", changeToPolish)