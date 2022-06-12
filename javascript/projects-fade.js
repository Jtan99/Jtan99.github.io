window.addEventListener('load', function() {
  checkElementLocation();
});

window.addEventListener('scroll', function() {
  checkElementLocation();
});

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