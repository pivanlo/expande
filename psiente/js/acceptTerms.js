var $popover = $('#popover');
let hasCaptchaError = false;

function showMessage(message, $container) {
  $popover.find('.popover-message').text(message);
  $popover
    .appendTo($container)
    .show();
}

function hideErrorMessage() {
  $popover.hide();
}

function handleSubmit(event) {
  if (!validateAll()) {
    event.preventDefault();
    event.stopPropagation();
  };
}

function validateAll() {
  hideErrorMessage();

  if (!validateName()) {
    return false;
  };

  if (!validateEmail()) {
    return false;
  };

  if (!validateMessage()) {
    return false;
  };

  if (!validateCaptcha()) {
    return false;
  };

  return true;
}

function validateName() {
  const $name = $('#name');

  if (!$name.val()) {
    var message = 'Por favor introduce tu nombre.';
    var $container = $name.parent();
    showMessage(message, $container);
    $name.addClass('has-error');
    return false;
  }

  return true;
}

function validateEmail() {
  const $email = $('#email');
  const emailValue = $email.val();

  if (!emailValue) {
    var message = 'Por favor introduce tu correo electrónico.';
    var $container = $email.parent();
    showMessage(message, $container);
    $email.addClass('has-error');
    return false;
  } else if (!validateEmailFormat(emailValue)) {
    var message = 'El correo electrónico no tiene un formato válido.';
    var $container = $email.parent();
    showMessage(message, $container);
    $email.addClass('has-error');
    return false;
  }

  return true;
}

function validateEmailFormat(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateMessage() {
  const $message = $('#message');

  if (!$message.val()) {
    const message = 'Por favor introduce tu mensaje.';
    const $container = $message.parent();
    showMessage(message, $container);
    $message.addClass('has-error');
    return false;
  }

  return true;
}

function validateCaptcha() {
  if (!grecaptcha.getResponse()) {
    const message = 'Por favor demuestra que no eres un robot.';
    const $container = $('.g-recaptcha').parent();
    showMessage(message, $container);
    hasCaptchaError = true;
    return false;
  }

  return true;
}

function handleRecaptchaSuccess() {
  if (hasCaptchaError) {
    hideErrorMessage();
    hasCaptchaError = false;
  }
}

function handleInputKeyUp() {
  var $this = $(this);
  if ($this.val() && $this.hasClass('has-error')) {
    hideErrorMessage();
  }
};

$(document).ready(function(){
  $('.contact-form').submit(handleSubmit);
  $('#name, #email, #message').keyup(handleInputKeyUp);
});
