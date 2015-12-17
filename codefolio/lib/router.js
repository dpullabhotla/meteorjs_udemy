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
    onBeforeAction: function(){
      if(Meteor.user() == null){
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
    path:'/admin/posts/edit/edit/:_id',
    template:'edit_post'
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
