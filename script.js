document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const learnMoreBtn = document.getElementById('learnMoreBtn');

  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  learnMoreBtn.addEventListener('click', function() {
    alert('Thank you for your interest in Asaba Classic Supermarket!');
  });

  // Auto-slide every 5 seconds
  setInterval(nextImage, 5000);
});