AOS.init();
function selectProduct(event) {
  $(".product-row").map(function (index, elem) {
    elem.classList.remove("active-row");
  });
  event.currentTarget.classList.add("active-row");
}

/* js for image slider */
/*
practice carosal concept using slick slider
for working perfectly add slick.js and slick.css 
file to your project folder
*/

/*--------------------------------
	Testimonial Slick Carousel .testimonial-text-slider .testimonial-image-slider
-----------------------------------*/
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: false,
  fade: true,
  asNavFor: ".slider-nav",
});
/*------------------------------------
Testimonial Slick Carousel as Nav
--------------------------------------*/
$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: "10px",
  responsive: [
    {
      breakpoint: 450,
      settings: {
        dots: false,
        slidesToShow: 3,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 420,
      settings: {
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
});
