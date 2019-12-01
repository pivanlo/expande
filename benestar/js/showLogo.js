/*
 * Show the navbar logo when the scroll is not at the top.
 */

$(document).ready(function(){
  var $logo = $('#logo');

  // Show the logo if scroll is not at the top on page load.
  if ($(this).scrollTop() >= 300) {
    $logo.show();
  }

  $(document).scroll(function() {
    var isDesktop = $(document).width() > 768;
    if (isDesktop) {
      if ($(this).scrollTop() >= 300) {
        $logo.fadeIn();
      } else {
        $logo.fadeOut();
      }
    }
  });
});
