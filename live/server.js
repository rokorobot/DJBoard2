const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.txt': 'text/plain',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  
  // Dynamic API Endpoint: /api/frames
  if (url.pathname === '/api/frames') {
    const framesDir = path.join(__dirname, 'frames');
    fs.readdir(framesDir, (err, files) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: "Failed to scan frames directory" }));
      }
      const imageFiles = files
        .filter(file => /\.(png|jpe?g|gif|webp)$/i.test(file))
        .map(file => `frames/${file}`);
      
      console.log(`[RECON_SCAN] Detected ${imageFiles.length} tactical assets.`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(imageFiles));
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(__dirname, url.pathname === '/' ? 'rkrbt_engine.html' : url.pathname);
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('404: RESOURCE_NOT_FOUND // ' + url.pathname, 'utf-8');
      } else {
        res.writeHead(500);
        res.end('500: INTERNAL_SERVER_ERROR: ' + error.code, 'utf-8');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`[ROKOROBO_SERVER] Tactical engine live at http://localhost:${PORT}`);
  console.log(`[ROKOROBO_SERVER] On-demand frame recon active via /api/frames`);
});
