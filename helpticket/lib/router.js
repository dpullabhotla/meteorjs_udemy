Router.configure({
  layoutTemplate: 'layout'
});

var OnBeforeActions = {
  isStaff: function(){
    if(Meteor.user()){
      if(Meteor.user().profile.userType == 'staff'){
        Router.go('/staff');
      }else{
        this.next();
      }
    }else{
      this.next();
    }
  }
}

Router.onBeforeAction(OnBeforeActions.isStaff, {
  only:['mytickets']
});

Router.map(function(){
  this.route('mytickets',{
    path:'/',
    template:'mytickets',
    data: function(){
      templateData = {
        tickets: Tickets.find({customer: Meteor.userId()}),
        departments: Departments.find()
      };

      return templateData;
    }
  });

  this.route('ticket',{
    path:'/ticket/:_id',
    template: 'ticket',
    data: function(){
      var currentTicket = this.params._id;
      return Tickets.findOne({_id: currentTicket});
    }
  });

  this.route('staff',{
    path:'/staff',
    template: 'stafftickets',
    data: function(){
      templateData = {
        tickets: Tickets.find()
      };

      return templateData;
    }
  });

/*  this.route('stafftickets',{
    path:'/stafftickets',
    template: 'stafftickets',
    data: function(){
      templateData = {
        tickets: Tickets.find()
      };

      return templateData;
    }
  });*/

  this.route('departments',{
    path:'/staff/departments',
    template: 'departments',
    data: function(){
      templateData = {
        departments: Departments.find()
      };

      return templateData;
    }
  });

  this.route('add_department',{
    path:'/staff/departments/add',
    template: 'add_department'
  });
});
