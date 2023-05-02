const mongoose  =require('mongoose');

const UrlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: [true, 'URL must be provided'],
        trim: true
    }
})

module.exports = mongoose.model('Urls', UrlSchema)