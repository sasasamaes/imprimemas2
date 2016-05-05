 var map;
$(document).ready(function(){

  var distancia = $('.navbar-fixed-top').offset();

  if(distancia.top > 0){
    nav.removeClass('normal').addClass('efecto');
  }
  //modals
  $('section#pantallas a').on('click',function(){
    $('#modal img').attr('src',$(this).attr('data-image-url'));
  })

  var nav = $('.navbar-fixed-top');

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if(scroll >= 300){
      nav.removeClass('normal').addClass('efecto');
    }else{
      nav.removeClass('efecto').addClass('normal');
    }

  });

  $('section#servicios .anima1').waypoint(function(){
    $(this).addClass('animated tada');
  },{
    offset:'60%'
  });

  $('section#principal .anima1').waypoint(function(){

    $(this).addClass('animated pulse');

  },{
    offset:'60%'
  });

  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: false, // Boolean. If true, update the URL hash on scroll
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });
  
  
  

});
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 9.967952, lng: -84.119501},
  zoom: 8
  });
}