window.onload = function fetchData() {
    fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lng/en.json")
    .then(response => response.json())
    .then(data => {
        englishData = data
    })

    fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lng/pl.json")
    .then(response => response.json())
    .then(data => {
        polishData = data
    })
}

function translate(langData, lang) {
    for (var x in langData) {
        for (var n = 0; n < x.length; n++) {
            var keys = Object.keys(langData)
            var el = document.getElementById(keys[n])
            if(el !== null && typeof el !== 'undefined')
                el.innerHTML = langData[keys[n]]
        }
    }
    document.documentElement.lang = lang
}

document.getElementById("changeToEnglish").addEventListener("click", function() { translate(englishData, "en") })
document.getElementById("changeToPolish").addEventListener("click", function(){ translate(polishData, "pl") })

