const form = document.getElementById('wifiForm');
const qrCodeContainer = document.getElementById('qrcode');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const ssid = document.getElementById('ssid').value;
    const password = document.getElementById('password').value;
    const encryption = document.getElementById('encryption').value;

    // Generate WiFi QR code data
    const qrData = `WIFI:T:${encryption};S:${ssid};P:${password};;`;

    // Clear previous QR code
    qrCodeContainer.innerHTML = "";

    // Generate new QR code
    new QRCode(qrCodeContainer, {
        text: qrData,
        width: 256,
        height: 256
    });
});