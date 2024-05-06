$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
    });
    $(".close").click(function(){
        $("body").removeClass("menuToggle");
    });
});


// $(document).ready(function(){
//     $(".drop-down").click(function(){
//         $(".drop-menu").addClass("show");
//     });
//     $(".cross").click(function(){
//         $(".drop-menu").removeClass("show");
//     });
// });








  $(window).scroll(function(){
    if($(window).scrollTop()>=200){
        $('header').addClass('fix-header');
    }
    else{
        $('header').removeClass('fix-header');
    };
  });