const multer = require('multer');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const Aimastering = require('aimastering');
const Audio = require('../models/audio'); 

// Cloudinary configuration
cloudinary.config({
    cloud_name: 'duq73rodw',
    api_key: '699344461538381',
    api_secret: 'i74oIptjUGS-7xwh3BRFtkNDSzs',
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'MusicFixer',
        format: async (req, file) => 'mp3',
        public_id: (req, file) => file.originalname,
    },
});

const parser = multer({ storage: storage });

// AiMastering configuration
var defaultClient = Aimastering.ApiClient.instance;
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = "guest_t606dljsas8qkfaaa728mgcbqsa3v4lssc0qim5qingg";

exports.viewPage = (req, res) => {
    console.log("Upload Controller Working");
    console.log({ user: req.user });
    res.render('upload', { user: req.user });
};

exports.handleUpload = function (req, res) {
    var audioFilePath = req.file.path;
    var audioFileData = fs.readFileSync(audioFilePath);
    var audio = new Aimastering.Audio({ file: audioFileData });

    var audioDoc = new Audio({
        originalFile: req.file.url,
        user: req.user,
        uploadDate: new Date(),
    });

    audioDoc.save(function(err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Audio saved successfully');
    });
};
