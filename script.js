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
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: "10px",
  variableWidth: true,
  responsive: [
    {
      breakpoint: 450,
      settings: {
        dots: false,
        slidesToShow: 1,
        centerPadding: "0px",
        centerMode: true,
      },
    },
    {
      breakpoint: 420,
      settings: {
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        centerMode: true,
      },
    },
  ],
});
$("#testimonials-slider").slick({
  dots: true,
});
var words = [
  "Engagement !",
  "Awarding !",
  "Recognition !",
  "Perks !",
  "Incentives !",
  "Financial Independence !",
];
// var words = ["Organize", "Attend", "Share"];

window.addEventListener("load", function () {
  gsap.fromTo(
    ".cursor",
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
  );

  var tl = new TimelineMax({
    ease: SteppedEase.config(15),
    opacity: 0,
    repeat: -1,
  });

  var textClass = ".typewriter-text";

  var defaults = {
    opacity: 1,
    yoyo: true,
    repeat: 1,
    repeatDelay: 1,
  };
  words.forEach(function (word) {
    tl.add(TweenMax.to(textClass, Object.assign({ text: word }, defaults)));
  });
});
// [...$(".brand-image")].map(function (elem) {
//   var elementNode = elem;
//   console.log(elementNode);
//   // setInterval(function(elementNode){
//   //   console.log(elementNode);
//   // },1000)
// });
function toggleMobileSidebar() {
  $("#mobile-sidebar-wrapper").toggleClass("mobile-sidebar-wrapper-show");
  $("#mobile-menu-bar").toggleClass("fa-times");
  if ($(".mobile-sidebar-show")[0]) {
    $("body").css("overflowY", "hidden");
  } else {
    $("body").css("overflowY", "auto");
  }
}
function toggleMobileSolutionIcon() {
  $("#solution-menu-icon").toggleClass("fa-arrow-right");
  $("#solution-menu-icon").toggleClass("fa-arrow-left");
}
function toggleMobileSolutionIcon() {
  $("#solution-menu-icon").toggleClass("fa-arrow-right");
  $("#solution-menu-icon").toggleClass("fa-arrow-left");
}
function toggleSolutionMenu() {
  console.log("function got envoked");
  $(".solution-dropdown").toggleClass("solution-dropdown-active");
  // $(".dropdown-menu").toggleClass("show");
}
$("body").on("click", function (e) {
  if (
    e.target.classList[0] != "dropdown-toggle" &&
    $(".solution-dropdown").hasClass("solution-dropdown-active")
  ) {
    $(".solution-dropdown").removeClass("solution-dropdown-active");
  }
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("#ac-header").addClass("active-header");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $("#ac-header").removeClass("active-header");
  }
});
//3d effect

// /* Store the element in el */
// let el = document.getElementById("tilt");

// /* Get the height and width of the element */
// const height = el.clientHeight;
// const width = el.clientWidth;

// /*
//  * Add a listener for mousemove event
//  * Which will trigger function 'handleMove'
//  * On mousemove
//  */
// el.addEventListener("mousemove", handleMove);

// /* Define function a */
// function handleMove(e) {
//   /*
//    * Get position of mouse cursor
//    * With respect to the element
//    * On mouseover
//    */
//   /* Store the x position */
//   const xVal = e.layerX;
//   /* Store the y position */
//   const yVal = e.layerY;

//   /*
//    * Calculate rotation valuee along the Y-axis
//    * Here the multiplier 20 is to
//    * Control the rotation
//    * You can change the value and see the results
//    */
//   const yRotation = 20 * ((xVal - width / 2) / width);

//   /* Calculate the rotation along the X-axis */
//   const xRotation = -20 * ((yVal - height / 2) / height);

//   /* Generate string for CSS transform property */
//   const string =
//     "perspective(500px) scale(1.1) rotateX(" +
//     xRotation +
//     "deg) rotateY(" +
//     yRotation +
//     "deg)";

//   /* Apply the calculated transformation */
//   el.style.transform = string;
// }

// /* Add listener for mouseout event, remove the rotation */
// el.addEventListener("mouseout", function () {
//   el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
// });

// /* Add listener for mousedown event, to simulate click */
// el.addEventListener("mousedown", function () {
//   el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
// });

// /* Add listener for mouseup, simulate release of mouse click */
// el.addEventListener("mouseup", function () {
//   el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
// });
