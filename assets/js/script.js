 $(document).ready(function() {
            $('.js-scrollTo').on('click', function() { // Au clic sur un élément
                var page = $(this).attr('href'); // Page cible
                var speed = 750; // Durée de l'animation (en ms)
                $('html, body').animate({
                    scrollTop: $(page).offset().top
                }, speed); // Go
                event.preventDefault();
                return false;
            });
        });

        function move() {
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);

            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                }
            }
        }
 
        
            /* Navbar effect when scrolling */
        $(document).ready(function(){
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav-fix').outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 2);
function hasScrolled() {
    var st = $(this).scrollTop();
  
    console.log('st', st)
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.nav-fix').removeClass('nav-top').addClass('nav-up');
    } else {
        // Scroll Up
        if(st <= 70) {
          $('.nav-fix').removeClass('nav-up').removeClass('nav-top');
        } else {
          $('.nav-fix').removeClass('nav-up').addClass('nav-top');
        }
    }
    lastScrollTop = st;
}
});//]]> 
      