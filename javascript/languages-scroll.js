window.addEventListener('load', () => {
  var displacement = -2;
  self.setInterval(() => {
    var $elem=$('.languages_container');
    var newScrollLeft = $elem.scrollLeft(),
        width=$elem.outerWidth(),
        scrollWidth=$elem.get(0).scrollWidth;
    if (scrollWidth-newScrollLeft==width || newScrollLeft==0) {
      displacement = -displacement;
    }
    languages_container.scrollBy({
      left: displacement,
      behavior: 'smooth'
    });
  }, 50);
});

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

$(window).on('load', function() {
  checkElementLocation();
});

$(window).on('scroll', function() {
  checkElementLocation();
});

function goTo(el) {
    console.log(el.offset());
    $('html, body').animate({
      scrollTop: el.offset().top + -100
    }, 'fast');

}

function checkElementLocation() {
  var $window = $(window);
  var bottom_of_window = $window.scrollTop() + $window.height();
  $('.project').each( function(i) {
    var $that = $(this);
    var top_of_object = $that.position().top;
    if (bottom_of_window > top_of_object) {
      setTimeout( () =>{
        $(this).addClass('fade-in');
      },i*250)
    }
  });
}

$(window).resize(function() {
  if(window.innerWidth>999){
    $(".menu_container_mobile").hide();
    $("#menu_arrow").removeClass('flip');
  }
})

function menuControllerVisibility() {
  var menu = $(".menu_container_mobile");
  var menu_arrow = $("#menu_arrow");
  menu_arrow.toggleClass('flip');
  if(menu.is(':visible')){
    menu.hide();
  }else{
    menu.css('display', 'block');
  }
}

// const languages_container = document.getElementById('languages_container');
// const languages_container_width = languages_container.scrollWidth;

// window.addEventListener('load', () => {
//   self.setInterval(() => {
//     const first = document.querySelector('#languages_container div');

//    if(!isElementInViewport(first)){
//       languages_container.appendChild(first);
//       languages_container.scrollTo(languages_container.scrollLeft - first.offsetWidth, 0);
//     }
//     if (languages_container.scrollLeft !== languages_container_width) {
//       languages_container.scrollTo(languages_container.scrollLeft + 1, 0);
//     }
//   }, 10);
// });

// function isElementInViewport (el) {
//     var rect = el.getBoundingClientRect();
//     return rect.right > window.innerWidth/6;
// }
