import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'save-profile-photo-endpoint',
        configureServer(server) {
          server.middlewares.use('/api/save-profile-photo', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', () => {
                try {
                  let dataUrl = '';
                  try {
                    const parsed = JSON.parse(body);
                    dataUrl = parsed.dataUrl || body;
                  } catch {
                    dataUrl = body;
                  }

                  const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                  const buffer = Buffer.from(base64Data, 'base64');
                  const targetDir = path.resolve('public/images/profile');
                  if (!fs.existsSync(targetDir)) {
                    fs.mkdirSync(targetDir, { recursive: true });
                  }
                  const jpgPath = path.join(targetDir, 'mohidul-islam-sojib.jpg');
                  const webpPath = path.join(targetDir, 'mohidul-islam-sojib.webp');
                  fs.writeFileSync(jpgPath, buffer);
                  fs.writeFileSync(webpPath, buffer);

                  // Also ensure dist directory receives it if dist exists
                  const distDir = path.resolve('dist/images/profile');
                  if (fs.existsSync(path.resolve('dist'))) {
                    if (!fs.existsSync(distDir)) {
                      fs.mkdirSync(distDir, { recursive: true });
                    }
                    fs.writeFileSync(path.join(distDir, 'mohidul-islam-sojib.jpg'), buffer);
                    fs.writeFileSync(path.join(distDir, 'mohidul-islam-sojib.webp'), buffer);
                  }

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(
                    JSON.stringify({
                      success: true,
                      path: '/images/profile/mohidul-islam-sojib.jpg'
                    })
                  );
                } catch (err) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: false, error: String(err) }));
                }
              });
              return;
            }
            res.writeHead(405);
            res.end();
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
