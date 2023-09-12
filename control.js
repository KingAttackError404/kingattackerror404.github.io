// Fungsi untuk mengarahkan ke halaman yang sesuai berdasarkan status situs
function redirectToPage() {
    const siteStatus = localStorage.getItem('siteStatus');
    if (siteStatus === 'maintenance') {
        window.location.href = 'maintenance.html';
    } else if (siteStatus === 'under_attack_v1') {
        window.location.href = '502.html'; // Arahkan ke 502.html
    } else if (siteStatus === 'under_attack_v2') {
        window.location.href = 'v2.html'; // Arahkan ke v2.html
    } else {
        window.location.href = 'main.html'; // Arahkan ke main.html (normal)
    }
}

// Fungsi untuk memeriksa status situs secara berulang
function checkSiteStatus() {
    const siteStatus = localStorage.getItem('siteStatus');
    if (siteStatus === 'normal') {
        redirectToPage(); // Arahkan ke halaman yang sesuai
    } else {
        // Jika status bukan normal, periksa kembali setelah beberapa detik
        setTimeout(checkSiteStatus, 1000); // Cek setiap 1 detik
    }
}

// Panggil fungsi pemantauan saat halaman dimuat
checkSiteStatus();
