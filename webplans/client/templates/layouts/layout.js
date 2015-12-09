Template.registerHelper('currentRoute', function(router){
  return Router.current().route.getName() == router;
});
