let zoomIcon = document.getElementById("zoomIcon")

localStorage.setItem('zoom', 'zoomOut')

function setZoom(zoomVar)
{
    localStorage.setItem('zoom', zoomVar);
}

function toggleZoom() 
{
    if (localStorage.getItem('zoom') === 'zoomIn') {
        setZoom('zoomOut');
    
        var el = document.querySelectorAll("div#bar, li#resize , h1, p");
        for (var i= 0; i < el.length; i++) {
            var style = window.getComputedStyle(el[i], null).getPropertyValue('font-size');
            var fontSize = parseFloat(style);
            el[i].style.fontSize = (fontSize - 3) + 'px';
        }

        zoomIcon.innerHTML = "zoom_in"
    } else {
        setZoom('zoomIn');

        var el = document.querySelectorAll("div#bar, li#resize, h1, p");
        for (var i= 0; i < el.length; i++) {
            var style = window.getComputedStyle(el[i], null).getPropertyValue('font-size');
            var fontSize = parseFloat(style);
            el[i].style.fontSize = (fontSize + 3) + 'px';
        }

        zoomIcon.innerHTML = "zoom_out"
    }
}

(function () {
    if (localStorage.getItem('zoom') === 'zoomIn') {
        setZoom('zoomIn');
        document.body.className = "zoomIn"
    } else {
            setZoom("zoomOut");
            document.body.className = "zoomOut"
    }
})

zoomIcon.addEventListener("click", toggleZoom)
