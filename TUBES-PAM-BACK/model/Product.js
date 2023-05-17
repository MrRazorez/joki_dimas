const { mongoose } = require('../src/database');

const Product = mongoose.model('product',{
    _id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      images: {
        type: [String],
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      lokasi: {
        type: String,
        required: true,
      },
});

module.exports = Product;