$(function(){
    $(".collection-title .archive-year").each(function(){
        $(this).fadeIn(100).delay(10).animate({
            left: "0px"
        }, 1000).fadeIn(100);
    })
    setTimeout(function(){
        $(".my_hide").each(function(){
            $(this).slideDown(1000);
        })
    },2000);

})
