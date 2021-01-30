let languageTag = document.documentElement.lang
let changeToEnglishButton = document.getElementById("changeToEnglish")
let changeToPolishButton = document.getElementById("changeToPolish")

fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lng/en.json?token=ASTWK2SUHT2GXLATAEVR6LLACVP3W")
.then(response => response.json())
.then(data => {
	function changeToEnglish() {
		document.documentElement.lang = "en"
		document.getElementById("home").innerHTML = data.home
		document.getElementById("contact").innerHTML = data.contact
		document.getElementById("project").innerHTML = data.project
	}
	changeToEnglishButton.addEventListener("click", changeToEnglish)
})

fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lng/pl.json?token=ASTWK2SLFU7CLBTPEVBX35TACVP5K")
.then(response => response.json())
.then(data => {
	function changeToPolish() {
		document.documentElement.lang = "pl"
		document.getElementById("home").innerHTML = data.home
		document.getElementById("contact").innerHTML = data.contact
		document.getElementById("project").innerHTML = data.project
	}
	changeToPolishButton.addEventListener("click", changeToPolish)
})