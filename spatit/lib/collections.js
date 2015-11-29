//categories
Categories = new Mongo.Collection("categories");

Products = new Mongo.Collection("products");

ProductsImages = new FS.Collection("ProductsImages",{
  stores: [new FS.Store.GridFS("ProductsImages")]
});

ProductsImages.allow({
  insert: function(fieldId, doc){
    return true;
  },
  download: function(fieldId, doc){
    return true;
  }
})
