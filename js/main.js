// sticky header
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });
//burger menu
let menuOpen = document.getElementById ("menuToggler");
menuToggler.onclick = function menuToggle() {
  var miniMenu = document.getElementById("topnav");
  if (miniMenu.className === "navigation-list") {
    miniMenu.className += " responsive";
  } else {
    miniMenu.className = "navigation-list";
  }
}
// popup readmore
function PopUpHide(){
    $("#popup1").hide();
    document.body.style.overflow = ''
}
$(document).ready(function(){
    PopUpHide();
});
let popupOpen = document.getElementById ("popOp");
popupOpen.onclick = function PopUpShow(){
  $("#popup1").show();
  document.body.style.overflow = 'hidden'
}
let popupClose = document.getElementById ("popClo");
popupClose.onclick = function PopUpHide() {
  $("#popup1").hide();
  document.body.style.overflow = ''
}
// smooth scroll
const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
}
// slider
$('.slider').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});
// e-mail validation
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form2.userEmail();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form2.userEmail();
return false;
}
}
// back to top button
$(window).scroll(function() {
  if ($(this).scrollTop() > 30 ) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
      $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$("#home").offset().top},"1000");return false})})





// function menuToggle() {
//   var x = document.getElementById("topnav");
//   if (x.className === "navigation-list") {
//     x.className += " responsive";
//   } else {
//     x.className = "navigation-list";
//   }
// }