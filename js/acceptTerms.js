/**
 * Enables the submit button when the accept terms checbox is checked.
 */
function initAcceptTerms() {
  $('#accept-terms').on('change', function(event) {
    var checked = this.checked;
    var $submitButton = $('.contact-form button[type="submit"]');
    if (checked) {
      $submitButton.removeAttr('disabled')
    } else {
      $submitButton.attr('disabled', true)
    }
  });
}


$(document).ready(function(){
  initAcceptTerms();
});