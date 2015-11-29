Template.new_review.events({
  "submit .new_review":function(event){
    var id = this._id;
    var rating = event.target.rating.value;
    var body = event.target.body.value;

    Meteor.call('addReview',id, rating, body);

    FlashMessages.sendSuccess('Review Added');
    Router.go('/');

    return false;
  }
})
