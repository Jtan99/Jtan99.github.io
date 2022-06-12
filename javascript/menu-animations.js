window.addEventListener('load', () => {
  $('.home_link').on('click',function() {
      goTo( $('#home') );
  });
  $('.about_link').on('click',function() {
      goTo( $('#about') );
  });
  $('.skills_link').on('click',function() {
      goTo( $('#skills') );
  });
  $('.projects_link').on('click',function() {
      goTo( $('#projects') );
  });
});

function goTo(el) {
    $('html, body').animate({
      scrollTop: el.offset().top + -100
    }, 'fast');
}

window.addEventListener('resize', () => {
  if(window.innerWidth>999){
    $(".menu_container_mobile").hide();
    $("#menu_arrow").removeClass('rotate');
  }
})

function menuControllerVisibility() {
  var menu = $(".menu_container_mobile");
  var menu_arrow = $("#menu_arrow");
  menu_arrow.toggleClass('rotate');
  if(menu.is(':visible')){
    menu.hide();
  }else{
    menu.css('display', 'block');
  }
}