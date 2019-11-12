/**
 * Makes the nav items clickable on mobile.
 */
function initMobileNav() {
  var activeSubnav = null;

  $('.nav-item').on('click', function(event) {
    var section = $(this).attr('data-section-id');
    // Make sure this.hash has a value before overriding default behavior
    if (section) {
      // Prevent default anchor click behavior
      event.preventDefault();

      if (activeSubnav === section) {
        $('.subnav#' + section).hide();
        activeSubnav = null;
      } else if (activeSubnav === null) {
        $('.subnav#' + section).show();
        activeSubnav = section;
      } else {
        $('.subnav#' + activeSubnav).hide();
        $('.subnav#' + section).show();
        activeSubnav = section;
      }
    }
  });

  // Close subnav when a same page link is clicked
  $('.same-page-link').on('click', function(event) {
    $('.subnav').hide();
    activeSubnav = null;
  });
}


$(document).ready(function(){
  initMobileNav();
});