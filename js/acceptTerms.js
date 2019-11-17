function handleSubmit(event) {
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
    event.preventDefault();
    event.stopPropagation();
    return;
  } else {
    $name.popover('hide');
  }

  // Validate email
  var emailValue = $email.val();
  if (!emailValue) {
    $email.attr('data-content', '<i class="fas fa-exclamation-triangle"></i> Porfavor introduce tu correo electrónico.');
    $email.popover('show');
    event.preventDefault();
    event.stopPropagation();
    return;
  } else if (!validateEmail(emailValue)) {
    $email.attr('data-content', '<i class="fas fa-exclamation-triangle"></i> El correo electrónico no tiene un formato válido.');
    $email.popover('show');
    event.preventDefault();
    event.stopPropagation();
    return;
  } else {
    $email.popover('hide');
  }

  // Validate message
  if (!$message.val()) {
    $message.popover('show');
    event.preventDefault();
    event.stopPropagation();
    return;
  } else {
    $message.popover('hide');
  }

  // Validate terms
  if (!$('#terms').is(":checked")) {
    $('#termsPopover').show();
    event.preventDefault();
    event.stopPropagation();
    return;
  }
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
  $('input, textarea').popover({trigger: 'manual'});
  $('.contact-form').submit(handleSubmit);
  $('#name, #email, #message').keyup(handleInputKeyUp);
  $('#terms').change(handleTermsChange);
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
