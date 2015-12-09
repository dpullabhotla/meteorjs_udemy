Template.addplan.events({
  'submit .add-plan-form': function(){
      var name = event.target.name.value;
      var label = event.target.label.value;
      var days = event.target.days.value;
      var description = event.target.description.value;
      var price = event.target.price.value;
      var is_default = event.target.is_default.value;

      Plans.insert({
        name: name,
        label: label,
        days: days,
        price: price,
        description: description,
        is_default: is_default
      });

      toastr.success('Plan Added');

      Router.go('/admin/plans');

      return false;
  }
});

Template.editplan.events({
  'submit .edit-plan-form': function(){
      var name = event.target.name.value;
      var label = event.target.label.value;
      var days = event.target.days.value;
      var description = event.target.description.value;
      var price = event.target.price.value;
      var is_default = event.target.is_default.value;

      Plans.update({
        _id: this._id
      },{
        $set:{
        name: name,
        label: label,
        days: days,
        price: price,
        description: description,
        is_default: is_default
      }
      });

      toastr.success('Plan Updated');

      Router.go('/admin/plans');

      return false;
  }
});

Template.listplans.events({
  'click .delete-plan': function(){
    if(confirm("Are you sure?")){
      Plans.remove(this._id);
      toastr.success('Plan deleted');
      return false;
    }
    return false;
  }
});

Template.editplan.helpers({
  'checkValue': function(value, value2){
     if(value == value2){
       return "selected";
     }
  }
});

Template.plans.events({
  'click .buy-plan': function(event){
    var plan_id = event.currentTarget.id;
    var name = event.currentTarget.rel;

    var plan_info = Plans.findOne({_id:plan_id});

    Subscribers.insert({
      plan_name: plan_info.name,
      plan_label: plan_info.label,
      plan_days: plan_info.days,
      plan_unit: plan_info.unit,
      plan_price: plan_info.price,
      plan_description: plan_info.description,
      user_id: Meteor.userId(),
      user_email: Meteor.user().emails[0].address,
      join_date: new Date()
    });

    toastr.success('Joined Plan');
  }
});
