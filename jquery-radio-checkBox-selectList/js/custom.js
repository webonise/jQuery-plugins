var _customSelect = function(){
    $("select").wrap("<div class='selectWrap'></div>")
    $(".selectWrap").prepend("<div class='customSelect'></div>")

    $("select").each(function(){
        $(this).prev().html($('option:selected',this).text());
    });

    $("select").click(function(){
        $(this).prev().html($('option:selected',this).text());
    })
}

var _customCheckBox = function(){
    $("input[type='checkbox']").each(function(){
        if(this.checked){
            if(this.disabled)
                $(this).wrap("<span class='checkboxWrap checked disabled'></span>");
            else
                $(this).wrap("<span class='checkboxWrap checked'></span>");
        }
        else{
            if(this.disabled)
                $(this).wrap("<span class='checkboxWrap disabled'></span>");
            else
                $(this).wrap("<span class='checkboxWrap'></span>");  
        }
        $(this).parent().after("<label for="+ $(this).attr("id")+">"+ $(this).attr("value") +"</label>")
    });

    $(document).on("change","input[type='checkbox']", function () {
        $(this).parent().toggleClass("checked"); 
    });
}

var _customRadioButton = function(){
    $("input[type='radio']").each(function(){
        if(this.checked){
            if(this.disabled)
                $(this).wrap("<span class='radioWrap checked disabled'></span>");
            else
                $(this).wrap("<span class='radioWrap checked'></span>");
        }
        else{
            if(this.disabled)
                $(this).wrap("<span class='radioWrap disabled'></span>");
            else
                $(this).wrap("<span class='radioWrap'></span>");  
        }
        $(this).parent().after("<label for="+ $(this).attr("id")+">"+ $(this).attr("value") +"</label>")
    });

    $(document).on("change","input[type='radio']", function () {
        $("input[name="+ $(this).attr("name") +"]").parent().removeClass("checked");
        $(this).parent().addClass("checked");
    });
}

$(window).load(function() {
    _customRadioButton();
    _customCheckBox();
    _customSelect();

    $("h2").click(function(){
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
});