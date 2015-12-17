Template.add_post.events({
  'submit .add_post_form': function(event){
    var title = event.target.title.value;
    var body = event.target.body.value;

    Posts.insert({
      title: title,
      body: body
    });

    FlashMessages.sendSuccess('Post successful.');
    Router.go('/admin/posts');
    return false;
  }
});

Template.edit_posts.events({
  'submit .edit_post_form': function(event){
    var title = event.target.title.value;
    var body = event.target.body.value;

    Posts.update({
       _id: this._id
     },
       {
         $set:{body: body, title:title}
       }
    );

    FlashMessages.sendSuccess('Post updated.');
    Router.go('/admin/posts');
    return false;
  }
});

Template.list_posts.events({
  'click .delete_post': function(event){
    if(confirm('Are you sure?')){
    Posts.remove(this._id);
    FlashMessages.sendSuccess('Post deleted.');

    return false;
   }
  }
});

Template.registerHelper('formatDate', function(date){
return moment(date).format('MM-DD-YYYY');
});
