var isPolish = true

window.onload = function() {
    fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lang/en.json")
    .then(response => response.json())
    .then(data => {
        englishData = data
    })

    fetch("https://raw.githubusercontent.com/debooga/www/main/resources/lang/pl.json")
    .then(response => response.json())
    .then(data => {
        polishData = data
    })
}

function translate() {
    if(isPolish) {
        langData = englishData
        lang = "en"
    }
    else {
        langData = polishData
        lang = "pl"
    }

    for (var x in langData) {
        for (var n = 0; n < x.length; n++) {
            var keys = Object.keys(langData)
            var el = document.getElementById(keys[n])
            if(el !== null && typeof el !== 'undefined')
                el.innerHTML = langData[keys[n]]
        }
    }
    document.documentElement.lang = lang
    
    isPolish = !isPolish
    if(isPolish)
        lang = "en"
    else
        lang = "pl"

    document.getElementById("changeLanguage").getElementsByTagName('img')[0].src="./resources/img/svg/" + lang + ".svg"
}

document.getElementById("changeLanguage").addEventListener("click", function() { translate() })
