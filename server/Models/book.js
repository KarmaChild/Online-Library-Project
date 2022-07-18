const mongoose= require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Object,
        properties: {
            author_name : String
        },
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    available: {
        type: String,
        required: true
    },
    isbn_10: {
        type: String,
        required: true
    },
    isbn_13: {
        type: String,
        required: true
    }
}, { timestamps : true})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book