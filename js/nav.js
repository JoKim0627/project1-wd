$(document).ready(function(){       
       var scroll_start = 0;
       var offset = 150;
       $(document).scroll(function() { 
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset) {
              $(".navigation").addClass('navIndex');
           } else {
              $('.navigation').removeClass('navIndex');
           }
       });
});

$('.hamburger').on('click', function(){
      var scroll_start = window.pageYOffset;
      var offset = 150;
      if($('.menu').hasClass('open') && scroll_start < offset){
        $('.menu').removeClass('open');
        $('.nav-bar').removeClass('navIndex');
        $('.bg-bideo').removeClass('addHeight');
      } else if($('.menu').hasClass('open') && scroll_start > offset){
        $('.menu').removeClass('open');
      } else {
        $('.menu').addClass('open');
        $('.nav-bar').addClass('navIndex');
        $('.bg-bideo').addClass('addHeight');
      }
      // if($('.menu').hasClass('open') && scroll_start < offset){
        
      // }
});

$(".menu li").click(function(){
   window.location=$(this).find("a").attr("href"); 
   return false;
});


