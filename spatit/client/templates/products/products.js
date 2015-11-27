Template.products.helpers({
  images: function () {
    return ProductsImages.find(); // Where Images is an FS.Collection instance
  }
});
