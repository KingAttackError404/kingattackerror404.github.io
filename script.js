// Ambil tombol "Invite"
const inviteButton = document.querySelector('.cta-button');

// Tambahkan event listener ke tombol "Invite"
inviteButton.addEventListener('click', () => {
    requestFullScreen();
});

// Fungsi untuk meminta mode layar penuh
function requestFullScreen() {
    const element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}
