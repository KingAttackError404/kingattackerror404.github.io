// Ambil semua tautan yang merujuk ke halaman internal
const internalLinks = document.querySelectorAll('a[href^="#"]');

// Tambahkan event listener ke semua tautan tersebut
internalLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Fungsi untuk mengatur smooth scrolling
function smoothScroll(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top;
        const scrollOptions = {
            behavior: 'smooth',
            block: 'start'
        };
        
        window.scrollTo({
            top: offset + window.scrollY,
            ...scrollOptions
        });
    }
}
    
