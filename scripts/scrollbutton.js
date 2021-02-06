window.onscroll = function() { scrollFunction() }
window.onload = function() { document.getElementById('scrollup').style.transform = "scale(0)" }

var showButton

function scrollFunction() {
    showButton = (document.body.scrollTop > 8900 || document.documentElement.scrollTop > 8900)

    if (showButton)
        anime({ targets: '#scrollup', scale: 1, duration: 300 })
    else
        anime({ targets: '#scrollup', scale: 0, duration: 300 })
}

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
