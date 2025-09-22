// Fade-in sections on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Lightbox
const galleryImages = document.querySelectorAll('.gallery-cards img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.lightbox .close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => { if(e.target === lightbox) lightbox.style.display = 'none'; });

// Filtre
const filterButtons = document.querySelectorAll('.filters button');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.getAttribute('data-type');
    galleryImages.forEach(img => {
      img.style.display = (type === 'all' || img.getAttribute('data-type') === type) ? 'block' : 'none';
    });
  });
});
