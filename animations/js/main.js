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

  $(".page-date-dot").on('mouseover', function() {
    $(this).siblings(".page-date-hover").fadeIn(200);
  });

  $(".page-date-dot").on('mouseout', function() {
    $(this).siblings(".page-date-hover").fadeOut(100);
  });

  $(".page-date").on('mouseover', function() {
    $(this).siblings(".date-list").fadeIn(200);
  });

  var timeout;

  $("#journal").mousemove(function (e) {
    $(".page-date").fadeIn();

    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if ($(".date-browser:hover").length == 0) {
        $(".page-date:visible").fadeOut();
        $(".page-date").siblings(".date-list").fadeOut();
      }
    }, 500);
  });
});