$(window).load(function(){
    
    responsiveSet()

    $(window).on("resize",responsiveSet)
    $("#contact_list li a").on("click",contactClick)

    function responsiveSet(){
        $("#responsive_tablet_wrap").css({"height":$("#responsive_tablet").find("img").innerHeight()+70})
        $("#responsive_mobile_wrap").css({"height":$("#responsive_mobile").find("img").innerHeight()+70})
        $("#responsive_inner").css({"height":$("#responsive_pc_wrap").outerHeight()+$("#responsive_tablet_wrap").outerHeight()+$("#responsive_mobile_wrap").outerHeight()})
        $("#responsive_wrap").css({"height":$("#responsive_inner").outerHeight()+500})
    }

    function contactClick(){
        var contactlink=["010-6818-4884", "dongsong__@naver.com", "https://github.com/dongsong38"]

        if($("#contact_list li a").index($(this))==0){
            alert("010-6818-4884")
        }else if($("#contact_list li a").index($(this))==1){
            alert("dongsong__@naver.com")
        }
    }

})