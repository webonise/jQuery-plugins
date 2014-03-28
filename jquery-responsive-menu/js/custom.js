$(document).ready(function() {
    var touchBtn = $(".responsiveButton");

    touchBtn.click(function (e) {
        e.preventDefault();

        var body = $('body'),
            vsMenu = $('.vsMenu'),
            vsMenuPosition = vsMenu.css('left'),
            vsMenuWidth = vsMenu.width(),
            windowWidth = $(window).width();

        if (vsMenuPosition == ('-' + vsMenuWidth + 'px')) {
            $(this).addClass("vsMenuOpen");
            vsMenu.animate({
                left: '0px'
            });
            body.animate({
                left: vsMenuWidth + 'px'
            });
            body.css({
                position: "absolute",
                overflow: "hidden",
                width: windowWidth + 'px'
            });
        } else {
            touchBtn.removeClass("vsMenuOpen");
            vsMenu.animate({
                left: '-' + vsMenuWidth + 'px'
            }, function () {
                vsMenu.removeAttr('style');
            });
            body.stop().animate({
                left: '0px'
            }, function () {
                body.removeAttr('style');
            });
        }
    });
});

$(window).resize(function() {
    var windowWidth = $(window).width();
    var touchBtn = $(".responsiveButton");
    if(windowWidth >767){
        if(touchBtn.hasClass('vsMenuOpen')) {
            touchBtn.trigger('click');
        }
    }
});

