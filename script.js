// Predefined user credentials
const users = [
  { email: "CycleRecycle@gmail.com", password: "Cycle Recycle 123" }
];

// Login function
function login() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!email || !password) {
      alert("Please fill in all fields.");
      return;
  }

  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
      alert(`Welcome back, ${email}!`);
      document.getElementById("login-email").value = "";
      document.getElementById("login-password").value = "";
  } else {
      alert("Invalid credentials. Please try again.");
  }
}

// Initialize Map
function initMap() {
   const map = L.map('mapContainer').setView([51.505, -0.09],13);
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js').then(() => console.log('Service Worker Registered'));
}

// QR Scanner Initialization
const html5QrCode = new Html5Qrcode("qr-reader");
html5QrCode.start({ facingMode: "environment" }, { fps: 10 }, decodedText => {
   console.log(`QR Code Scanned: ${decodedText}`);
});

window.onload = initMap;
