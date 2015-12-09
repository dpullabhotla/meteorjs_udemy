Meteor.startup(function(){
  if(Meteor.users.find().count() < 1){
    var users = [
      {
        name: "Superuser",
        email: "admin@example.com",
        roles: ['admin']
      }
    ];

    _.each(users, function(user){
      var id;
      id = Accounts.createUser({
        email: user.email,
        password: "passw0rd",
        profile: { name: user.name}
      });

      if(user.roles.length > 0){
        Roles.addUsersToRoles(id, user.roles);
      }

    });
  }
});

Accounts.onCreateUser(function(options, user){
  Subscribers.insert({
    user_id: user._id,
    user_email: user.emails[0].address,
    plan_id: getDefaultPlan()._id,
    plan_name: getDefaultPlan().name,
    plan_label: getDefaultPlan().label,
    plan_days: getDefaultPlan().days,
    plan_unit: getDefaultPlan().unit,
    plan_description: getDefaultPlan().description,
    plan_price: getDefaultPlan().price,
    join_date: new Date()
  });

  if(options.profile){
    user.profile = options.profile;
  }

  return user;
});

function getDefaultPlan(){
  return Plans.findOne({
    is_default: '1'
  });
}
