document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll and active nav
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Active nav on scroll
    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY + 70;
        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));
            if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
    // Kontak form
    const form = document.getElementById('formKontak');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('formMsg').textContent = 'Terima kasih, pesan Anda sudah terkirim!';
            form.reset();
        });
    }
    // Fade-in animation
    document.querySelectorAll('.fade-in').forEach((el, i) => {
        el.style.animationDelay = (i * 0.2) + 's';
    });
});
