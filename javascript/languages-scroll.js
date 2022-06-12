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
