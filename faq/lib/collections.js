Questions = new Mongo.Collection("questions");

Questions.allow({
  insert: function(userId,doc){
    return true;
  }
});

Questions.attachSchema(new SimpleSchema({
  question: { type: String, label: 'Question', max: 500,optional:false},
  answer: { type: String, label: 'Answer', max: 500,optional:false},
}));
