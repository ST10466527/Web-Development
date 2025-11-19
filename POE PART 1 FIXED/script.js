// Lightbox Gallery
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);
    const imgClone = img.cloneNode();
    lightbox.appendChild(imgClone);
    lightbox.addEventListener('click', () => lightbox.remove());
  });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  const phone = document.querySelector('#phone');
  if (!/^\d{10}$/.test(phone.value)) {
    alert('Please enter a valid 10-digit phone number.');
    e.preventDefault();
  }
});
