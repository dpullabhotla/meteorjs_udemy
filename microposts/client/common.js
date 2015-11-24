Meteor.startup(function () {
   AccountsEntry.config({
     homeRoute: '/',
     dashboardRoute: '/',
     passwordSignupFields: 'USERNAME_AND_EMAIL'
   });

   Accounts.ui.config({
     passwordSignupFields: 'USERNAME_AND_EMAIL'
   });
 });
