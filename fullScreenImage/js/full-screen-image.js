/*
 * 	full Screen Image 1.0 - jQuery plugin
 *	written by Weboniselab
 *	http://www.webonise.com
 *
 *	Copyright (c) 2009 Weboniselab (http://www.webonise.com)
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
(function($) {
    var obj = $([]);
    var tempOptions;
    $(window).bind('resize.fullScreenImage', function(){
        if (!obj.length) return;
        obj.fullScreenImage();
    });
    $('img.fsi').load(function(){
        if (!obj.length) return;
        obj.fullScreenImage();
    });
    $.fn.fullScreenImage = function(options){
        if(typeof options === 'undefined')
            options = tempOptions;
        else
            tempOptions = options;

    var defaults = {
        imageHeight: 		1000,
        imageWidth: 		1600,
        verticalSpace:		0,
        horizontalSpace:    0
    };
    var options = $.extend(defaults,options);
    this.each(function(){
    obj = $(this);
        var img = $('img', obj);
    var fullScreenImage = $('img.fsi');
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var objHeight = windowHeight - options.verticalSpace;
    var objWidth = windowWidth - options.horizontalSpace;
    var heightDifference;
    var widthDifference;

    obj.css({
        height:objHeight,
        width:objWidth,
        position: 'relative',
        overflow: 'hidden'
    });
    fullScreenImage.css({
        position: 'absolute',
        maxWidth: 'none',
        maxHeight:'none'
    });
    if(options.imageHeight <= windowHeight){
        heightDifference = windowHeight - options.imageHeight;
    }else{
        heightDifference = options.imageHeight - windowHeight;
    };
    if(options.imageWidth <= windowWidth){
        widthDifference = windowWidth - options.imageWidth;
    }else{
        widthDifference = options.imageWidth - windowWidth;
    }
    if(widthDifference <= heightDifference){
        var imageNewWidth = (windowHeight / options.imageHeight)*options.imageWidth;
        if(imageNewWidth < windowWidth){
            var imageNewHeight = (windowWidth / options.imageWidth)*options.imageHeight;
            var imageTopMinusMargin = -((imageNewHeight - windowHeight)/2);
            fullScreenImage.css({
                height:imageNewHeight,
                width:windowWidth,
                top:imageTopMinusMargin,
                left:0
            })

        }else{
        var imageLeftMinusMargin = -((imageNewWidth - windowWidth)/2);
        fullScreenImage.css({
            height:windowHeight,
            width:imageNewWidth,
            left:imageLeftMinusMargin,
            top:0
        })
        }
    }else{
        var imageNewHeight = (windowWidth / options.imageWidth)*options.imageHeight;
        if(imageNewHeight < windowHeight){
            var imageNewWidth = (windowHeight / options.imageHeight)*options.imageWidth;
            var imageLeftMinusMargin = -((imageNewWidth - windowWidth)/2);
            fullScreenImage.css({
                height:windowHeight,
                width:imageNewWidth,
                left:imageLeftMinusMargin,
                top:0
            })

        }else{
        var imageTopMinusMargin = -((imageNewHeight - windowHeight)/2);
        fullScreenImage.css({
            height:imageNewHeight,
            width:windowWidth,
            top:imageTopMinusMargin,
            left:0
        })
        }
    }
    return obj;
    })

    }
})(jQuery);