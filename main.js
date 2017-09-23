function init() {

  $('.hamburger-menu').on('click', function (){
    $('.menu').addClass('c-menu c-menu--slide-left is-active');
    $('.c-mask').addClass('is-active');
  });

  $('.c-mask').on('click', function () {
    $('.menu').removeClass('c-menu c-menu--slide-left is-active');
    $('.c-mask').removeClass('is-active');
  });

}

init();
