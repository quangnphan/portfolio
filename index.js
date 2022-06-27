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
    strings: ["Frontend Developer", "CIS Grad"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //animation
  AOS.init();

  //yearchanged
  $(".copyright").text(new Date().getFullYear());

  //scroll top
  //Get the button:
  mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  $(mybutton).click(function()
	{
		jQuery('html,body').animate({scrollTop:0},0);
	})
});
