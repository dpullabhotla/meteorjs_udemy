Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  this.route('home', {
    path:'/',
    template: 'home'
  });

  this.route('about');
  this.route('work');
  this.route('contact');

  this.route('blog', {
    path:'/blog',
    template: 'blog'
  });

  this.route('post');

  this.route('list_posts',{
    path:'/admin/posts',
    template:'list_posts',
    data: function(){
      templateData = {
        posts: Posts.find()
      }
      return templateData;
    },
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() == null){
        Router.go('/')
      }
      this.next();
    }
  });

  this.route('add_posts',{
    path:'/admin/posts/add',
    template:'add_post'
  });

  this.route('edit_posts',{
    path:'/admin/posts/edit/:_id',
    template:'edit_posts',
    data: function(){
      var currentPost = this.params._id;
      return Posts.findOne({_id: this.params._id}) 
    },
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() == null){
        Router.go('/')
      }
      this.next();
    }
  });

  this.route('list_projects',{
    path:'/admin/projects',
    template:'list_projects'
  });

  this.route('add_project',{
    path:'/admin/projects/add',
    template:'add_project'
  });

  this.route('edit_project',{
    path:'/admin/projects/edit/edit/:_id',
    template:'edit_project'
  });

  this.route('login',{
    path:'/admin',
    template: 'login',
  });

});
