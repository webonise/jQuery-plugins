var slideWt;
var scrollTimer;
var scrollBarWt;
var scrollInnerBarWt;
var _scollStart;
var _scrollStop;
var _autoScroll;
var _scrollClick;
var _scrollDragDrop;
var _scrolLSecond;

_scollStart = function(){
    $(".scrollerWrap").mouseleave(function(){
        scrollTimer = window.setInterval(_autoScroll,10);
    });
};


_scrollStop = function(){
    $(".scrollerWrap").mouseenter(function(){
        window.clearTimeout(scrollTimer);
    });
};

var _init = function(){
    var html = $(".scroller").html();

    html=html + "<div style='clear:both;'></div>"
    $(".scroller").append(html);
    $(".scrollerWrap").append("<div class='scrollBar'><div class='SBInner innerFirst'></div><div class='SBInner innerSecond'></div></div>")

    var scrollerWt=0;

    $(".scroller .slide").each(function(){
      scrollerWt=scrollerWt+parseInt($(this).outerWidth(true));
    });

    $(".scroller").width(scrollerWt);
    scrollBarWt = $(".scrollBar").width();
    scrollInnerBarWt = $(".scrollBar .innerFirst").width();
    slideWt=$(".scroller .slide").outerWidth(true)*$(".scroller .slide").length/2;
};

_scrollClick=function(){
    $(".scrollBar").click(function(e){
        var scrollBarPos=e.pageX - $(this).offset().left;
        if(scrollBarPos > scrollInnerBarWt){
            $(".scrollBar .innerFirst").animate({left:scrollBarPos-scrollInnerBarWt},1000);
            var pos= slideWt*(scrollBarPos-scrollInnerBarWt)/(scrollBarWt);
            _scrolLSecond(scrollBarPos-scrollInnerBarWt);
        }
        else{
            $(".scrollBar .innerFirst").animate({left:0}, 1000);
            _scrolLSecond(0);
            var pos = 0;
        }
            $(".scroller").animate({left:-pos}, 1000);    
    });
}

_scrollDragDrop = function(){
    $(window).mouseup(function(event) {
        $(window).off("mousemove");
    });

    $(".scrollBar .innerFirst").click(function(event){
        event.stopPropagation();
    });

    $(".scrollBar .innerFirst").mousedown(function(event){
    
    var start = event.pageX;
    var innpos=parseInt($(".scrollBar .innerFirst").css("left"));
    
    $(window).mousemove(function( event ){
        var dragAmtpos = (event.pageX-start);
        dragAmtpos=innpos+dragAmtpos;
        if(dragAmtpos>0 && dragAmtpos<scrollBarWt)
        {
            $(".scrollBar .innerFirst").css("left",dragAmtpos);
            var pos=slideWt*(dragAmtpos)/(scrollBarWt);      
            $(".scroller").css("left",-pos);
            _scrolLSecond(dragAmtpos);
        }
        });
    });
}
_scrolLSecond = function(scrollInner1Pos){
    var scrollInner2pos = (scrollInner1Pos)-(scrollBarWt-scrollInnerBarWt)
    if(scrollInner2pos > 0){
        $(".scrollBar .innerSecond").css("left",scrollInner2pos-scrollInnerBarWt);
    }else{
       $(".scrollBar .innerSecond").css("left",-scrollInnerBarWt);
    }
}

_autoScroll = function(){
    var lft=parseInt($(".scroller").css("left"));
    
    $(".scroller").css("left",lft-1);
    if(lft < -slideWt){
        $(".scroller").animate({'left':0},0)  ;
    }
    scrollLft = (scrollBarWt)* -lft/slideWt;
    $(".scrollBar .innerFirst").css("left",scrollLft);
    _scrolLSecond(scrollLft);

};

$(document).ready(function(){
    $(".scroller").css("left",0);
    _init();
    scrollTimer= window.setInterval(_autoScroll,10);
    _scrollStop();
    _scollStart();
    _scrollClick();
    _scrollDragDrop();
});
