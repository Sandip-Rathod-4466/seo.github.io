$(document).ready(function(){

    console.log("ready");
    // js code 

    // Sticky navigation
    $(window).scroll(function(){

        let top = $(window).scrollTop();
        if(top > 1){
            $(".navbar").addClass('navbar-styky');
        }else{
            $(".navbar").removeClass('navbar-styky');
        }

    });

    // hide menu
    $('.nav-link').click(function(){
        $("#navbarSupportedContent").removeClass('show');
    })


});