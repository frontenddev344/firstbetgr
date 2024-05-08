$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
    });
    $(".close").click(function(){
        $("body").removeClass("menuToggle");
    });
});


$(document).ready(function(){
    $(".drop-down-1").click(function(){
        $(".drop-menu").addClass("show");
    });
    $(".cross ").click(function(){
        $(".drop-menu").removeClass("show");
    });
});
$(document).ready(function(){
    $(".drop-down-2").click(function(){
        $(".drop-menu2").addClass("show2");
    });
    $(".cross").click(function(){
        $(".drop-menu2").removeClass("show2");
    });
});
// $(document).ready(function(){
//     $(".drop-down-3").click(function(){
//         $(".drop-menu3").addClass("show3");
//     });
//     $(".cross").click(function(){
//         $(".drop-menu3").removeClass("show3");
//     });
// });


$(document).ready(function(){
    $('.drop-down-3').click(function(){
        if ($('.drop-menu3').hasClass('hidden')) {
            $('.drop-menu3').removeClass('hidden').addClass('visible').show();
        } else {
            $('.drop-menu3').removeClass('visible').addClass('hidden').hide();
        }
    });
});







  $(window).scroll(function(){
    if($(window).scrollTop()>=200){
        $('header').addClass('fix-header');
    }
    else{
        $('header').removeClass('fix-header');
    };
  });