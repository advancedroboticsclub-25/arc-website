$(document).ready(function () {
  $(".scroll-top").hide();
  // $("#noticeModal").modal("toggle");
  // for (var i = 0, len = data.length; i < len; i++) {
  //   console.log(data[i]);
  //   $(".team-wrapper").append(`

  //      <div class="swiper-slide testi-item">
  //      <img src="${data[i].image}" alt="Team-Pic" />

  //      <i class="fas fa-quote-left"></i>

  //      <div class="intro">
  //          <h3>${data[i].name}</h3>
  //          <h5>${data[i].Role}</h5>
  //      </div>
  //  </div>
  //     `);
  // }
  /*--------------- Navbar Toggler ---------------*/
  $("#menu-btn").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("active");
  });

  /*--------------- Scroll-Top ---------------*/
  $(window).on("scroll", function () {
    $("#menu-btn").removeClass("fa-times");
    $(".navbar").removeClass("active");

    // STICKY HEADER
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".scroll-top").fadeIn();
      } else {
        $(".scroll-top").fadeOut();
      }
    });
  });
  var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    $header = $("header");
  function headerAnchors() {
    var pageDirection = "";
    var thisElement;
    var timeout;
    $header.find("nav li a").click(function (event) {
      event.preventDefault();
      $(".cube").removeClass("reverse-" + pageDirection);
      thisElement = $(this);
      pageDirection = thisElement.data("direction");
      reverseDirection = thisElement.data("reverse-direction");
      thisElement.parent().addClass("active").siblings().removeClass("active");
      $(".cube").addClass("reverse-" + pageDirection);

      $header.addClass("go-out");
      $("#wrap").addClass("active");
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $header.removeClass("go-out");
        $("#wrap").removeClass("active");
      }, 1000);
    });
  }
  headerAnchors();
  $(window).resize(function () {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
  });
});
