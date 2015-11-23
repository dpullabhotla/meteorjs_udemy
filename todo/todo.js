Todos = new Mongo.Collection("todos");//old way was Meteor.Collection

if(Meteor.isServer){
  Meteor.publish('todos', function(){
    if(!this.userId){
      return Todos.find();
    }else{
    return Todos.find({userId: this.userId});
  }
  });
}

if (Meteor.isClient) {
Meteor.subscribe('todos');
Template.main.helpers({
  todos: function(){
    return Todos.find({},{sort: {createdAt:-1}});//latest at the top using -1
  }
});

Template.main.events({
  "submit .new-todo":function(event){
    var text = event.target.text.value;
  //  console.log(text);

  Meteor.call('addTodo',text);

  event.target.text.value= ""
    return false;
  },
  "click .toggle-check": function(){
    Meteor.call('setChecked',this._id,this.checked);
  },
  "click .delete-todo": function(){
    if(confirm('Are You Sure?')){
        Meteor.call('deleteToDo',this._id);
      }
  }
});
Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
}

//Meteor methods
Meteor.methods({
  addTodo: function(text){
      if(!Meteor.userId()){
        throw new Meteor.Error("not authorized!");
      }
      Todos.insert({text: text,
        createdAt:new Date(),
        userId:Meteor.userId(),
        username:Meteor.user().username});
    },
    deleteToDo: function(todoId){
      var todo = Todos.findOne(todoId);
      if(todo.userId !== Meteor.userId()){
      Todos.remove(todoId);
     }
    },
    setChecked: function(todoId,setChecked){
      //Todos.update(this._id, {$set:{checked: ! this.checked}});
      var todo = Todos.findOne(todoId);
      if(todo.userId !== Meteor.userId()){
        throw new Meteor.Error('not authorized');
      }
      Todos.update(todoId, {$set:{checked: ! setChecked}});
    }
});
