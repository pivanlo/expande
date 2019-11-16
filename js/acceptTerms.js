/**
 * Enables the submit button when the accept terms checbox is checked.
 */
function initAcceptTerms() {
  // $('#accept-terms').on('change', function(event) {
  //   var checked = this.checked;
  //   var $submitButton = $('.contact-form button[type="submit"]');
  //   if (checked) {
  //     $submitButton.removeAttr('disabled')
  //   } else {
  //     $submitButton.attr('disabled', true)
  //   }
  // });

  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      // if (form.checkValidity() === false) {
        console.log('here')
        event.preventDefault();
        event.stopPropagation();
      // }
      form.classList.add('was-validated');
    }, false);
  });

}


$(document).ready(function(){
  initAcceptTerms();
});


$(document).ready(function(){
  $('[data-toggle="popover"]').popover(); 
});