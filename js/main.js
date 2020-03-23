$(window).load(function(){
    var windowWidth=$(window).innerWidth()

    visualSet()
    portfolioSet()
    portfolioEffect()
    quickmenu()
    
    $(window).on("resize",visualSet)
    $(window).on("resize",portfolioSet)
    $(document).on("scroll",skillEffect)
    $(document).on("scroll",portfolioEffect)
    $(document).on("scroll",quickmenu)
    $("#quick_top_menu").on("click",gotoTop)
    
    function visualSet(){
        $("#visual_wrap").css({"height":$(window).innerHeight()})
    }

    function portfolioSet(){
        var $portfolioList=$("#portfolio_list")
        var $portfolioLi=$("#portfolio_list").children()
        var $portfolioTbox=$(".portfolio_tbox")

        windowWidth=$(window).innerWidth()

        if(windowWidth>600){
            $portfolioLi.css({"height":$(".portfolio_img").find("img").innerHeight()})
        }else{
            $portfolioLi.css({"height":$(".portfolio_img").find("img").innerHeight()+$portfolioTbox.innerHeight()})
        }
        
        $portfolioList.css({"height":$portfolioLi.outerHeight()*$portfolioLi.size()})
        $("#con_wrap").css({"height":$portfolioList.outerHeight()+$("#skill_list").outerHeight()})
    }

    function skillEffect(){
        var skillLiSize=$("#skill_list li").size()

        if($(document).scrollTop()>500){
            for(var i=0; i<skillLiSize; i++){
                $("#skill_list li").eq(i).animate({"top":0,"opacity":1},1200+(400*i),"easeOutBack")
            }
        }
    }

    function portfolioEffect(){
        var scrollTop=$(document).scrollTop()
        var $portfolioLiSize=$("#portfolio_list li").size()
        
        if($(window).innerWidth()>980){
            for(var i=0; i<$portfolioLiSize; i++){
                if(scrollTop>1300+(850*i)){
                    $("#portfolio_list li").eq(i).animate({"left":0},1000,"easeOutCubic")
                }
            }
        }else{
            for(var i=0; i<$portfolioLiSize; i++){
                $("#portfolio_list li").eq(2*i).css({"left":-100})
                $("#portfolio_list li").eq(i).css({"left":0})
            }
            
        }
    }

    function quickmenu(){
        if($(document).scrollTop()>800){
            $("#quick_top_menu").stop()
            $("#quick_top_menu").animate({"opacity":1,"bottom":60},200,"easeOutBack")
        }else{
            $("#quick_top_menu").stop()
            $("#quick_top_menu").animate({"opacity":0,"bottom":-60},400,"easeOutBack")
        }
    }

    function gotoTop(){
        $("body,html").stop()
        $("body,html").animate({"scrollTop":0},400,"easeOutCubic")
    }

})

