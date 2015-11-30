Meteor.methods({
  addReview:function(id, rating, body){
    Products.update({
      _id:id
    },
    {
      $push:{
        reviews: {
          rating:rating,
          body: body,
          review_date: new Date()
        }
      }
    }
    );
  }
});
