require('dotenv').config({ path: require('node:path').resolve(__dirname, '.env'), override: true });

const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require('node:path');

const app = express();
const PORT = Number.parseInt(process.env.PORT || '3000', 10);
const DB_NAME = process.env.MONGODB_DB || 'test';
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'l8xwk9bz';
const FRONTEND_ROOT = path.resolve(__dirname, '..', 'frontend');

if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is missing from backend/.env. Add it before starting the backend.');
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, index: true },
  section: { type: String, index: true },
  position: Number,
  cloudinaryId: { type: String, required: true, unique: true },
  imageUrl: String,
  width: Number,
  height: Number,
  alt: String,
  price: { type: Number, min: 0 },
  link: String,
  isActive: { type: Boolean, default: true }
}, { timestamps: true, collection: 'products' });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const mediaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cloudinaryUrl: { type: String, required: true },
  cloudinaryId: { type: String, required: true },
  resourceType: { type: String, enum: ['image', 'video'], required: true },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'media' });
const Media = mongoose.models.Media || mongoose.model('Media', mediaSchema);

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB || 'test',
    serverSelectionTimeoutMS: 10000
  });
  console.log(`MongoDB connected: ${DB_NAME}`);
}

app.use((req, res, next) => {
  const origin = process.env.CORS_ORIGIN || 'http://localhost:8000';
  if (req.headers.origin === origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});
app.use(express.json());

function productWithImage(product) {
  const item = product.toObject ? product.toObject() : product;
  const width = Number.isFinite(item.width) && item.width > 0 ? Math.min(item.width, 1200) : 800;
  return {
    ...item,
    imageUrl: item.imageUrl || `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto:best,c_limit,w_${width}/${encodeURIComponent(item.cloudinaryId).replace(/%2F/g, '/')}`
  };
}

app.get('/api/products', async (req, res) => {
  try {
    const filter = { isActive: { $ne: false } };
    if (req.query.section) filter.section = req.query.section;
    if (req.query.category) filter.category = req.query.category;
    const products = await Product.find(filter).sort({ section: 1, position: 1, name: 1 }).lean();
    res.json(products.map(productWithImage));
  } catch (error) {
    console.error('Product lookup failed:', error.message);
    res.status(500).json({ error: 'Unable to load products.' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ cloudinaryId: req.params.id, isActive: { $ne: false } });
    if (!product) return res.status(404).json({ error: 'Product not found.' });
    res.json(productWithImage(product));
  } catch (error) {
    console.error('Product lookup failed:', error.message);
    res.status(500).json({ error: 'Unable to load product.' });
  }
});

// Preserve the existing upload route and its `media` collection.
const upload = multer({ dest: path.join(__dirname, 'uploads') });
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded.' });
    const isVideo = req.file.mimetype.startsWith('video/');
    const uploaded = await cloudinary.uploader.upload(req.file.path, {
      resource_type: isVideo ? 'video' : 'image',
      folder: 'app_uploads'
    });
    const media = await Media.create({
      title: req.body.title || req.file.originalname,
      cloudinaryUrl: uploaded.secure_url,
      cloudinaryId: uploaded.public_id,
      resourceType: isVideo ? 'video' : 'image'
    });
    res.status(201).json({ message: 'Successfully uploaded to Cloudinary and saved to MongoDB Atlas!', data: media });
  } catch (error) {
    console.error('Upload Process Failed:', error.message);
    res.status(500).json({ error: 'Server integration failed.', details: error.message });
  }
});

// Keep the legacy static paths available for callers that use backend/server.js to serve the site.
app.use(express.static(FRONTEND_ROOT));

connectDB()
  .then(() => app.listen(Number.isInteger(PORT) && PORT > 0 && PORT <= 65535 ? PORT : 3000, () => {
    console.log(`Kyraa Style API running on port ${PORT}`);
  }))
  .catch((error) => {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  });
