  //Get the button
  var mybutton = document.getElementById("scrollup");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 8900 || document.documentElement.scrollTop > 8900 ) {
        anime({ targets: '#scrollup', scale: 1 })
    } else {
        anime({ targets: '#scrollup', scale: 0 })
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
