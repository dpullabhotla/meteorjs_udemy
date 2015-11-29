Template.registerHelper('truncateText', function(text,length){
  var newText = text.substring(0, length);
  newText = newText.substr(0, Math.min(newText.length,newText.lastIndexOf(" ")));

  return new Spacebars.SafeString(newText);
});

Template.registerHelper('getAvg',function(reviews){
  var sum = 0;

  if(reviews != undefined){
  for(var i=0;i< reviews.length;i++){
    sum += parseInt(reviews[i].rating, 10);
  }
  var avg = sum/reviews.length;

  return Math.round(avg);
  }
  
});

Template.registerHelper('getReviewsTotal',function(reviews){
  var total = 0;
  if(reviews != undefined && reviews.length != undefined && reviews.length > 0){
    total = reviews.length;
  }

  return total;
});

Template.registerHelper('formatDate',function(date){
  return moment(date).format('MM-DD-YYYY');
});
