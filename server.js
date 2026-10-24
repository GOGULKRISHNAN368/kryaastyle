const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

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
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // If root requested, serve the Grand Opening & Loading Page
  if (pathname === '/' || pathname === '') {
    const query = parsedUrl.query || '';
    if (query.includes('skip=1') || query.includes('store=1')) {
      res.writeHead(302, { Location: '/www.azafashions.com/index.html' });
      res.end();
      return;
    }
    return serveFile(path.join(ROOT_DIR, 'index.html'), res);
  }

  // Security check: prevent directory traversal
  let safePath = path.normalize(path.join(ROOT_DIR, pathname));
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err) {
      // If file not found, try appending .html
      if (err.code === 'ENOENT' && !path.extname(safePath)) {
        const htmlPath = safePath + '.html';
        if (fs.existsSync(htmlPath)) {
          return serveFile(htmlPath, req, res);
        }
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    if (stats.isDirectory()) {
      const indexPath = path.join(safePath, 'index.html');
      if (fs.existsSync(indexPath)) {
        serveFile(indexPath, req, res);
      } else {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Directory Listing Not Allowed');
      }
      return;
    }

    serveFile(safePath, req, res);
  });
});

function serveFile(filePath, req, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
      return;
    }

    const commonHeaders = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Accept-Ranges': 'bytes'
    };
    const rangeHeader = req.headers.range;
    const rangeMatch = rangeHeader && /^bytes=(\d*)-(\d*)$/.exec(rangeHeader.trim());

    if (rangeMatch) {
      const requestedStart = rangeMatch[1] ? Number(rangeMatch[1]) : null;
      const requestedEnd = rangeMatch[2] ? Number(rangeMatch[2]) : null;
      const start = requestedStart === null
        ? Math.max(0, stats.size - requestedEnd)
        : requestedStart;
      const end = requestedEnd === null
        ? stats.size - 1
        : Math.min(requestedEnd, stats.size - 1);

      if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || start > end || start >= stats.size) {
        res.writeHead(416, {
          ...commonHeaders,
          'Content-Range': `bytes */${stats.size}`
        });
        res.end();
        return;
      }

      res.writeHead(206, {
        ...commonHeaders,
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Content-Length': end - start + 1
      });
      if (req.method === 'HEAD') {
        res.end();
        return;
      }
      fs.createReadStream(filePath, { start, end }).pipe(res);
      return;
    }

    res.writeHead(200, {
      ...commonHeaders,
      'Content-Length': stats.size
    });
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    fs.createReadStream(filePath).pipe(res);
  });
}

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`  Kryaa Styles server running at:`);
  console.log(`  > Opening Page:  http://localhost:${PORT}/`);
  console.log(`  > Direct Store:  http://localhost:${PORT}/www.azafashions.com/index.html`);
  console.log(`==================================================\n`);
});
