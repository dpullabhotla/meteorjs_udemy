Template.login.helpers({
  userEmail: function(){
    return Meteor.user().emails[0].address;
  }
});

Template.login.events({
  'submit .login-form':function(event){
    var email = event.target.email.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(email, password, function(err){
    if(err){
      event.target.email.value = email;
      event.target.password.value = password;

      FlashMessages.sendError(err.reason);
    } else{
      FlashMessages.sendSuccess('You are now logged in');
      Router.go('/');
    }
    });

    //clear form
    event.target.email.value = '';
    event.target.password.value = '';

    return false;
  },
  'submit .logout-form':function(event){
    Meteor.logout(function(err){
      if(err){
        FlashMessages.sendError(err.reason);
      }
      else{
        FlashMessages.sendSuccess("You are now logged out.");
        Router.go('/');
      }
    })
  },
  'click .register-link': function(event){
    $('.panel-login').hide();
    $('.panel-register').fadeIn();
  },
  'click .login-link':function(event){
    $('.panel-login').fadeIn();
    $('.panel-register').hide();
  },
  'submit .register-form':function(event){
    var email = event.target.email.value;
    var password = event.target.password.value;
    var password2 = event.target.password2.value;

  if(isNotEmpty(email) &&
     isNotEmpty(password) &&
     isEmail(email) &&
     areValidPasswords(password,password2)
    ){
    Accounts.createUser({
      email: email,
      password: password,
      profile:{
        userType: 'staff'
      }
    }, function(err){
      if(err){
        FlashMessages.sendError('There was an error with registration');
      }else{
        FlashMessages.sendSuccess('Account created successfully.');
        Router.go('/');
      }
    });
  }

  return false;
}
}	);



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
