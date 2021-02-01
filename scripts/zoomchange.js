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

        var el = document.getElementById('bar');
        var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);

        zoomIcon.innerHTML = "zoom_in"
        el.style.fontSize = (fontSize - 6) + 'px';
    } else {
        setZoom('zoomIn');

        var el = document.getElementById('bar');
        var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);

        zoomIcon.innerHTML = "zoom_out"
        el.style.fontSize = (fontSize + 6) + 'px';
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