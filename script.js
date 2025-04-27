
  const slider = document.getElementById('imageSlider');

  slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
  });

  slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
  });

