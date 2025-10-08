const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.close');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

close.onclick = () => (lightbox.style.display = 'none');

prev.onclick = () => showImage(currentIndex - 1);
next.onclick = () => showImage(currentIndex + 1);

function showImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  lightboxImg.src = images[index].src;
  currentIndex = index;
}

lightbox.onclick = (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
};
