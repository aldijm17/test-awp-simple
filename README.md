# AWP Simple (PWA)
Proyek PWA sederhana.

## Cara Run (Local)
1. Buka folder ini di VS Code.
2. Jalankan **Live Server** (atau gunakan `npx http-server` / `python -m http.server`).
3. Buka di Chrome: `http://localhost:5500` (atau sesuai port).
4. Install app dari address bar atau menu ⋮ > Install app.

## Deploy Cepat
- **Netlify**: drag & drop folder ini ke Netlify (app.netlify.com).
- **GitHub Pages**: push repo, aktifkan Pages di Settings > Pages.
- **Vercel**: buat project baru dan deploy.

## Catatan
- Service Worker hanya aktif di `https` atau `http://localhost`.
- Jika update file, ubah `CACHE_NAME` di `sw.js` (mis. `awp-cache-v2`).