Meteor.startup(function(){
  if(Meteor.users.find().count() == 0){
    Accounts.createUser({
      username: 'admin',
      email: 'admin@test.com',
      password: 'passw0rd'
    });
  }
});
