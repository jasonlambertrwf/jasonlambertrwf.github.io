 // NAVBAR START
    // ***********> affix when LG
        var toggleAffix = function(affixElement, scrollElement, wrapper) {

            var height = affixElement.outerHeight(),
                top = wrapper.offset().top;

            if (scrollElement.scrollTop() >= top) {
                wrapper.height(height);
                affixElement.addClass("affix");
            } else {
                affixElement.removeClass("affix");
                wrapper.height('auto');
            }

        };


        $('[data-toggle="affix"]').each(function() {
            var ele = $(this),
                wrapper = $('<div></div>');

            ele.before(wrapper);
            $(window).on('scroll resize', function() {
                toggleAffix(ele, $(this), wrapper);
            });

            // init
            toggleAffix(ele, $(window), wrapper);
        });



      // *********>gestion du dropdown on mobile et pas en lg


        if ($('nav').width() > 736) {
            $('#dropdown01').prop('disabled', true);
            $('#dropdown02').prop('disabled', true);
        } else if ($('nav').width() < 736) {
            $('#dropdown01').prop('disabled', false);
            $('#dropdown02').prop('disabled', false);
        }
        
        $( window ).resize(function() {
            if ($('nav').width() > 736) {
            $('#dropdown01').prop('disabled', true);
            $('#dropdown02').prop('disabled', true);
        } else if ($('nav').width() < 736) {
            $('#dropdown01').prop('disabled', false);
            $('#dropdown02').prop('disabled', false);
        }
        });



      // *********> XS navbar = body noScroll
        $('.navbar-collapse').on('show.bs.collapse', function() {

            $('body').css('overflow', 'hidden');
        });

        $('.navbar-collapse').on('hidden.bs.collapse', function() {

            $('body').css('overflow', 'auto');
        });
    

      // *********> navbar border fun
        var docHeight = $(document).height(),
            windowHeight = $(window).height(),
            scrollPercent;

        $(window).scroll(function() {
            scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 101;

            $('.scroll-progress').width(scrollPercent + '%');
        });
        
        
        
        $( window ).resize(function() {
            $(window).scroll(function() {
            scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 101;

            $('.scroll-progress').width(scrollPercent + '%');
        });
        
        });
    

// NAVBAR END

   
        // Carsouel Bootstrap
        $('.carousel').carousel({
            interval: 4000
        })
    




      


    
        
    



        // button bak to top
        var scrolled = 400;
        $(window).scroll(function() {
            if ($(window).scrollTop() > scrolled) {
                $('a.btt').fadeIn('slow');
            } else {
                $('a.btt').fadeOut('slow');
            }
        });
   
        $('a.btt').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1400);
            return false;
        });
   