$(function() {
    var navigation = $('nav');
    var navPositon = navigation.offset().top;
    var navWidth = $(window).width();
    var content = $('section');

    var isMobile = function() {
        return ($(window).width() < 600);
    }

    /* triggering menu on mobile */ 
    $('.mobile-nav-trigger').click(function() {
        $('nav ul').toggleClass('visible');
    })

    /* Making sure the navWidth preserves its width on resize */
    $(window).resize(function() {
        navWidth = $(this).width();
        navigation.width(navWidth);
    });

    var setNavFixed = function() {
        navigation.width(navWidth);
        if($(this).scrollTop() >= navPositon) {
            navigation.addClass('fixed');
            
        } else {
            navigation.removeClass('fixed');
        }
    }
    $(window).scroll(function() {
        if(!isMobile()) {
            setNavFixed();
        }
    });
    
});