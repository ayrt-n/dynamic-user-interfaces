let currentSlide = 0;

const slideshowImages = document.getElementById('slideshow-images');
const prevButton = document.querySelector('.slideshow-control.previous');
const nextButton = document.querySelector('.slideshow-control.next');
const numberOfSlides = [...slideshowImages.querySelectorAll('img')].length;
const navigationButtons = document.querySelectorAll('a.circle');

// Functionality related to switching between slides
const updateNavigation = () => {
  navigationButtons.forEach((btn) => {
    btn.classList.remove('selected');
  });

  navigationButtons[currentSlide].classList.add('selected');
};

const nextSlide = () => {
  currentSlide += 1;

  if (currentSlide >= numberOfSlides) { currentSlide = 0; }

  slideshowImages.style.transform = `translateX(${currentSlide * -300}px)`;
  updateNavigation();
};

const prevSlide = () => {
  currentSlide -= 1;
  if (currentSlide < 0) { currentSlide = numberOfSlides - 1; }

  slideshowImages.style.transform = `translateX(${currentSlide * -300}px)`;
  updateNavigation();
};

const selectSlide = (slideIndex) => {
  currentSlide = slideIndex;

  slideshowImages.style.transform = `translateX(${currentSlide * -300}px)`;
  updateNavigation();
};

// Functionality related to autoplay
const startSlideshow = () => {
  setTimeout(() => {
    nextSlide();
    startSlideshow();
  }, 5000);
};

prevButton.addEventListener('click', () => {
  prevSlide();
});

nextButton.addEventListener('click', () => {
  nextSlide();
});

navigationButtons.forEach((btn) => {
  const index = Number(btn.getAttribute('data-slide'));

  btn.addEventListener('click', () => {
    selectSlide(index);
  });
});

export default startSlideshow;
