function telephoneCheck(str) {
  // function that checks US phone number format
  const regEx = /1? ?((\(\d{3}\))|(\d{3}))[- ]?\d{3}?[- ]?\d{4}$/;

  // check if string contains the expression !and nothing else!
  return regEx.test(str) && str.match(regEx)[0] === str;
}

telephoneCheck("555-555-5555");