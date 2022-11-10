const validateEmail = (email) => {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      return true
    } else {
      return false;
    }
    
  };

const isValidPhone = (phone) => {

  let validRegex = /^\+?[1-9][0-9]{7,14}$/
    
    if (phone.match(validRegex)) {
      return true
    } else {
      return false;
    }

}
  

const isSecurePassword = (password) => {
    
  const errors = [];
  if(password.length < 8){errors.push("Password must be at least 8 characters")}
  if (p.length > 32) {
    errors.push("Your password must be at max 32 characters");
  }
  if (p.search(/[a-z]/) < 0) {
    errors.push("Your password must contain at least one lower case letter."); 
  }
  if (p.search(/[A-Z]/) < 0) {
      errors.push("Your password must contain at least one upper case letter."); 
  }

  if (p.search(/[0-9]/) < 0) {
      errors.push("Your password must contain at least one digit.");
  }
  if (p.search(/[!@#\$%\^&\*_]/) < 0) {
      errors.push("Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]"); 
  }
  if (errors.length > 0) {
      console.log(errors.join("\n"));
      return false;
  }

  return true;

}






module.exports = {

  validateEmail,
  isValidPhone,
  isSecurePassword
}