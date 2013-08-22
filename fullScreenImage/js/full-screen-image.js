/*
 *  full Screen Image 1.1 - jQuery plugin
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
    "use strict";
    var obj = $([]);
    var tempOptions;
    $(window).bind('resize.fullScreenImage', function(){
        if (obj.length){
            obj.fullScreenImage();
        }
    });
    $('img.fsi').load(function(){
        if (obj.length){
        obj.fullScreenImage();
        }
    });
    $.fn.fullScreenImage = function(options){
        if(typeof options === 'undefined'){
            options = tempOptions;
        }
        else {
            tempOptions = options;
        }

    var defaults = {
        imageHeight:        1000,
        imageWidth:         1600,
        horizontalSpace:      0,
        verticalSpace:    0
    };
    options = $.extend(defaults,options);
    this.each(function(){
    obj = $(this);
    var fullScreenImage = $('img.fsi');
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var objHeight = windowHeight - options.horizontalSpace;
    var objWidth = windowWidth - options.verticalSpace;
    var heightDifference;
    var widthDifference;
    var imageNewWidth;
    var imageNewHeight;
    var imageTopMinusMargin;
    var imageLeftMinusMargin;
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
    }
    if(options.imageWidth <= windowWidth){
        widthDifference = windowWidth - options.imageWidth;
    }else{
        widthDifference = options.imageWidth - windowWidth;
    }
    if(widthDifference <= heightDifference){
        imageNewWidth = (windowHeight / options.imageHeight)*options.imageWidth;
        if(imageNewWidth < windowWidth){
            imageNewHeight = (windowWidth / options.imageWidth)*options.imageHeight;
            imageTopMinusMargin = -((imageNewHeight - windowHeight)/2);
            fullScreenImage.css({
                height:imageNewHeight,
                width:windowWidth,
                top:imageTopMinusMargin,
                left:0
            });

        }else{
        imageLeftMinusMargin = -((imageNewWidth - windowWidth)/2);
        fullScreenImage.css({
            height:windowHeight,
            width:imageNewWidth,
            left:imageLeftMinusMargin,
            top:0
        });
        }
    }else{
        imageNewHeight = (windowWidth / options.imageWidth)*options.imageHeight;
        if(imageNewHeight < windowHeight){
            imageNewWidth = (windowHeight / options.imageHeight)*options.imageWidth;
            imageLeftMinusMargin = -((imageNewWidth - windowWidth)/2);
            fullScreenImage.css({
                height:windowHeight,
                width:imageNewWidth,
                left:imageLeftMinusMargin,
                top:0
            });

        }else{
        imageTopMinusMargin = -((imageNewHeight - windowHeight)/2);
        fullScreenImage.css({
            height:imageNewHeight,
            width:windowWidth,
            top:imageTopMinusMargin,
            left:0
        });
        }
    }
    return obj;
    });

    };
})(jQuery);