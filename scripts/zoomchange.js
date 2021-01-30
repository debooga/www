let zoomIcon = document.getElementById("zoomIcon")

function setZoom(zoomVar)
{
    localStorage.setItem('zoom', zoomVar);
}

function toggleZoom() 
{
    if (localStorage.getItem('zoom') === 'zoomIn') {
        setZoom('zoomOut');
        zoomIcon.innerHTML = "zoom_out"
    } else {
        setZoom('zoomIn');
        zoomIcon.innerHTML = "zoom_in"
    }
}

(function () {
    if (localStorage.getItem('zoom') === 'zoomIn') {
        setZoom('zoomIn');
    } else {
            setZoom("zoomOut");
    }
})

zoomIcon.addEventListener("click", toggleZoom)