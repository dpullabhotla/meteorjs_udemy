Template.registerHelper('isStaff', function(){
  if(Meteor.user() && Meteor.user().profile.userType == 'staff'){
    return true;
  }
  return false;
})

Template.registerHelper('formatDate',function(date){
  var val = '';
  if(date && date != ''){
    val = moment(date).format('MM-DD-YYYY')
  }

  return val;
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
  var val = '';
  if(text && text != ''){
    val = text.charAt(0).toUpperCase() + text.slice(1);
  }

  return val;
});
