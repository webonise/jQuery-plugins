$(document).ready(function(){
    $(".productList .item").each(function(){
        $(this).children("a").hide();
        $(this).children("a").eq(0).show();
        $(this).append("<ul class='dataPager'></ul>");
        for(i=0;i<$(this).children("a").length;i++){
            $(this).children(".dataPager").append("<li></li>");
        }
        $(this).children("ul").children("li").eq(0).addClass("active");
        $(".dataPager").each(function(){
        if($(this).children().length==1)
        $(this).hide();
        })
    });
    var interval;
    var _this
    $(".productList .item").hover(function(){
        
        var active = 0;
        _this=$(this);
        interval = setInterval(function(){
            
            if(active==(_this.children("a").length)-1){
                active=-1;        
            }
           
            _this.children("a").hide();
            _this.children(".dataPager").children("li").removeClass("active");
            _this.children("a").eq(++active).show();
            _this.children(".dataPager").children("li").eq(active).addClass("active");
        
            
        },1000);
    },function(){
        _this.children("a").hide()
        _this.children(".dataPager").children("li").removeClass("active");
        _this.children("a").eq(0).show()
         _this.children(".dataPager").children("li").eq(0).addClass("active");
        clearTimeout(interval);

    });
});

