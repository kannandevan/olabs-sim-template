$(document).ready(function () {
    $(".nav-hidden-icon").click(function(){
        $(".nav").removeClass("d-none");
        $(".nav").hide();
        $(".nav").fadeIn();
    })
    $(window).scroll(function() {
        var $height = $(window).scrollTop();
      if($height > 50) {
          $(".hidden-logo").fadeIn(0)
            $('.hidden-logo').removeClass('d-none');
            $("nav").addClass("shadow-sm");
        } else {
            $(".hidden-logo").fadeOut(0)
            $('.hidden-logo').addClass('d-none');
            $("nav").removeClass("shadow-sm");

        }
    });
})