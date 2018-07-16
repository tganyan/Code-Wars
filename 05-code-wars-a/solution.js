function validatePIN (pin) {
  //return true or false
  return RegExp(/(^\d{4}$)|(^\d{6}$)/g).test(pin);
}

