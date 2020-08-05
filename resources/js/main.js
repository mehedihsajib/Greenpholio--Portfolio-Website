// Filterable portfolio
function scaleDown() {
 
  $('.work > figure').removeClass('current').addClass('not-current');
  $('.portfolio-nav > ul > li').removeClass('current-li');

}

function show(category) {

  scaleDown();

  $('#' + category).addClass('current-li');
  $('.' + category).removeClass('not-current');
  $('.' + category).addClass('current');

  if (category == "all") {
      $('.portfolio-nav > ul > li').removeClass('current-li');
      $('#all').addClass('current-li');
      $('.work > figure').removeClass('current, not-current');
  }

}

$(document).ready(function(){

  $('#all').addClass('current-li');

  $(".portfolio-nav > ul > li").click(function(){
      show(this.id);
  });

});


  // Owl Carouse (CLIENT SECTION)

  $(function () {
    $("#testimonial-slider").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: false,
      dots: true
    });
  });