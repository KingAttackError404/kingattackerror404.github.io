// Fungsi untuk mengarahkan ke halaman yang sesuai berdasarkan status situs
    function redirectToPage() {
        const siteStatus = localStorage.getItem('siteStatus');
        if (siteStatus === 'maintenance') {
            window.location.href = 'maintenance.html';
        } else if (siteStatus === 'under_attack_v1') {
            window.location.href = '502.html';
        } else if (siteStatus === 'under_attack_v2') {
            window.location.href = 'v2.html';
        } else {
            window.location.href = 'main.html'; // Default jika status tidak ada atau normal
        }
    }

    // Panggil fungsi pengalihan saat halaman dimuat
    redirectToPage();

    // Fungsi untuk memeriksa perubahan status dari kontrol
    function checkAndRefreshStatus() {
        const currentStatus = localStorage.getItem('siteStatus');
        setInterval(function () {
            const newStatus = localStorage.getItem('siteStatus');
            if (newStatus !== currentStatus) {
                location.reload(); // Lakukan refresh hanya jika ada perubahan status
            }
        }, 1000); // Periksa setiap 1 detik
    }

    // Panggil fungsi pemantauan perubahan status
    checkAndRefreshStatus();
