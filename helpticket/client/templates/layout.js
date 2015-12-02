Template.registerHelper('isStaff', function(){
  if(Meteor.user() && Meteor.user().profile.userType == 'staff'){
    return true;
  }
})

Template.registerHelper('formatDate',function(date){
  return moment(date).format('MM-DD-YYYY');
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});
