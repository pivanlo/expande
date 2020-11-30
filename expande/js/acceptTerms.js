function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function handleSubmit(event) {
  if ($("#no-spam-please").val().length != 0) {
    return false;
  }

  var $name = $("#name");
  var $surnames = $("#surnames");
  var $email = $("#email");
  var $message = $("#message");

  // Hide all errors
  $name.popover("hide");
  $surnames.popover("hide");
  $email.popover("hide");
  $message.popover("hide");
  $("#termsPopover").hide();

  // Validate name
  if (!$name.val()) {
    $name.popover("show");
    event.preventDefault();
    event.stopPropagation();
    return;
  } else {
    $name.popover("hide");
  }

  // Validate surnames
  if ($("#surnames").length) {
    if (!$surnames.val()) {
      $surnames.popover("show");
      event.preventDefault();
      event.stopPropagation();
      return;
    } else {
      $surnames.popover("hide");
    }
  }

  // Validate email
  var emailValue = $email.val();
  if (!emailValue) {
    $email.attr(
      "data-content",
      '<i class="fas fa-exclamation-triangle"></i> Por favor introduce tu correo electrónico.'
    );
    $email.popover("show");
    event.preventDefault();
    event.stopPropagation();
    return;
  } else if (!validateEmail(emailValue)) {
    $email.attr(
      "data-content",
      '<i class="fas fa-exclamation-triangle"></i> El correo electrónico no tiene un formato válido.'
    );
    $email.popover("show");
    event.preventDefault();
    event.stopPropagation();
    return;
  } else {
    $email.popover("hide");
  }

  // Validate message
  if (!$message.val()) {
    $message.popover("show");
    event.preventDefault();
    event.stopPropagation();
    return;
  } else {
    $message.popover("hide");
  }

  // Validate terms
  if (!$("#terms").is(":checked")) {
    $("#termsPopover").show();
    event.preventDefault();
    event.stopPropagation();
    return;
  }
}

function handleInputKeyUp() {
  if ($(this).val()) {
    $(this).popover("hide");
  }
}

function handleTermsChange() {
  if ($("#terms").is(":checked")) {
    $("#termsPopover").hide();
    return;
  }
}

$(document).ready(function() {
  $("input, textarea").popover({ trigger: "manual" });
  $(".contact-form").submit(handleSubmit);
  $("#name, #email, #message").keyup(handleInputKeyUp);
  $("#terms").change(handleTermsChange);
});
