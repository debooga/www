
fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lng/en.json?token=ASTWK2QW6JCJISO3ZABQCULACVNC2")
.then(response => response.json())
.then(data_en => {
	console.log(data_en.home)
})

fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lng/pl.json?token=ASTWK2SVNRRNII7MMCNECPDACVNWI")
.then(response => response.json())
.then(data_pl => {
	console.log(data_pl.project)
})

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