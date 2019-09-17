var nav_offset_top = $(".navbar").height()

function navbarFixed2() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= nav_offset_top) {
      $(".navbar").addClass("navbar_fixed");
      $(".navbar").removeClass("navbar_normal");
    } else {
      $(".navbar").addClass("navbar_normal");
      $(".navbar").removeClass("navbar_fixed");
    }
  })
}

navbarFixed2()
