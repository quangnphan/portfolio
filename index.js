$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  //slick slider
  $(".slider").slick(
    {
    // the magic
    responsive: [
      {
        breakpoint: 2000,
        settings:{
          slidesToShow: 3,
          infinite:true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }, {
        breakpoint: 300,
        settings: "unslick" // destroys slick
      }]
  }
  );
  // toggle menu
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn").toggleClass("open");
  });

  $(".navbar .menu li a").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn").toggleClass("open");
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
