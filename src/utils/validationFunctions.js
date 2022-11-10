const validateEmail = (email) => {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      return true
    } else {
      return false;
    }
    
  };

  function isValidPhone(phone) {
    
    let validRegex = /^\+?[1-9][0-9]{7,14}$/
    
    if (phone.match(validRegex)) {
      return true
    } else {
      return false;
    }
    
  }



  module.exports = {

    validateEmail,
    isValidPhone
  }