//writing animation
var stroke;
stroke = new Vivus('mask', {
  start:'manual',
  type: 'scenario-sync',
  duration: 15,
  forceRender: false,
  animTimingFunction:Vivus.EASE,
},
function(){
  $("#mask").attr("class","done");
});

$(window).on('load',function(){
  $("#splash").delay(5000).fadeOut('slow');
  $("#splash_logo").delay(5000).fadeOut('slow');
  stroke.play();
});

//header
function FixedAnime(){
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){
    $('.openbtn').addClass('fadeDown');
    $('#header').addClass('dnone');
  }else{
    $('.openbtn').removeClass('fadeDown');
    $('#header').removeClass('dnone');
  }
}

$(window).scroll(function(){
  FixedAnime();
});

$('.openbtn').click(function(){
  $(this).toggleClass('active');
  $('#header').toggleClass('panelactive');
});
$('#g-nav li a').click(function(){
  $('.openbtn').removeClass('active');
  $('#header').removeClass('panelactive');
});



$(window).on('load',function(){
  var grid = new Muuri('.grid',{
    showDuration:600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.335, 1)',
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hoddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    }
  });

  $('.sort-btn li').on('click', function(){
    $('.sort-btn .active').removeClass('active');
    var className = $(this).attr('class');
    className = className.split(' ');
    $('.'+className[0]).addClass('active');
    if(className[0] == 'sort00'){
      grid.show('');
    }else{
      grid.filter('.'+className[0]);
    }
  });

  $('[data-fancybox]').fancybox({
    thumbs: {
      autoStart: true,
    },
  });
});

