function toggleMenu() {
    const navLinks = document.querySelectorAll('.nav-bar ul');
    navLinks.forEach(link => {
        link.classList.toggle('active');
    });
}

document.addEventListener('mousemove', function (e) {
  const background = document.querySelector('.background');
  const x = (e.clientX / window.innerWidth - 0.5) * 20; // scale motion
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  background.style.transform = `translate(${x}px, ${y}px)`;
});