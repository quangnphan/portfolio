$(document).ready(function () {
  const projects = [
    {
      id: 1,
      dataAos: "fade-left",
      link: "https://mernstack-ecommerce-03q21.netlify.app",
      imgSrc: "images/mern-ecommerce.png",
      name: "E-Commerce App",
      des: "A MERN stack app built with Reactjs, MaterialUI, Stripejs, and Redux Toolkit",
    },
    {
      id: 2,
      dataAos: "fade-right",
      link: "https://youtube-appppp.netlify.app",
      imgSrc: "images/youtube.png",
      name: "Youtube Clone",
      des: "Built with Reactjs, MaterialUI, react-router-dom, axios",
    },
    {
      id: 3,
      dataAos: "fade-left",
      link: "https://quangnphan.github.io/tip-calculator/",
      imgSrc: "images/tip-calculator.png",
      name: "Tip Calculator",
      des: "Calculate your tip with a simple web app using Reactjs",
    },
    {
      id: 4,
      dataAos: "fade-right",
      link: "https://quangnphan.github.io/cocktail-project/",
      imgSrc: "images/cocktails.png",
      name: "Drinks and Cocktails",
      des: "A cocktails database fetch from JSON Api, built with Reactjs",
    },
    {
      id: 5,
      dataAos: "fade-left",
      link: "https://music-player-qp.netlify.app",
      imgSrc: "images/music-player.png",
      name: "Music Player",
      des: "Built with Reactjs, Redux Toolkit, Tailwind, Axios",
    },
  ];

  const projectContent = document.getElementById("project-content");

  const mappedProjects = projects.map((item) => {
    return `
      <div key=${item.id} class="card" data-aos=${item.dataAos}>
      <a
        href=${item.link}"
        target="_blank"
      >
        <div class="box">
          <img
            class="project-img"
            src="${item.imgSrc}"
            alt="project-card"
          />
          <div class="text">${item.name}</div>
          <p>
          ${item.des}
          </p>
        </div>
      </a>
    </div>
      `;
  }).join('');

  projectContent.innerHTML = mappedProjects;

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  //slick slider
  $(".slider").slick({
    // the magic
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  });
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
    strings: ["Front-End Developer", "CIS Grad"],
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
  $(mybutton).click(function () {
    jQuery("html,body").animate({ scrollTop: 0 }, 0);
  });
});
