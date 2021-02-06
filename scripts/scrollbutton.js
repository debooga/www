window.onscroll = function() { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 8900 || document.documentElement.scrollTop > 8900 ) {
        anime({ targets: '#scrollup', scale: 1 })
    } else {
        anime({ targets: '#scrollup', scale: 0 })
    }
}
  
function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
