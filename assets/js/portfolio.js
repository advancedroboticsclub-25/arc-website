$(document).ready(function () {
  for (let index = 1; index <= 4; index++) {
    $(".gallery-box").append(`
         
    <div class="portfolio-item image 2022 ">
    <img src="assets/imgs/arc_gallery/2022/2022 (${index}).jpg" />
    <div class="content">
        <h4>Startup fest -2022</h4>            
    </div>
</div>
`);
    $(".gallery-box").append(`
         
            <div class="portfolio-item image soccer ">
            <img src="assets/imgs/arc_gallery/2022/soccer (${index}).jpg" />
            <div class="content">
                <h4>Robo Soccer</h4>            
            </div>
        </div>
    `);
    $(".gallery-box").append(`
         
            <div class="portfolio-item image 2019">
            <img src="assets/imgs/arc_gallery/2019/2019 (${index}).jpg" />
            <div class="content">
                <h4>Robo Soccer</h4>            
            </div>
        </div>
    `);
  }
  $(".gallery .image")
    .not("." + "2022")
    .hide(200);
  $(".gallery .image")
    .filter("." + "2022")
    .show(400);

  $(".button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var filter = $(this).attr("data-filter");

    // if (filter == "all") {
    //   $(".gallery .image").show(400);
    // } else {
    $(".gallery .image")
      .not("." + filter)
      .hide(200);
    $(".gallery .image")
      .filter("." + filter)
      .show(400);
    // }
  });

  //MAGNIFIC-POPUP
  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    removalDelay: 500, //delay removal by X to allow out-animation
    gallery: {
      enabled: true,
    },

    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
    closeOnContentClick: true,
    midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
});
