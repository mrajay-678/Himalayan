// document.addEventListener("DOMContentLoaded", () => {
//   document.addEventListener("mousemove", function (e) {
//     document.querySelector(".magic").style.left = e.pageX - 180;
//     document.querySelector(".magic").style.top = e.pageY - 180;
//     console.log(e.pageX)
//   });
// });
$(document).on("mousemove", function (e) {
  $(".magic").css({ "left": e.pageX - 180, "top": e.pageY - 180 });
});

if (screen.width <= 1024) {
  var tl = gsap.timeline()
    .to('.magic', {
      left: "random(-100, 100,5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
      top: "random(-100, 400,5)",
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      repeatRefresh: true // gets a new random leftand y value on each repeat
    })
}