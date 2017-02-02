var scrollLimit = 400;
function onArrowScroll() {
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


function activateStickyMenu() {
    var nav = document.querySelector('.main-nav');
    var navTop = nav.offsetTop;
    var navClone = nav.cloneNode(true);
    navClone.style.display = 'none';

    nav.parentNode.insertBefore(navClone, nav);

    return function () {
        if (document.body.scrollTop > navTop || document.documentElement.scrollTop > navTop) {
            nav.style.position = 'fixed';
            navClone.style.display = 'block';
        } else {
            nav.style.position = 'relative';
            navClone.style.display = 'none';
        }
    }
}




function onLoad()
 {
     document.querySelector("#arrow").addEventListener( 'click', slideUp, false);

     var onMenuScroll = activateStickyMenu();

     window.onscroll = function() {
         onArrowScroll();
         onMenuScroll();
    };
 }

 