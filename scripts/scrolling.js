window.onscroll = function() {onScroll()};

var scrollLimit = 400;
function onScroll() {
    if (document.body.scrollTop > scrollLimit || document.documentElement.scrollTop > scrollLimit) {
        document.querySelector("#arrow").className = "";
    } else {
        document.getElementById("arrow").className = "hidden";
    }
}

var slideUp = function(evt) {
    evt.preventDefault();

    var interval = setInterval(function() {
        window.scroll(0, document.body.scrollTop - 10);
        if (document.body.scrollTop == 0){
            clearInterval(interval);
        }
    }, 5);
}

function onLoad()
 {
     document.querySelector("#arrow").addEventListener( 'click', slideUp, false);
 }