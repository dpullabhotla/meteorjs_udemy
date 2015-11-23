Todos = new Mongo.Collection("todos");//old way was Meteor.Collection

if (Meteor.isClient) {
Template.main.helpers({
  todos: function(){
    return Todos.find({},{sort: {createdAt:-1}});//latest at the top using -1
  }
});

Template.main.events({
  "submit .new-todo":function(event){
    var text = event.target.text.value;
  //  console.log(text);
  Todos.insert({text: text,createdAt:new Date()});
  event.target.text.value= ""
    return false;
  },
  "click .toggle-check": function(){
    Todos.update(this._id, {$set:{checked: ! this.checked}});
  },
  "click .delete-todo": function(){
    if(confirm('Are You Sure?')){
        Todos.remove(this._id);
      }
  }
});
}
