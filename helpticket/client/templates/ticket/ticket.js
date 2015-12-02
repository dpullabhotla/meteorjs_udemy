Template.ticket.events({
  'submit .add-reply':function(event){
    var reply = event.target.reply.value;

    if(Meteor.user().profile.userType == 'staff'){
      userType = 'staff';
    }else{
      userType = 'customer';
    }

    Tickets.update({
      _id: this._id,
    },{
      $push: {
        replies: {
          reply: reply,
          userType: userType,
          user:Meteor.userId(),
          replyDate: new Date()
        }
      }
    }
  );

  event.target.reply.value = '';

  FlashMessages.sendSuccess('reply added');
  return false;
  }
});
