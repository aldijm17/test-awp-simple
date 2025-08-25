document.getElementById("btnClick").addEventListener("click", () => {
  alert("Tombol diklik!");
});

// Deteksi install prompt (Chrome)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const status = document.getElementById('status');
  status.textContent = "Aplikasi siap diinstal. Buka menu ⋮ lalu pilih 'Install app'.";
});
