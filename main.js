function init() {

  $('.hamburger-menu').on('click', function (){
    $('.menu').addClass('col-5 c-menu c-menu--slide-left is-active');
    $('.menu').removeClass('col-3');
    $('.c-mask').addClass('is-active');
  });

  $('.c-mask').on('click', function () {
    $('.menu').removeClass('c-menu c-menu--slide-left is-active');
    $('.c-mask').removeClass('is-active');
  });

}

init();
