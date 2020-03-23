$(window).load(function(){
    $("#menu_icon").on("click",menuClick)

    $("#menu_icon").each(function(isOpen,data){
        $(this).data("isOpen",false)
    })

    function menuClick(){
        if($(this).data("isOpen")==false){
            $("#menu_icon").addClass("selected")
            $("#menu_list").stop()
            $("#menu_list").animate({"top":0,"opacity":1},400,"easeOutCubic")
            $(this).data("isOpen",true)
        }else{
            $("#menu_icon").removeClass("selected")
            $("#menu_list").stop()
            $("#menu_list").animate({"top":-300,"opacity":0},400,"easeOutCubic")
            $(this).data("isOpen",false)
        }
    }
    
})