$(document).ready(function(){
//подцветка меню 
$(window).on("scroll", function() { 
    var scro= $(window).scrollTop();            
  var scr=0; 		// начало страницы меню студия
  var scr2=500; 	// начало меню услуги
  var scr3=1100;	// начало меню дизайнеры
  var scr4=2050;	// начало меню работы
  var scr5=2450;	// начало меню контакты
/*      положение  скрола относительно пункта Студия    */
if ( $(window).scrollTop() >= scr && scro <= scr2 ) {	
  $('#m1').addClass('active');
  $('#m1').css({'transition': '.5s'});
}
else $('#m1').removeClass('active');
/*      положение  скрола относительно пункта Услуги   */
if ( scro > scr2 && scro <= scr3 ) { 	
  $('#m2').addClass('active');
  $('#m2').css({'transition': '.5s'});
}
else $('#m2').removeClass('active');
/*      положение  скрола относительно пункта Дизайнеры   */
if ( scro > scr3 && scro <= scr4 ) {   
    $('#m3').addClass('active');
    $('#m3').css({'transition': '.5s'});
  }
else $('#m3').removeClass('active');

/*      положение  скрола относительно пункта Портфолио  */
if ( scro > scr4 && scro <= scr5 ) {   	
  $('#m4').addClass('active');
  $('#m4').css({'transition': '.5s'});
}
else $('#m4').removeClass('active');

/*      положение  скрола относительно пункта Контакты  */
if ( scro > scr5 ) {  	
  $('#m5').addClass('active');
  $('#m5').css({'transition': '.5s'});
}
else $('#m5').removeClass('active');
});

/// Прогресc скилов 
$(window).on('scroll', function(){
  let sc = $(window).scrollTop();
      sc1 = 1300;
      sc2 = 2100;
  if( $(window).scrollTop() >= sc1 && sc <= sc2){
    (function ( $ ) {
      $.fn.progress = function() {
        var percent = this.data("percent");
        this.css("width", percent+"%");
      };
    }
    ($));
    
      $(".ninety .bar").progress();
      $(".eighty .bar").progress();
      $(".hundred .bar").progress();
      $(".fifty .bar").progress();
      $(".forty .bar").progress();
      $(".ten .bar").progress();
      $(".twenty .bar").progress();
    
    
  }
  
});

////Текст набираеться автоматом
var typed = new Typed('.element', {
  strings: ['I Front-end Developer'],
  typeSpeed: 50,
  startDelay: 1000,
  cursorChar: '',

});

/// Маска для input
jQuery (function ($) {  
  $(function() {
    function maskPhone() {
      var country = $('#country option:selected').val();
      switch (country) {
        case "ru":
          $("#phone").mask("+7(999) 999-99-99");
          break;
        case "ua":
          $("#phone").mask("+380(999) 999-99-99");
          break;
      }    
    }
    maskPhone();
    $('#country').change(function() {
      maskPhone();
    });
  });
});


/* Параллакс от движения мыши */
$(function () {
  if ($(window).width() > 960)
  {
      $('body').parallax({
          'elements': [
              {
                  'selector': '.parallax',
                  'properties': {
                      'x': {
                          'left': {
                              'initial': 1.3,
                              'multiplier': 0.0010,
                              'unit': '%',
                              'invert': false
                          }
                      },
                      'y': {
                          'top': {
                              'initial': 5,
                              'multiplier': 0.0009,
                              'unit': '%',
                              'invert': false
                          }
                      }
                  }
              }
              
          ]
      });
  };
});

/// Планый скрол
  $('.scroll').click(function(){
    elementClick = $(this).attr('href')
    destination = $(elementClick).offset().top;
    $('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 1100);
  });

 $('.scroll-down').click(function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $(window).height()
  }, 1100);
});

// $('.box-menu').on('click', function(){
//   $('.menu-line').fadeOut('')
//   $('.menu-one').fadeIn('')
// });


});