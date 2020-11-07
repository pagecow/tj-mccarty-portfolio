window.onload = function() { 
    // header bottom border function
    window.onscroll = function() { addHeaderBorder() };
    var header = document.getElementById("header");
    function addHeaderBorder() {
        if (window.pageYOffset > 30) {
            header.classList.add("header-box-shadow");
        } else {
            header.classList.remove("header-box-shadow");
        }
    }

    // pop up description boxes
    // on hover, turn off display: none of box, and turn back on once no longer hover
}

