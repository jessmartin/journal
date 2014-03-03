$(function() {
  $(".next").click(function (e) {
    var parent = $(this).parents(".page");
    var newCurrentPage = $(parent).next();

    if (newCurrentPage) {
      parent.css('z-index', '102');
      newCurrentPage.css('z-index', 103);
      e.preventDefault();
    }
  });

  $(".prev").click(function (e) {
    var parent = $(this).parents(".page");
    var newCurrentPage = $(parent).prev();

    if (newCurrentPage) {
      parent.css('z-index', '102');
      newCurrentPage.css('z-index', 103);
      e.preventDefault();
    }
  });

  var timeout;

  $("#journal").mousemove(function (e) {
    $(".page-date").fadeIn();

    clearTimeout(timeout);
    timeout = setTimeout(function() {
      $(".page-date:visible").fadeOut();
    }, 500);
  });
});