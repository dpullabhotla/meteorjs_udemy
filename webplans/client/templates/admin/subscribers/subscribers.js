Template.listsubscribers.helpers({
  'formatDate': function(value){
    var formatted = value;
     if(value && value != ""){
       formatted = moment(value).format('MM-DD-YYYY');
     }

     return formatted;
  },
  'getEndDate': function(joinDate, duration){
    var endDate = moment(joinDate);
    return endDate.add(duration,'d').format('MM-DD-YYYY');    
  }
});
