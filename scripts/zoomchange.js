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
        zoomIcon.innerHTML = "zoom_in"
        document.getElementById("bar").className = "zoomOut"
    } else {
        setZoom('zoomIn');
        zoomIcon.innerHTML = "zoom_out"
        document.getElementById("bar").className = "zoomIn"
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