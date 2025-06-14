function toggleMenu() {
    const navLinks = document.querySelectorAll('.nav-bar ul');
    navLinks.forEach(link => {
        link.classList.toggle('active');
    });
}