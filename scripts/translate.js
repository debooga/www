let languageTag = document.documentElement.lang
let changeToEnglishButton = document.getElementById("changeToEnglish")
let changeToPolishButton = document.getElementById("changeToPolish")

fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lng/en.json")
.then(response => response.json())
.then(data => {
	function changeToEnglish() {
        for (var x in data) {
            for (var n = 0; n < x.length; n++) {
                var keys = Object.keys(data)
                var el = document.getElementById(keys[n])
                if(el !== null && typeof el !== 'undefined') {
                    el.innerHTML = data[keys[n]]
                }
            }
        }
        document.documentElement.lang = "en"
	}
	changeToEnglishButton.addEventListener("click", changeToEnglish)
})

fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lng/pl.json")
.then(response => response.json())
.then(data => {
	function changeToPolish() {
        for (var x in data) {
            for (var n = 0; n < x.length; n++) {
                var keys = Object.keys(data)
                var el = document.getElementById(keys[n])
                if (el !== null && typeof el !== 'undefined') {
                    el.innerHTML = data[keys[n]]
                }
            }
        }
		document.documentElement.lang = "pl"
	}
	changeToPolishButton.addEventListener("click", changeToPolish)
})
