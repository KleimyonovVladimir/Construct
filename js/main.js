$(document).ready(function () {
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination,
      },
      800
    );
    return false;
  });
  $(".hamburger__icon").click(function (e) {
    e.preventDefault();
    $(".hamburger__nav").toggleClass("show");
  });
  $(".hamburger__nav .hamburger__list .hamburger__item .hamburger__link").click(
    function (e) {
      e.preventDefault();
      $(".hamburger__nav").toggleClass("show");
    }
  );
});
