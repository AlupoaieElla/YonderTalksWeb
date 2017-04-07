/* scrolling down smooth */
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    // Scroll efect - HAYA
    $('.container').each(function() {
        var $bgobj = $(this);

        $(window).scroll(function(ev) {
            if ($bgobj.isOnScreen()) {
                var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% ' + yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            }
        })
    })

    window.onload = function() {

        var background_characters = {
            badea: "#7D8B99",
            hagiu: "#8DC63F",
            paul: "#FFCF4A",
            pava: "#E84D3D",
            grigi: "#8D44AD"
        };
        var talk = document.getElementById("talk");
        var speakers__container = document.getElementById("speakers__container");
        speakers__container.addEventListener("click", function(e) {
            // e.target.dateset.colour
            var img = e.target.id;
            if (background_characters.hasOwnProperty(img)) {
                console.log("Found it!" + img);
                talk.style.backgroundColor = background_characters[img];
            }
        });

    };
});

/* parallax*/
$.fn.isOnScreen = function() {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
