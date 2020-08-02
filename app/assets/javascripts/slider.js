$(function() {
  $('.slider').slick({
    centerMode: true,
    centerPadding: '5vw',
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow:'<div class="prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow:'<div class="next"><i class="fas fa-chevron-right"></i></div>',
  });
  $(".toggleBtn").click(function (){
    $("ul").toggleClass("open");
  });
});