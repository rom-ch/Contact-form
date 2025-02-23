function checkEmptyField(value) {
  const errors = [];

  if (value === "") {
    errors.push("This fiels is required");
  }
  return errors;
}

function checkEmail(email) {
  const errors = [];

  if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    errors.push("Please provide a valid email");
  }
  return errors;
}

function checkQuery(query) {
  const errors = [];

  if (query === "") {
    errors.push("Please select a query type");
  }
  return errors;
}

function checkConsent(consent) {
  const errors = [];

  if (consent === false) {
    errors.push("To submit this form, please consent to being contacted");
  }
  return errors;
}

export function validateForm(values) {
  return {
    firstname: checkEmptyField(values.firstname),
    lastname: checkEmptyField(values.lastname),
    email: checkEmail(values.email),
    query: checkQuery(values.query),
    message: checkEmptyField(values.message),
    consent: checkConsent(values.consent),
  };
}
