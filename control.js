        // Fungsi untuk mengarahkan ke halaman yang sesuai berdasarkan status situs
        function redirectToPage() {
            const siteStatus = localStorage.getItem('siteStatus'); // Baca status dari localStorage
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
            const currentStatus = localStorage.getItem('siteStatus'); // Baca status dari localStorage
            const previousStatus = localStorage.getItem('previousSiteStatus'); // Baca status sebelumnya

            if (currentStatus !== previousStatus) {
                // Jika status berubah, maka perbarui halaman
                localStorage.setItem('previousSiteStatus', currentStatus); // Simpan status saat ini sebagai status sebelumnya
                redirectToPage(); // Arahkan ke halaman yang sesuai
            } else {
                // Jika status tetap sama, periksa kembali setelah beberapa detik
                setTimeout(checkSiteStatus, 1000); // Cek setiap 1 detik
            }
        }

        // Panggil fungsi pengalihan saat halaman dimuat
        redirectToPage();

        // Panggil fungsi pemantauan saat halaman dimuat
        checkSiteStatus();
