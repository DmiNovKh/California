$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },

        1000:{
            items:1
        }
    }
});

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

