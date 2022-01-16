$(function() {

    let the_Window = $('html, body'),
        up = $('.up'),
        container = $('.container'),
        header = $('.header'),
        section = $('.section'),
        navbar = $('.navbar'),
        links = $('.header .links'),
        links_list = $('.header .links .mega-menu a'),
        mega_Mnue = $('.header .links .mega-menu'),
        menu = $('.header .links .icon i'),
        content = $('.header .content'),
        btns = $('.btns button'),
        arrow = $('.header .arrow i'),
        hidden = $('.our-work .hidden'),
        main_Color = $('.main-color').css('color');

    // Trigger Nice Scroll Function
    $("html").niceScroll({
        cursorcolor: main_Color,
        cursorwidth: '8px',
        cursorborder: 'none',
        cursorborderradius: 0,
    });

    // Arrow Up
    $(window).on('scroll', function() {

        if ($(this).scrollTop() > 300) {
            up.fadeIn();
        } else {
            up.fadeOut();
        };

        // Add Class Active In links List
        section.each(function() {

            if ($(window).scrollTop() > $(this).offset().top - 70) {

                let section_Id = $(this).attr('id');

                links_list.each(function() {

                    if (section_Id === $(this).data('section')) {

                        $(this).addClass('active').siblings().removeClass('active');

                    };

                });

            };

        });


    });

    // Click To Up 
    up.on('click', function() {

        the_Window.animate({
            scrollTop: 0,
        }, 1000);

    });

    $('body').css({
        paddingTop: navbar.innerHeight(),
    });

    // Navbar
    navbar.css({
        paddingLeft: container.offset().left,
        paddingRight: container.offset().left,
    });

    // Open The Menu
    menu.on('click', function(e) {

        e.stopPropagation();
        links.toggleClass('active');
        mega_Mnue.slideToggle(400);

    });

    // Sections Clicked
    section.on('click', function() {
        mega_Mnue.slideUp();
    });

    // Add Class Active In Btns
    btns.each(function() {
        $(this).on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');

            the_Window.animate({
                scrollTop: $('#' + $(this).data('section')).offset().top,
            }, 1000);
        });
    });

    // Add Class Active In The Menu
    links_list.each(function() {

        $(this).on('click', function(e) {

            e.preventDefault();

            the_Window.animate({
                scrollTop: $('#' + $(this).data('section')).offset().top - 55,
            }, 1000);

            $(this).addClass('active').siblings().removeClass('active');

            mega_Mnue.slideUp();

        });

    });

    // Height The Header And Center Intro Content
    header.height($(window).height() - navbar.innerHeight());
    content.css({
        height: ($(window).height() - $(window).height() / 2),
    });

    // Resize The Window
    $(window).on('resize', function() {
        header.height($(window).height());

        content.css({
            height: ($(window).height() - $(window).height() / 2),
        });
    });

    // Animation Arrow Header
    (function animateArrow() {
        arrow.animate({
            bottom: '20px',
        }, 1000, function() {
            $(this).animate({
                bottom: '-20px',
            }, 700, function() {
                animateArrow();
            });
        });
    }());

    // Arrow Go To About
    arrow.on('click', function() {
        the_Window.animate({
            scrollTop: $(`#${$(this).data('section')}`).offset().top,
        }, 700);
        mega_Mnue.slideUp();
    });


    // Show Overlay Img Our Work Section
    $('.our-work .box').each(function() {
        $(this).find('.overlay-img').hide();
        $(this).hover(() => {
            $(this).find('.overlay-img').slideToggle(500);
        });
    });

    hidden.slideUp(2000);

    // Show More From Our Work Section
    $('.our-work .show-more').on('click', function() {
        hidden.slideToggle(500);
        if ($(this).text() == 'Show More') {
            $(this).text('Show Less');
        } else {
            $(this).text('Show More');
        };
    });

    let arrwoPrev = $('.test .arrow1'),
        arrwoNext = $('.test .arrow2');

    // Check Slider Testimonials
    function checkClient() {
        $('.client:first').hasClass('active') ? arrwoPrev.fadeOut(0) : arrwoPrev.fadeIn();
        $('.client:last').hasClass('active') ? arrwoNext.fadeOut(0) : arrwoNext.fadeIn();
    };

    checkClient();

    // Next And Prev Comments Testimonials
    $('.test i').on('click', function() {
        if ($(this).hasClass('arrow2')) {
            $('.test .client.active').fadeOut(100, function() {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(100);
                checkClient();
            });
        } else {
            $('.test .client.active').fadeOut(100, function() {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(100);
                checkClient();
            });
        };
    });

    // Choose Info the Our Team From Box
    $('.our-team .team').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + $(this).data('team2')).addClass('active').siblings().removeClass('active');
    });

    // Choose Info the Our Team From Bullits
    $('.our-team .bullits li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + $(this).data('team')).addClass('active').siblings().removeClass('active');
    });

    // Height The Section Contact Us
    $('.contact').css({
        height: $(window).innerHeight(),
    });

});






















// let the_Team = document.querySelectorAll('.our-team .team'),
//     the_Bullits = document.querySelectorAll('.our-team .bullits li');

// the_Bullits.forEach((bullit) => {

//     bullit.addEventListener('click', function(e) {

//         the_Bullits.forEach((bull) => {

//             bull.classList.remove('active');

//         });

//         e.target.classList.add('active');

//         the_Team.forEach((team) => {

//             team.classList.remove('active');

//             if (team.classList.contains(e.target.dataset.team)) {

//                 team.classList.add('active');

//             };

//         });

//     });

// });

// the_Team.forEach((team) => {

//     team.addEventListener('click', function(e) {

//         the_Team.forEach((team2) => {

//             team2.classList.remove('active');

//         });

//         e.target.classList.add('active');
//         e.target.parentNode.classList.add('active');
//         e.target.parentNode.parentNode.classList.add('active');
//         e.target.parentNode.parentNode.parentNode.classList.add('active');

//         the_Bullits.forEach((bull) => {

//             bull.classList.remove('active');

//             if (e.target.classList.contains(bull.dataset.team) || e.target.parentNode.classList.contains(bull.dataset.team) || e.target.parentNode.parentNode.classList.contains(bull.dataset.team) || e.target.parentNode.parentNode.parentNode.classList.contains(bull.dataset.team)) {

//                 bull.classList.add('active');

//             };

//         });

//     });

// });