const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
    validate: {
      validator: function (v) {
        return v.every((genre) =>
          [
            "Horror",
            "Romance",
            "Action",
            "Fantasy",
            "Comedy",
            "Crime",
            "Sci-Fi",
            "Drama",
            "Animation",
            "Documentary",
            "Mystery",
            "Thriller",
          ].includes(genre)
        );
      },

      message: (props) => `${props.value} does not contain valid genres.`,
    },
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
