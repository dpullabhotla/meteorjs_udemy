Template.myplans.helpers({
  userplans: function(){
    return Subscribers.find({user_id: Meteor.userId()});
  }
});

Template.myplans.events({
  'click .cancel-plan': function(){
    if(confirm("Are you sure?")){
      Subscribers.remove(this._id);
      toastr.success('Plan cancelled');
      return false;
    }
    return false;
  }
});
