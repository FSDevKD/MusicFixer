var mongoose = require('mongoose');

var audioSchema = new mongoose.Schema({
    originalFile: String,  // URL of the original file in Cloudinary
    masteredFile: String,  // URL of the mastered file in Cloudinary
    user: String,  // User who uploaded the file
    uploadDate: Date,  // Date the file was uploaded
    masteringDate: Date,  // Date the file was mastered
});

var Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;
