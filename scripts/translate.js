fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lng/en.json?token=ASTWK2U2U6UO6EWHCQ3WBN3ACVOXA")
.then(response => response.json())
.then(data_en)

fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lng/pl.json?token=ASTWK2QSW5ZBFDM7QPOP6LTACVO2U")
.then(response => response.json())
.then(data_pl)

let languageTag = document.documentElement.lang
let changeToEnglishButton = document.getElementById("changeToEnglish")
let changeToPolishButton = document.getElementById("changeToPolish")
 
function changeToEnglish() {
	document.documentElement.lang = "en"
	document.getElementById("home").innerHTML = data_en.home
	document.getElementById("contact").innerHTML = data_en.contact
	document.getElementById("project").innerHTML = data_en.project
}
 
function changeToPolish() {
	document.documentElement.lang = "pl"
	document.getElementById("home").innerHTML = data_pl.home
	document.getElementById("contact").innerHTML = data_pl.contact
	document.getElementById("project").innerHTML = data_pl.project
}
changeToEnglishButton.addEventListener("click", changeToEnglish)
changeToPolishButton.addEventListener("click", changeToPolish)