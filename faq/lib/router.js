Router.configure({
  layoutTemplate:'layout'
});

Router.map(function(){
  //home routes
  this.route('questions',{
    path: '/',
    template: 'questions'
  })
});
