$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  // toggle menu
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".navbar .menu li a").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //typing text animation
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "CIS Grad"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //yearchanged
  $(".copyright").text(new Date().getFullYear());
});
