const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
require('dotenv').config();

const app = express();
app.use(express.json());

// 1. Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas successfully'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// 2. Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const upload = multer({ dest: 'uploads/' });

// 4. Define MongoDB Schema and Model
const MediaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cloudinaryUrl: { type: String, required: true },
  cloudinaryId: { type: String, required: true },
  resourceType: { type: String, enum: ['image', 'video'], required: true },
  createdAt: { type: Date, default: Date.now }
});

const Media = mongoose.model('Media', MediaSchema);

// 5. POST Route to Handle Upload
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    // Determine if file is a video or image to set options correctly
    const isVideo = req.file.mimetype.startsWith('video/');
    
    // Upload file to Cloudinary from local temporary folder
    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
      resource_type: isVideo ? 'video' : 'image',
      folder: 'app_uploads' // Optional folder structure in Cloudinary
    });

    // Save the Cloudinary reference details into MongoDB Atlas
    const newMedia = new Media({
      title: req.body.title || req.file.originalname,
      cloudinaryUrl: cloudinaryResponse.secure_url,
      cloudinaryId: cloudinaryResponse.public_id,
      resourceType: isVideo ? 'video' : 'image'
    });

    await newMedia.save();

    res.status(201).json({
      message: 'Successfully uploaded to Cloudinary and saved to MongoDB Atlas!',
      data: newMedia
    });

  } catch (error) {
    console.error('Upload Process Failed:', error);
    res.status(500).json({ error: 'Server integration failed.', details: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));