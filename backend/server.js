const http = require('http');
const fs = require('fs');
const path = require('path');
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

const configuredPort = Number.parseInt(process.env.PORT || '3000', 10);
const PORT = Number.isInteger(configuredPort) && configuredPort > 0 && configuredPort <= 65535
  ? configuredPort
  : 3000;
const FRONTEND_ROOT = path.resolve(__dirname, '..', 'frontend');
const FRONTEND_ROOT_PREFIX = `${FRONTEND_ROOT}${path.sep}`;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4',
  '.m4v': 'video/x-m4v',
  '.webm': 'video/webm',
  '.wasm': 'application/wasm',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.map': 'application/json'
};

function isPrivatePath(relativePath) {
  return relativePath.split(/[\\/]+/).some((segment) => (
    segment === '.git' ||
    segment === 'node_modules' ||
    segment === '.vercel' ||
    /^\.env(?:\.|$)/i.test(segment)
  ));
}

function resolveFrontendPath(requestPath) {
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(requestPath);
  } catch (_) {
    return { error: 400 };
  }

  if (decodedPath.includes('\0')) {
    return { error: 400 };
  }

  const relativePath = decodedPath.replace(/^[/\\]+/, '');
  if (isPrivatePath(relativePath)) {
    return { error: 404 };
  }

  const candidate = path.resolve(FRONTEND_ROOT, relativePath);
  if (candidate !== FRONTEND_ROOT && !candidate.startsWith(FRONTEND_ROOT_PREFIX)) {
    return { error: 403 };
  }

  return { path: candidate };
}

function sendText(res, statusCode, message) {
  res.writeHead(statusCode, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(message);
}

const server = http.createServer((req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    sendText(res, 405, '405 Method Not Allowed');
    return;
  }

  let pathname;
  try {
    pathname = new URL(req.url, 'http://localhost').pathname;
  } catch (_) {
    sendText(res, 400, '400 Bad Request');
    return;
  }

  const resolved = resolveFrontendPath(pathname);
  if (resolved.error) {
    sendText(res, resolved.error, `${resolved.error} ${resolved.error === 403 ? 'Forbidden' : resolved.error === 404 ? 'Not Found' : 'Bad Request'}`);
    return;
  }

  fs.stat(resolved.path, (err, stats) => {
    if (err) {
      // If file not found, try appending .html
      if (err.code === 'ENOENT' && !path.extname(resolved.path)) {
        const htmlPath = `${resolved.path}.html`;
        if (fs.existsSync(htmlPath)) {
          return serveFile(htmlPath, res, req.method);
        }
      }
      sendText(res, 404, '404 Not Found');
      return;
    }

    if (stats.isDirectory()) {
      const indexPath = path.join(resolved.path, 'index.html');
      if (fs.existsSync(indexPath)) {
        serveFile(indexPath, res, req.method);
      } else {
        sendText(res, 403, '403 Directory Listing Not Allowed');
      }
      return;
    }

    serveFile(resolved.path, res, req.method);
  });
});

function serveFile(filePath, res, method = 'GET') {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });

  if (method === 'HEAD') {
    res.end();
    return;
  }

  const stream = fs.createReadStream(filePath);
  stream.on('error', (err) => {
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
    }
  });
  stream.pipe(res);
}

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`  Kyraa Style server running at:`);
  console.log(`  > Frontend root: http://localhost:${PORT}/`);
  console.log(`  > Homepage:      http://localhost:${PORT}/kyraastyle.com/index.html`);
  console.log(`  > Catalogue:     http://localhost:${PORT}/store/category.html`);
  console.log(`==================================================\n`);
});
