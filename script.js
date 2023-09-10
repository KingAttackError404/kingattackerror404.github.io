// Ketika dokumen HTML telah dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", function () {
document.documentElement.requestFullscreen();
    // Fungsi untuk menambahkan efek "smooth scrolling" pada tautan internal
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    }

    // Menggunakan event listener untuk menangani klik pada tautan navigasi
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah perilaku default tautan
            const targetId = link.getAttribute("href").substring(1); // Mengambil ID target dari atribut href
            smoothScroll(targetId); // Memanggil fungsi smoothScroll
        });
    });

    // Fungsi untuk menyalin tautan undangan ke clipboard
    function copyToClipboard() {
        const inviteLink = document.getElementById("inviteLink");
        const textArea = document.createElement("textarea");
        textArea.value = inviteLink.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Link copied to clipboard!");
    }

    // Menggunakan event listener untuk menangani klik pada tombol "Copy Link"
    const copyButton = document.getElementById("copyButton");
    if (copyButton) {
        copyButton.addEventListener("click", function () {
            copyToClipboard(); // Memanggil fungsi copyToClipboard
        });
    }
});
