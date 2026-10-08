const header = document.getElementById('siteHeader');
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 45);
});

toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.value').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.value').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

document.querySelectorAll('.category').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.querySelectorAll('.category').forEach(c => c.classList.remove('featured'));
        card.classList.add('featured');
    });
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    document.getElementById('formStatus').textContent =
        `Thank you${name ? ', ' + name : ''}! Your message has been received.`;
    e.target.reset();
});
