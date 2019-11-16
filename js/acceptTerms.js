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

function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  var $name = $('#name');
  var $email = $('#email');
  var $message = $('#message');

  // Hide all errors
  $name.popover('hide');
  $email.popover('hide');
  $message.popover('hide');
  $('#termsPopover').hide();

  // Validate name
  if (!$name.val()) {
    $name.popover('show');
    return;
  } else {
    $name.popover('hide');
  }

  // Validate email
  var emailValue = $email.val();
  if (!emailValue) {
    $email.attr('data-content', '<i class="fas fa-exclamation"></i> Porfavor introduce tu correo electrónico.');
    $email.popover('show');
    return;
  } else if (!validateEmail(emailValue)) {
    $email.attr('data-content', '<i class="fas fa-exclamation"></i> El correo electrónico no tiene un formato válido.');
    $email.popover('show');
    return;
  } else {
    $email.popover('hide');
  }

  // Validate message
  if (!$message.val()) {
    $message.popover('show');
    return;
  } else {
    $message.popover('hide');
  }

  // Validate terms
  if (!$('#terms').is(":checked")) {
    $('#termsPopover').show();
    return;
  }

  console.log('sending!');
}

function handleInputKeyUp() {
  if ($(this).val()) {
    $(this).popover('hide');
  }
};

function handleTermsChange() {
  if ($('#terms').is(":checked")) {
    $('#termsPopover').hide();
    return;
  }
};


$(document).ready(function(){
  $('input').popover({trigger: 'manual'});
  $('.contact-form').submit(handleSubmit);
  $('#name, #email, #message').keyup(handleInputKeyUp);
  $('#terms').change(handleTermsChange);
  // initAcceptTerms();
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
