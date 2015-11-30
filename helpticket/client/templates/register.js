Template.register.events({
  'submit .form-signup': function(event){
    var firstName = event.target.firstName.value;
    var lastName = event.target.lastName.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    var password2 = event.target.password2.value;

  if(isNotEmpty(email) && isNotEmpty(firstName) && isNotEmpty(lastName)
  && isNotEmpty(password) && isEmail(email) && isValidPassword(password)
  && areValidPasswords(password, password2)){
    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        firstName: firstName,
        lastName: lastName
      }
    }, function(err){
      if(err){
      FlashMessages.sendError("There was an error with registration");
    }else{
      FlashMessages.sendSuccess("Account creation was successful");
      Router.go('/dashboard');
    }
  });
}

  //prevent submit
  return false;
  }
});

var trimInput = function(val){
  return val.replace(/^\s*|\s*$/g,"");
}

isNotEmpty = function(value){
  if(value && value != ''){
    return true;
  }else{
    FlashMessages.sendError('Please fill in all fields');
    return false;
  }
}

isEmail = function(value){
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(filter.test(value)){
    return true;
  }else{
    FlashMessages.sendError('Please use a valid email address');
    return false;
  }
};

isValidPassword = function(value){
  if(value.length < 6){
    FlashMessages.sendError("Password must be atleast 6 characters");
    return false;
  }
  return true;
};

areValidPasswords = function(password,confirm){
  if(!isValidPassword(password)){
    return false;
  }
  if(password !== confirm){
    FlashMessages.sendError("Passwords do not match");
    return false;
  }
  return true;
};
